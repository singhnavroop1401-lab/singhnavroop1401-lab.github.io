# assets/projects/ — project images

One subfolder per project. **Drop your images into the matching subfolder**, then
register the filenames in [`../../projects-media.js`](../../projects-media.js).
Clicking a project card on the site then pops up a full-screen image gallery.

| Folder | Project | Manifest key |
|--------|---------|--------------|
| `01-ppr-tool/` | PPR Modelling & Validation Tool | `"01-ppr-tool"` |
| `02-production-scheduling/` | Production Scheduling & Lot-Sizing Study | `"02-production-scheduling"` |
| `03-thermal-printer/` | Thermal Printer MBSE Model (RAMI 4.0) | `"03-thermal-printer"` |
| `04-medical-exoskeleton/` | Medical Exoskeleton | `"04-medical-exoskeleton"` |
| `05-shaft-design/` | Shaft Design for Fatigue Loading | `"05-shaft-design"` |
| `06-feed-pump/` | Reciprocating Feed Pump | `"06-feed-pump"` |
| `07-cantilever-fea/` | Cantilever Beam FEA | `"07-cantilever-fea"` |

## How it works

1. Copy image files into the right subfolder (e.g. `01-ppr-tool/overview.png`).
2. Open [`projects-media.js`](../../projects-media.js) and list those filenames under the
   matching key. Order matters — the **first** image is used as the card thumbnail.
3. Save. That's it — the card gains a thumbnail + "View images" button, and clicking it
   opens the pop-up gallery (arrow keys / swipe to navigate, Esc to close).

**Recommended:** ~1200×750px (16:10), optimized to WebP/PNG/JPG for fast loading.

> Prefer not to touch the JS? Just drop the files in and ask Claude to register them.
