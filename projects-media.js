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

   German pages (index.de.html) read altDe / captionDe from the same
   entry. Leave them off and that image falls back to the English text,
   so an untranslated addition degrades gracefully instead of going blank.
   ========================================================= */
window.PROJECT_MEDIA = {
  // PPR Modelling & Validation Tool  →  assets/projects/01-ppr-tool/
  "01-ppr-tool": [
    { src: "interactive-graph.jpg", alt: "PPR directed graph linking resources, processes and products", caption: "Interactive PPR graph — resources, processes & products",
      altDe: "Gerichteter PPR-Graph, der Ressourcen, Prozesse und Produkte verbindet", captionDe: "Interaktiver PPR-Graph — Ressourcen, Prozesse & Produkte" },
    { src: "app-home.jpg", alt: "PPR Modeling Tool home screen with model-upload panel", caption: "PPR Modeling Tool — deployed on Streamlit",
      altDe: "Startbildschirm des PPR-Modellierungstools mit Panel zum Hochladen des Modells", captionDe: "PPR-Modellierungstool — auf Streamlit bereitgestellt" },
    { src: "graph-view.jpg", alt: "Graph View tab showing the node legend and Graphviz render controls", caption: "Graph View with legend and render modes",
      altDe: "Registerkarte „Graph View“ mit Knotenlegende und Graphviz-Renderoptionen", captionDe: "Graph View mit Legende und Rendermodi" },
    { src: "sample-model-graph.jpg", alt: "Sample model rendered as a process-resource-product graph", caption: "Sample model — assembly graph",
      altDe: "Beispielmodell, dargestellt als Prozess-Ressource-Produkt-Graph", captionDe: "Beispielmodell — Montagegraph" },
  ],

  // Production Scheduling & Lot-Sizing Study  →  assets/projects/02-production-scheduling/
  // The two SVGs are corrected redraws of the report figures: the report's Pareto
  // chart had its axis labels swapped, and its lot-size figure was plotted against
  // run index instead of lot size.
  "02-production-scheduling": [
    { src: "plant-model.jpg", alt: "Manufacturing line modeled in Siemens Tecnomatix Plant Simulation", caption: "The line in Plant Simulation",
      altDe: "In Siemens Tecnomatix Plant Simulation modellierte Fertigungslinie", captionDe: "Die Linie in Plant Simulation" },
    { src: "conceptual-model.png", alt: "Conceptual model of the five-stage production line showing Press, Laser, Bending, Profiling and Welding with machine counts, product skip paths and Bending marked as the bottleneck", caption: "Conceptual model — five stages, skip paths, Bending marked as the bottleneck",
      altDe: "Konzeptmodell der fünfstufigen Produktionslinie mit Presse, Laser, Biegen, Profilieren und Schweißen, mit Maschinenanzahl, Überspringpfaden der Produkte und Biegen als markiertem Engpass", captionDe: "Konzeptmodell — fünf Stufen, Überspringpfade, Biegen als Engpass markiert" },
    { src: "lot-size-response.svg", alt: "Line chart of the weighted objective z against uniform lot size on a log scale, U-shaped with its minimum at lot size 50", caption: "Lot size has a U-shaped response — optimum at 50",
      altDe: "Liniendiagramm der gewichteten Zielfunktion z über der einheitlichen Losgröße auf logarithmischer Skala, U-förmig mit dem Minimum bei Losgröße 50", captionDe: "Die Losgröße zeigt einen U-förmigen Verlauf — Optimum bei 50" },
    { src: "pareto-makespan-tardiness.svg", alt: "Scatter chart of makespan against total tardiness for five order-release strategies. EDD sits on the zero-tardiness axis at 67 hours makespan; the best lot-based search run sits at 30 hours makespan and 163 hours tardiness; LPT is worst at 1,046 hours tardiness", caption: "Makespan vs tardiness — EDD and the best lot-based run form the front",
      altDe: "Punktdiagramm von Durchlaufzeit gegen Gesamtverspätung für fünf Auftragsfreigabe-Strategien. EDD liegt auf der Nulllinie der Verspätung bei 67 Stunden Durchlaufzeit; der beste losbasierte Suchlauf liegt bei 30 Stunden Durchlaufzeit und 163 Stunden Verspätung; LPT ist mit 1.046 Stunden Verspätung am schlechtesten", captionDe: "Durchlaufzeit vs. Verspätung — EDD und der beste losbasierte Lauf bilden die Front" },
    { src: "chromosome-attributes.png", alt: "Plant Simulation attribute dialog listing the twelve decision variables: six lot sizes and six sequence keys, alongside the makespan, tardiness and objective outputs", caption: "The twelve decision variables exposed as model attributes",
      altDe: "Attributdialog in Plant Simulation mit den zwölf Entscheidungsvariablen: sechs Losgrößen und sechs Reihenfolgeschlüssel, neben den Ausgaben für Durchlaufzeit, Verspätung und Zielfunktion", captionDe: "Die zwölf Entscheidungsvariablen als Modellattribute" },
  ],

  // Thermal Printer MBSE Model (RAMI 4.0)  →  assets/projects/03-thermal-printer/
  "03-thermal-printer": [
    { src: "use-case-requirements-trace.jpg", alt: "Use case diagram for the thermal printer with the system-of-interest boundary, three business actors and trace links to six functional requirements", caption: "Work Station use cases, traced to requirements FR-1 – FR-6",
      altDe: "Anwendungsfalldiagramm für den Thermodrucker mit der Grenze des betrachteten Systems, drei Geschäftsakteuren und Trace-Verbindungen zu sechs funktionalen Anforderungen", captionDe: "Anwendungsfälle der Work Station, verknüpft mit den Anforderungen FR-1 – FR-6" },
    { src: "ws-activity.png", alt: "Activity diagram of the printing workflow with decision points for paper availability and print success, and a branch to printing error", caption: "Work Station activity — print a sheet, including the error branch",
      altDe: "Aktivitätsdiagramm des Druckablaufs mit Entscheidungspunkten für Papierverfügbarkeit und Druckerfolg sowie einem Zweig zum Druckfehler", captionDe: "Aktivität der Work Station — ein Blatt drucken, inklusive Fehlerzweig" },
    { src: "ws-data-flow.png", alt: "Data flow diagram showing print job data moving from the external IT system through receive, check paper availability, print content and handle printing error", caption: "Work Station data flow — the logical interfaces the controllers refine",
      altDe: "Datenflussdiagramm, das Druckauftragsdaten vom externen IT-System über Empfangen, Prüfen der Papierverfügbarkeit, Drucken des Inhalts und Behandeln des Druckfehlers zeigt", captionDe: "Datenfluss der Work Station — die logischen Schnittstellen, die die Controller verfeinern" },
    { src: "sfc-use-case.jpg", alt: "Use case diagram for the Sheet Feed Controller with business cases for control sheet feeding, detect paper presence, handle feed error, report status and maintenance", caption: "Sheet Feed Controller use cases",
      altDe: "Anwendungsfalldiagramm für den Sheet Feed Controller mit Geschäftsfällen für Papierzuführung steuern, Papieranwesenheit erkennen, Zuführfehler behandeln, Status melden und Wartung", captionDe: "Anwendungsfälle des Sheet Feed Controllers" },
    { src: "sfc-activity.png", alt: "Activity diagram of the sheet feed control logic: receive command, check paper presence, start feed, monitor progress, detect feed error, report status", caption: "Sheet Feed Controller logic — detect, decide, actuate",
      altDe: "Aktivitätsdiagramm der Papierzuführungslogik: Befehl empfangen, Papieranwesenheit prüfen, Zuführung starten, Fortschritt überwachen, Zuführfehler erkennen, Status melden", captionDe: "Logik des Sheet Feed Controllers — erkennen, entscheiden, stellen" },
    { src: "sfc-cps.png", alt: "Cyber-physical system diagram mapping sheet feed control logic to the controller PCB, feed motor, motor driver circuit and paper presence sensor", caption: "Bottom of the chain — control logic mapped to real hardware",
      altDe: "Diagramm des cyber-physischen Systems, das die Papierzuführungslogik auf Controller-Platine, Zuführmotor, Motortreiberschaltung und Papieranwesenheitssensor abbildet", captionDe: "Ende der Kette — Steuerungslogik auf reale Hardware abgebildet" },
    { src: "ppr-process-flow.jpg", alt: "Product-Process-Resource flow from receiving a print job through validation, paper feed, printing and status reporting", caption: "PPR process flow — print job to printed sheet",
      altDe: "Produkt-Prozess-Ressource-Ablauf vom Empfang eines Druckauftrags über Validierung, Papierzuführung und Drucken bis zur Statusmeldung", captionDe: "PPR-Prozessablauf — vom Druckauftrag zum gedruckten Blatt" },
    { src: "ppr-resource-allocation.jpg", alt: "PPR diagram of the sheet-feed subsystem linking processes to the feed controller PCB, feed motor and paper presence sensor", caption: "PPR resource allocation — sheet-feed subsystem",
      altDe: "PPR-Diagramm des Papierzuführungs-Subsystems, das Prozesse mit der Controller-Platine, dem Zuführmotor und dem Papieranwesenheitssensor verknüpft", captionDe: "PPR-Ressourcenzuordnung — Papierzuführungs-Subsystem" },
  ],

  // Medical Exoskeleton  →  assets/projects/04-medical-exoskeleton/
  "04-medical-exoskeleton": [
    { src: "prototype.jpg", alt: "Assembled lower-limb exoskeleton prototype with aluminium frame and stainless steel shafts", caption: "The built article — aluminium 6061 frame, 304 SS shafts",
      altDe: "Montierter Prototyp des Exoskeletts für die untere Extremität mit Aluminiumrahmen und Edelstahlwellen", captionDe: "Das gebaute Exemplar — Rahmen aus Aluminium 6061, Wellen aus Edelstahl 304" },
    { src: "prototype-worn.jpg", alt: "The exoskeleton prototype strapped to a wearer's leg, with the gearbox at the hip and the linkage running down to the foot", caption: "Fitted to a wearer during testing",
      altDe: "Der Exoskelett-Prototyp am Bein eines Trägers festgeschnallt, mit dem Getriebe an der Hüfte und dem Gestänge bis hinunter zum Fuß", captionDe: "Während des Tests an einem Träger angepasst" },
    { src: "cad-assembly.png", alt: "CAD render of the full exoskeleton leg assembly showing the hip gearbox, thigh and calf linkage and foot plate", caption: "The assembly in Onshape",
      altDe: "CAD-Darstellung der vollständigen Exoskelett-Beinbaugruppe mit Hüftgetriebe, Oberschenkel- und Wadengestänge und Fußplatte", captionDe: "Die Baugruppe in Onshape" },
    { src: "worm-drive-cutaway.png", alt: "Cutaway CAD render of the worm drive showing the worm shaft meshing with the brass worm wheel inside its housing", caption: "Worm drive — sized at 25:1 before the bought-in gearbox replaced it",
      altDe: "Schnittdarstellung des Schneckengetriebes, in der die Schneckenwelle mit dem Schneckenrad aus Messing im Gehäuse kämmt", captionDe: "Schneckengetriebe — mit 25:1 ausgelegt, bevor das zugekaufte Getriebe es ersetzte" },
    { src: "fea-knee-assembly.jpg", alt: "Finite element stress plot of the knee assembly with a colour scale, red at the cam arms and blue through the casing", caption: "FEA of the knee assembly — peak stress an order below yield",
      altDe: "Finite-Elemente-Spannungsplot der Kniebaugruppe mit Farbskala, rot an den Nockenarmen und blau durch das Gehäuse", captionDe: "FEM der Kniebaugruppe — Spitzenspannung eine Größenordnung unter der Streckgrenze" },
    { src: "production-drawing.png", alt: "Dimensioned production drawing of the calf shaft with a section view and title block", caption: "Production drawing — calf shaft",
      altDe: "Bemaßte Fertigungszeichnung der Wadenwelle mit Schnittansicht und Schriftfeld", captionDe: "Fertigungszeichnung — Wadenwelle" },
    { src: "machining.jpg", alt: "Milling machine cutting a metal block with swarf on the table", caption: "Shafts and plates were machined in the institute workshop",
      altDe: "Fräsmaschine beim Zerspanen eines Metallblocks, mit Spänen auf dem Tisch", captionDe: "Wellen und Platten wurden in der Institutswerkstatt gefertigt" },
  ],

  // Backhoe Loader Kinematics & Force Analysis  →  assets/projects/05-backhoe-kinematics/
  // NOTE: these are redacted derivatives. All numeric values (force magnitudes,
  // ram specs, KPI readouts) are obscured and the competitor-benchmarking data is
  // excluded. Unredacted originals live in the gitignored _source/ folder.
  "05-backhoe-kinematics": [
    { src: "force-diagram.png", alt: "Free-body diagram of a backhoe loader arm with force vectors and centre-of-gravity markers labelled at every pin joint", caption: "Free-body diagram — forces resolved at each pin joint (magnitudes withheld)",
      altDe: "Freikörperbild eines Baggerladerarms mit Kraftvektoren und Schwerpunktmarkierungen, an jedem Bolzengelenk beschriftet", captionDe: "Freikörperbild — Kräfte an jedem Bolzengelenk aufgelöst (Beträge zurückgehalten)" },
    { src: "mechanism-geometry.png", alt: "Dimensioned geometry of the boom, dipper, kingpost, guide lever, guide link and bucket linkage components", caption: "Linkage geometry — boom, dipper, kingpost, guide lever, guide link, bucket",
      altDe: "Bemaßte Geometrie von Ausleger, Löffelstiel, Königspfosten, Führungshebel, Führungslenker und Löffelgestänge", captionDe: "Gestängegeometrie — Ausleger, Löffelstiel, Königspfosten, Führungshebel, Führungslenker, Löffel" },
    { src: "performance-gauges.png", alt: "Six gauge readouts computed by the tool: reach, maximum load over height, bucket rotation, working height, and bucket and dipper breakout forces", caption: "Computed performance KPIs (values withheld)",
      altDe: "Sechs vom Werkzeug berechnete Anzeigen: Reichweite, maximale Last über Höhe, Löffeldrehung, Arbeitshöhe sowie Losbrechkraft von Löffel und Löffelstiel", captionDe: "Berechnete Leistungskennzahlen (Werte zurückgehalten)" },
    { src: "quick-hitch-coupler.jpg", alt: "CAD assembly of a quick-hitch coupler showing the mounting frame, pin bosses and hydraulic actuator", caption: "Quick-hitch coupler — CAD assembly",
      altDe: "CAD-Baugruppe eines Schnellwechslers mit Aufnahmerahmen, Bolzenaugen und Hydraulikzylinder", captionDe: "Schnellwechsler — CAD-Baugruppe" },
  ],
  // Shaft Design for Fatigue Loading  →  assets/projects/06-shaft-design/
  // NOTE: production-drawing.png is a redacted derivative — the title block's
  // NAME and APPROVED cells are whited out in the file itself.
  "06-shaft-design": [
    { src: "cad-model.jpg", alt: "SolidWorks model of the stepped countershaft carrying the two gear discs", caption: "The countershaft as modelled — two gears, three bearing steps",
      altDe: "SolidWorks-Modell der abgesetzten Vorgelegewelle mit den beiden Zahnradscheiben", captionDe: "Die Vorgelegewelle als Modell — zwei Zahnräder, drei Lagerabsätze" },
    { src: "shaft-layout.jpg", alt: "Hand-drawn layout of the countershaft with gear A and gear B, the 400, 350 and 300 mm spacings and the 20 degree pressure angle marked", caption: "The layout the analysis starts from — spans, gear diameters, 20° pressure angle",
      altDe: "Handskizze der Vorgelegewelle mit Zahnrad A und B, den Abständen 400, 350 und 300 mm und dem Eingriffswinkel von 20 Grad", captionDe: "Die Ausgangsgeometrie der Analyse — Stützweiten, Teilkreise, 20° Eingriffswinkel" },
    { src: "von-mises-stress.jpg", alt: "Static von Mises stress plot of the countershaft with loads and fixtures shown, the whole part at the blue end of a scale topping out at the 580 MPa yield strength", caption: "Static von Mises against a 580 MPa yield scale — the part never leaves blue",
      altDe: "Statischer von-Mises-Spannungsplot der Welle mit Lasten und Lagerungen, das gesamte Bauteil am blauen Ende einer bis zur Streckgrenze von 580 MPa reichenden Skala", captionDe: "Statische von-Mises-Spannung gegen 580 MPa Streckgrenze — das Bauteil bleibt durchweg blau" },
    { src: "fatigue-life.jpg", alt: "Fatigue total-life plot of the countershaft showing uniform life above one billion cycles", caption: "Fatigue life — uniformly past 10⁹ cycles, i.e. run-out",
      altDe: "Ermüdungslebensdauer-Plot der Welle mit gleichmäßiger Lebensdauer über einer Milliarde Lastwechsel", captionDe: "Lebensdauer — durchweg jenseits von 10⁹ Lastwechseln, also Dauerfestigkeit" },
    { src: "production-drawing.png", alt: "Dimensioned production drawing of the countershaft with four views, the 400, 350 and 300 mm spacings, the 650 mm gear diameter and the 68.33 mm shaft diameter", caption: "Production drawing — the calculated 68.33 mm carried straight onto the sheet",
      altDe: "Bemaßte Fertigungszeichnung der Vorgelegewelle mit vier Ansichten, den Abständen 400, 350 und 300 mm, dem Zahnraddurchmesser 650 mm und dem Wellendurchmesser 68,33 mm", captionDe: "Fertigungszeichnung — die berechneten 68,33 mm direkt aufs Blatt übernommen" },
  ],

  // Reciprocating Feed Pump  →  assets/projects/07-feed-pump/
  "07-feed-pump": [
    { src: "isometric-view.jpg", alt: "Isometric view of the reciprocating feed pump assembly", caption: "Reciprocating feed pump — isometric view",
      altDe: "Isometrische Ansicht der Kolben-Speisepumpen-Baugruppe", captionDe: "Kolben-Speisepumpe — isometrische Ansicht" },
    { src: "section-view.jpg", alt: "Section view through the assembled feed pump showing the barrel, plunger, valve chest and air vessel with the internal passages exposed", caption: "Section through the assembly — barrel, valve chest and air vessel",
      altDe: "Schnittansicht durch die zusammengebaute Speisepumpe mit Zylinder, Plunger, Ventilkasten und Windkessel sowie den freigelegten inneren Kanälen", captionDe: "Schnitt durch die Baugruppe — Zylinder, Ventilkasten und Windkessel" },
    { src: "section-plunger.jpg", alt: "Section view with the plunger driven into the barrel body, showing the sliding fit along its length", caption: "The plunger at stroke — the fit the whole assembly is built around",
      altDe: "Schnittansicht mit in den Zylinderkörper eingefahrenem Plunger, die den Schiebesitz über die Länge zeigt", captionDe: "Der Plunger im Hub — der Sitz, um den herum die ganze Baugruppe gebaut ist" },
    { src: "valve-chest.jpg", alt: "Three-dimensional model of the valve chest with its three flanged ports", caption: "Valve chest — three flanged ports, the most involved of the given parts",
      altDe: "Dreidimensionales Modell des Ventilkastens mit seinen drei Flanschanschlüssen", captionDe: "Ventilkasten — drei Flanschanschlüsse, das aufwendigste der vorgegebenen Teile" },
    { src: "barrel-body.jpg", alt: "Three-dimensional model of the barrel body with its mounting flange and side branch", caption: "Barrel body — the part every fit is referenced to",
      altDe: "Dreidimensionales Modell des Zylinderkörpers mit Befestigungsflansch und Seitenabgang", captionDe: "Zylinderkörper — das Teil, auf das sich jeder Sitz bezieht" },
    { src: "bracket.jpg", alt: "Three-dimensional model of the pump mounting bracket with its bolt holes and gusset", caption: "Mounting bracket",
      altDe: "Dreidimensionales Modell der Befestigungskonsole der Pumpe mit Schraubenlöchern und Rippe", captionDe: "Befestigungskonsole" },
    { src: "assembly-drawing.jpg", alt: "Dimensioned assembly drawing of the reciprocating feed pump", caption: "Assembly drawing with principal dimensions",
      altDe: "Bemaßte Zusammenbauzeichnung der Kolben-Speisepumpe", captionDe: "Zusammenbauzeichnung mit Hauptabmessungen" },
  ],

  // Crankshaft to Complete Drive Assembly  →  assets/projects/08-crankshaft-drive/
  "08-crankshaft-drive": [
    { src: "crankshaft-model.jpg", alt: "PTC Creo model of the Honda GX-160 crankshaft with its counterweights and tapered output end", caption: "The GX-160 crankshaft, remodelled to the given constraints",
      altDe: "PTC-Creo-Modell der Honda-GX-160-Kurbelwelle mit Gegengewichten und konischem Abtriebsende", captionDe: "Die GX-160-Kurbelwelle, nach den vorgegebenen Randbedingungen neu modelliert" },
    { src: "cg-offset.jpg", alt: "The crankshaft model with a measurement callout reading a centre-of-gravity distance of 1.83964 mm from the axis of rotation", caption: "Where it starts — centre of gravity 1.84 mm off the axis of rotation",
      altDe: "Das Kurbelwellenmodell mit einer Messanzeige, die einen Schwerpunktabstand von 1,83964 mm zur Drehachse ausweist", captionDe: "Der Ausgangspunkt — Schwerpunkt 1,84 mm neben der Drehachse" },
    { src: "sensitivity-plot.jpg", alt: "Sensitivity plot of centre-of-gravity offset against counterweight dimension, rising steeply from zero at 81 mm to 1.8 mm at 84 mm", caption: "Sensitivity run — the offset is almost entirely one parameter's doing",
      altDe: "Sensitivitätsdiagramm des Schwerpunktversatzes über der Gegengewichtsabmessung, von null bei 81 mm steil auf 1,8 mm bei 84 mm ansteigend", captionDe: "Sensitivitätslauf — der Versatz geht fast vollständig auf einen Parameter zurück" },
    { src: "crankshaft-drawing.png", alt: "Dimensioned drawing of the crankshaft with front and side views, section detail and journal diameters", caption: "Crankshaft drawing — journals, throws and the 59.5 mm flange constraint",
      altDe: "Bemaßte Zeichnung der Kurbelwelle mit Vorder- und Seitenansicht, Schnittdetail und Lagerzapfendurchmessern", captionDe: "Kurbelwellenzeichnung — Lagerzapfen, Hübe und die 59,5-mm-Flanschvorgabe" },
    { src: "engine-model.jpg", alt: "Model of the Honda GX-160 engine block, hollowed so the modelled crankshaft can be fitted inside it", caption: "The engine, cut hollow so the crankshaft drops in",
      altDe: "Modell des Honda-GX-160-Motorblocks, ausgehöhlt, damit die modellierte Kurbelwelle hineinpasst", captionDe: "Der Motor, hohl ausgeführt, damit die Kurbelwelle hineinpasst" },
    { src: "scotch-yoke-pump.jpg", alt: "Assembly step with the engine coupled through a shaft to the feed pump, shown in orange, before the frame is added", caption: "Engine coupled to the pump — the scotch-yoke turns rotation into stroke",
      altDe: "Montageschritt mit dem über eine Welle an die orange dargestellte Speisepumpe gekoppelten Motor, vor dem Einbau des Rahmens", captionDe: "Motor an die Pumpe gekoppelt — die Kulisse macht aus Drehung einen Hub" },
    { src: "drive-assembly.jpg", alt: "The finished assembly on its welded support frame: engine at one end, coupling and scotch-yoke in the middle, feed pump at the other", caption: "The finished rig on its AFX frame — engine, scotch-yoke, pump",
      altDe: "Die fertige Baugruppe auf ihrem geschweißten Traggestell: Motor an einem Ende, Kupplung und Kulissenantrieb in der Mitte, Speisepumpe am anderen", captionDe: "Die fertige Anlage auf dem AFX-Rahmen — Motor, Kulissenantrieb, Pumpe" },
  ],

};
