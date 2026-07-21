/* =========================================================
   Navroop Singh — Portfolio · Project image gallery data
   ---------------------------------------------------------
   THIS IS THE ONLY FILE YOU EDIT TO ADD PROJECT PICTURES.

   1. Drop image files into  assets/projects/<folder>/
   2. List the filenames below, under the matching key.
   3. Save & refresh. The card gets a thumbnail + a
      "View images" button; clicking it opens a pop-up gallery.

   The FIRST image in a list is used as the card thumbnail.
   Leave a list empty ( [] ) and that card stays as it is now.

   Two ways to list an image:
     • Just the filename:            "overview.png"
     • With alt text / caption:      { src: "overview.png",
                                        alt: "Short description for screen readers",
                                        caption: "Text shown under the image" }
   ========================================================= */
window.PROJECT_MEDIA = {
  // PPR Modelling & Validation Tool  →  assets/projects/01-ppr-tool/
  "01-ppr-tool": [
    { src: "interactive-graph.jpg", alt: "PPR directed graph linking resources, processes and products", caption: "Interactive PPR graph — resources, processes & products" },
    { src: "app-home.jpg", alt: "PPR Modeling Tool home screen with model-upload panel", caption: "PPR Modeling Tool — deployed on Streamlit" },
    { src: "graph-view.jpg", alt: "Graph View tab showing the node legend and Graphviz render controls", caption: "Graph View with legend and render modes" },
    { src: "sample-model-graph.jpg", alt: "Sample model rendered as a process-resource-product graph", caption: "Sample model — assembly graph" },
  ],

  // Production Scheduling Optimisation  →  assets/projects/02-production-scheduling/
  "02-production-scheduling": [
    { src: "plant-model.jpg", alt: "Manufacturing line modeled in Siemens Tecnomatix Plant Simulation", caption: "Plant model in Siemens Tecnomatix Plant Simulation" },
  ],

  // Thermal Printer System Architecture  →  assets/projects/03-thermal-printer/
  "03-thermal-printer": [
    // "rami-layers.png",
  ],

  // Medical Exoskeleton  →  assets/projects/04-medical-exoskeleton/
  "04-medical-exoskeleton": [
    // "prototype.jpg",
  ],

  // Shaft Design for Fatigue Loading  →  assets/projects/05-shaft-design/
  "05-shaft-design": [
    // "shaft-drawing.png",
  ],

  // Reciprocating Feed Pump  →  assets/projects/06-feed-pump/
  "06-feed-pump": [
    // "mechanism.png",
  ],

  // Cantilever Beam FEA  →  assets/projects/07-cantilever-fea/
  "07-cantilever-fea": [
    // "mode-shape.png",
  ],
};
