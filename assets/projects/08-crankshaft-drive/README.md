# Crankshaft to Complete Drive Assembly — images

Drop screenshots / renders for **this** project into this folder.
Then register the filenames in [`../../../projects-media.js`](../../../projects-media.js)
under the key **`"08-crankshaft-drive"`**, e.g.:

    "08-crankshaft-drive": ["crankshaft-model.jpg"],

- The **first** image becomes the card's representative image; all of them show in the click-to-open gallery.
- Recommended size: ~1200×750px (16:10), optimized (WebP / PNG / JPG).
- Optional captions: use `{ src: "crankshaft-model.jpg", alt: "Short description for screen readers", caption: "Text shown under the image" }`.
- German pages read `altDe` / `captionDe` from the same entry; leave them off and the image falls back to English.

This folder replaced `08-cantilever-fea/`, which was retired along with the
Cantilever Beam FEA card.

**Source material is local-only.** These figures were cropped out of
`assets/crankshaft-balancing-report.docx` and
`assets/creo-assembly-scotch-yoke-report.docx`, both gitignored. Screenshots
were cropped to remove application chrome and Windows taskbars — re-crop from
the source rather than re-exporting a raw screenshot.
