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

  // Production Scheduling & Lot-Sizing Study  →  assets/projects/02-production-scheduling/
  // The two SVGs are corrected redraws of the report figures: the report's Pareto
  // chart had its axis labels swapped, and its lot-size figure was plotted against
  // run index instead of lot size.
  "02-production-scheduling": [
    { src: "plant-model.jpg", alt: "Manufacturing line modeled in Siemens Tecnomatix Plant Simulation", caption: "Plant model in Siemens Tecnomatix Plant Simulation" },
    { src: "pareto-makespan-tardiness.svg", alt: "Scatter chart of makespan against total tardiness for five order-release strategies. EDD sits on the zero-tardiness axis at 67 hours makespan; the best lot-based search run sits at 30 hours makespan and 163 hours tardiness; LPT is worst at 1,046 hours tardiness", caption: "Makespan vs total tardiness across the five strategies — EDD and the best lot-based run form the trade-off front" },
    { src: "lot-size-response.svg", alt: "Line chart of the weighted objective z against uniform lot size on a log scale, U-shaped with its minimum at lot size 50", caption: "Lot size has a U-shaped response — very large lots reproduce the family rule, very small lots explode set-up count. Optimum at 50" },
  ],

  // Thermal Printer MBSE Model (RAMI 4.0)  →  assets/projects/03-thermal-printer/
  "03-thermal-printer": [
    { src: "use-case-requirements-trace.jpg", alt: "Use case diagram for the thermal printer with the system-of-interest boundary, three business actors and trace links to six functional requirements", caption: "Use case model traced to functional requirements FR-1 – FR-6" },
    { src: "ppr-process-flow.jpg", alt: "Product-Process-Resource flow from receiving a print job through validation, paper feed, printing and status reporting", caption: "PPR process flow — print job to printed sheet" },
    { src: "ppr-resource-allocation.jpg", alt: "PPR diagram of the sheet-feed subsystem linking processes to the feed controller PCB, feed motor and paper presence sensor", caption: "PPR resource allocation — sheet-feed subsystem" },
    { src: "use-case-platen-controller.jpg", alt: "Use case diagram for the platen force controller subsystem showing include and extend relationships between platen force cases", caption: "Platen force controller — subsystem use cases (teammate's scope)" },
  ],

  // Medical Exoskeleton  →  assets/projects/04-medical-exoskeleton/
  "04-medical-exoskeleton": [
    { src: "prototype.jpg", alt: "Assembled lower-limb exoskeleton prototype with aluminium frame and stainless steel shafts", caption: "Lower-limb exoskeleton prototype — aluminium 6061 frame, 304 SS shafts" },
  ],

  // Shaft Design for Fatigue Loading  →  assets/projects/05-shaft-design/
  "05-shaft-design": [
    // "shaft-drawing.png",
  ],

  // Reciprocating Feed Pump  →  assets/projects/06-feed-pump/
  "06-feed-pump": [
    { src: "isometric-view.jpg", alt: "Isometric view of the reciprocating feed pump assembly", caption: "Reciprocating feed pump — isometric view" },
    { src: "assembly-drawing.jpg", alt: "Dimensioned assembly drawing of the reciprocating feed pump", caption: "Assembly drawing with principal dimensions" },
  ],

  // Cantilever Beam FEA  →  assets/projects/07-cantilever-fea/
  "07-cantilever-fea": [
    // "mode-shape.png",
  ],

  // Backhoe Loader Kinematics & Force Analysis  →  assets/projects/08-backhoe-kinematics/
  // NOTE: these are redacted derivatives. All numeric values (force magnitudes,
  // ram specs, KPI readouts) are obscured and the competitor-benchmarking data is
  // excluded. Unredacted originals live in the gitignored _source/ folder.
  "08-backhoe-kinematics": [
    { src: "force-diagram.png", alt: "Free-body diagram of a backhoe loader arm with force vectors and centre-of-gravity markers labelled at every pin joint", caption: "Free-body diagram — forces resolved at each pin joint (magnitudes withheld)" },
    { src: "mechanism-geometry.png", alt: "Dimensioned geometry of the boom, dipper, kingpost, guide lever, guide link and bucket linkage components", caption: "Linkage geometry — boom, dipper, kingpost, guide lever, guide link, bucket" },
    { src: "performance-gauges.png", alt: "Six gauge readouts computed by the tool: reach, maximum load over height, bucket rotation, working height, and bucket and dipper breakout forces", caption: "Computed performance KPIs (values withheld)" },
    { src: "quick-hitch-coupler.jpg", alt: "CAD assembly of a quick-hitch coupler showing the mounting frame, pin bosses and hydraulic actuator", caption: "Quick-hitch coupler — CAD assembly" },
  ],
};
