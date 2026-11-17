# Needle Guidance Pipeline, images

Drop screenshots for **this** project into this folder.
Then register the filenames in [`../../../projects-media.js`](../../../projects-media.js)
under the key **`"09-needle-guidance"`**, e.g.:

    "09-needle-guidance": ["slicer-plan.png", "mujoco-arm.png"],

Two are expected, and the case-study page carries a visible placeholder for each
until they arrive:

| Placeholder on the case study | Suggested filename |
|---|---|
| `[image: Slicer plan]` | `slicer-plan.png` |
| `[image: MuJoCo arm]` | `mujoco-arm.png` |

- The **first** image becomes the card's representative image; all of them show in the click-to-open gallery.
- Recommended size: ~1200x750px (16:10), optimized (WebP / PNG / JPG).
- Optional captions: use `{ src: "slicer-plan.png", alt: "Short description for screen readers", caption: "Text shown under the image" }`.
- German pages read `altDe` / `captionDe` from the same entry; leave them off and the image falls back to English.

## Still to add to the P.09 case study

The page shipped without visible placeholders, because raw `[...]` markers on a
live portfolio page look unfinished. Three things are deferred rather than
done, and none of them block the page from reading well:

1. **The two screenshots above.** Add them as `<figure class="case__figure">`
   blocks in both `projects/09-needle-guidance.html` and
   `projects/09-needle-guidance.de.html`, the way the other case studies do.
2. **One sentence per pipeline step** on why that step mattered or what was
   hard about it. The five steps currently state what happens, not what it
   cost to get there, which is the part the other case studies are strongest on.
3. **A `Context` row** in the facts list (course project, thesis or personal
   work, and when). Every other case study has one; this is the only fact that
   was not known when the page was written.
