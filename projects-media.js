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
    { src: "plant-model.jpg", alt: "Manufacturing line modeled in Siemens Tecnomatix Plant Simulation", caption: "The line in Plant Simulation" },
    { src: "conceptual-model.png", alt: "Conceptual model of the five-stage production line showing Press, Laser, Bending, Profiling and Welding with machine counts, product skip paths and Bending marked as the bottleneck", caption: "Conceptual model — five stages, skip paths, Bending marked as the bottleneck" },
    { src: "lot-size-response.svg", alt: "Line chart of the weighted objective z against uniform lot size on a log scale, U-shaped with its minimum at lot size 50", caption: "Lot size has a U-shaped response — optimum at 50" },
    { src: "pareto-makespan-tardiness.svg", alt: "Scatter chart of makespan against total tardiness for five order-release strategies. EDD sits on the zero-tardiness axis at 67 hours makespan; the best lot-based search run sits at 30 hours makespan and 163 hours tardiness; LPT is worst at 1,046 hours tardiness", caption: "Makespan vs tardiness — EDD and the best lot-based run form the front" },
    { src: "chromosome-attributes.png", alt: "Plant Simulation attribute dialog listing the twelve decision variables: six lot sizes and six sequence keys, alongside the makespan, tardiness and objective outputs", caption: "The twelve decision variables exposed as model attributes" },
  ],

  // Thermal Printer MBSE Model (RAMI 4.0)  →  assets/projects/03-thermal-printer/
  "03-thermal-printer": [
    { src: "use-case-requirements-trace.jpg", alt: "Use case diagram for the thermal printer with the system-of-interest boundary, three business actors and trace links to six functional requirements", caption: "Work Station use cases, traced to requirements FR-1 – FR-6" },
    { src: "ws-activity.png", alt: "Activity diagram of the printing workflow with decision points for paper availability and print success, and a branch to printing error", caption: "Work Station activity — print a sheet, including the error branch" },
    { src: "ws-data-flow.png", alt: "Data flow diagram showing print job data moving from the external IT system through receive, check paper availability, print content and handle printing error", caption: "Work Station data flow — the logical interfaces the controllers refine" },
    { src: "sfc-use-case.jpg", alt: "Use case diagram for the Sheet Feed Controller with business cases for control sheet feeding, detect paper presence, handle feed error, report status and maintenance", caption: "Sheet Feed Controller use cases" },
    { src: "sfc-activity.png", alt: "Activity diagram of the sheet feed control logic: receive command, check paper presence, start feed, monitor progress, detect feed error, report status", caption: "Sheet Feed Controller logic — detect, decide, actuate" },
    { src: "sfc-cps.png", alt: "Cyber-physical system diagram mapping sheet feed control logic to the controller PCB, feed motor, motor driver circuit and paper presence sensor", caption: "Bottom of the chain — control logic mapped to real hardware" },
    { src: "ppr-process-flow.jpg", alt: "Product-Process-Resource flow from receiving a print job through validation, paper feed, printing and status reporting", caption: "PPR process flow — print job to printed sheet" },
    { src: "ppr-resource-allocation.jpg", alt: "PPR diagram of the sheet-feed subsystem linking processes to the feed controller PCB, feed motor and paper presence sensor", caption: "PPR resource allocation — sheet-feed subsystem" },
  ],

  // Medical Exoskeleton  →  assets/projects/04-medical-exoskeleton/
  "04-medical-exoskeleton": [
    { src: "prototype.jpg", alt: "Assembled lower-limb exoskeleton prototype with aluminium frame and stainless steel shafts", caption: "The built article — aluminium 6061 frame, 304 SS shafts" },
    { src: "prototype-worn.jpg", alt: "The exoskeleton prototype strapped to a wearer's leg, with the gearbox at the hip and the linkage running down to the foot", caption: "Fitted to a wearer during testing" },
    { src: "cad-assembly.png", alt: "CAD render of the full exoskeleton leg assembly showing the hip gearbox, thigh and calf linkage and foot plate", caption: "The assembly in Onshape" },
    { src: "worm-drive-cutaway.png", alt: "Cutaway CAD render of the worm drive showing the worm shaft meshing with the brass worm wheel inside its housing", caption: "Worm drive — sized at 25:1 before the bought-in gearbox replaced it" },
    { src: "fea-knee-assembly.jpg", alt: "Finite element stress plot of the knee assembly with a colour scale, red at the cam arms and blue through the casing", caption: "FEA of the knee assembly — peak stress an order below yield" },
    { src: "production-drawing.png", alt: "Dimensioned production drawing of the calf shaft with a section view and title block", caption: "Production drawing — calf shaft" },
    { src: "machining.jpg", alt: "Milling machine cutting a metal block with swarf on the table", caption: "Shafts and plates were machined in the institute workshop" },
  ],

  // Backhoe Loader Kinematics & Force Analysis  →  assets/projects/05-backhoe-kinematics/
  // NOTE: these are redacted derivatives. All numeric values (force magnitudes,
  // ram specs, KPI readouts) are obscured and the competitor-benchmarking data is
  // excluded. Unredacted originals live in the gitignored _source/ folder.
  "05-backhoe-kinematics": [
    { src: "force-diagram.png", alt: "Free-body diagram of a backhoe loader arm with force vectors and centre-of-gravity markers labelled at every pin joint", caption: "Free-body diagram — forces resolved at each pin joint (magnitudes withheld)" },
    { src: "mechanism-geometry.png", alt: "Dimensioned geometry of the boom, dipper, kingpost, guide lever, guide link and bucket linkage components", caption: "Linkage geometry — boom, dipper, kingpost, guide lever, guide link, bucket" },
    { src: "performance-gauges.png", alt: "Six gauge readouts computed by the tool: reach, maximum load over height, bucket rotation, working height, and bucket and dipper breakout forces", caption: "Computed performance KPIs (values withheld)" },
    { src: "quick-hitch-coupler.jpg", alt: "CAD assembly of a quick-hitch coupler showing the mounting frame, pin bosses and hydraulic actuator", caption: "Quick-hitch coupler — CAD assembly" },
  ],
  // Shaft Design for Fatigue Loading  →  assets/projects/06-shaft-design/
  "06-shaft-design": [
    // "shaft-drawing.png",
  ],

  // Reciprocating Feed Pump  →  assets/projects/07-feed-pump/
  "07-feed-pump": [
    { src: "isometric-view.jpg", alt: "Isometric view of the reciprocating feed pump assembly", caption: "Reciprocating feed pump — isometric view" },
    { src: "assembly-drawing.jpg", alt: "Dimensioned assembly drawing of the reciprocating feed pump", caption: "Assembly drawing with principal dimensions" },
  ],

  // Cantilever Beam FEA  →  assets/projects/08-cantilever-fea/
  "08-cantilever-fea": [
    // "mode-shape.png",
  ],

};
