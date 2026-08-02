#!/usr/bin/env bash
# Regenerate assets/Navroop-Singh-CV.pdf from resume.html.
#
# Run this after ANY edit to resume.html or resume.css — the download button
# serves a committed file, so the PDF goes stale silently otherwise.
#
#   ./scripts/build-cv.sh
#
# Then check the page count. The print stylesheet is tuned for two A4 pages;
# adding content can push a single item onto a third, which looks careless.
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Chrome is a Windows binary under Git Bash, so it can't read a POSIX path.
# Without this it renders an error page and writes a 1-page PDF that looks
# plausible until you open it.
if command -v cygpath >/dev/null 2>&1; then
  win_root="$(cygpath -m "$root")"
else
  win_root="$root"
fi
out="$win_root/assets/Navroop-Singh-CV.pdf"

# Chrome needs its own profile dir here: with the default one it exits 0 and
# writes nothing if a normal Chrome window is already open.
profile_posix="$(mktemp -d)"
trap 'rm -rf "$profile_posix"' EXIT
if command -v cygpath >/dev/null 2>&1; then
  profile="$(cygpath -m "$profile_posix")"
else
  profile="$profile_posix"
fi

chrome=""
for candidate in \
  "/c/Program Files/Google/Chrome/Application/chrome.exe" \
  "/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" \
  "$(command -v google-chrome || true)" \
  "$(command -v chromium || true)" \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
do
  [ -n "$candidate" ] && [ -x "$candidate" ] && { chrome="$candidate"; break; }
done
[ -n "$chrome" ] || { echo "No Chrome/Chromium found — install one or edit this script." >&2; exit 1; }

"$chrome" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --user-data-dir="$profile" \
  --no-pdf-header-footer \
  --virtual-time-budget=8000 \
  --print-to-pdf="$out" \
  "file:///$win_root/resume.html"

echo "Wrote $out"
command -v python >/dev/null && python - "$out" <<'PY' || true
import sys
try:
    from pypdf import PdfReader
    print("pages:", len(PdfReader(sys.argv[1]).pages))
except ImportError:
    pass
PY
