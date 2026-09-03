/* DWC laitues — catalogue interactif */
const CATEGORIES = [
  "Enceinte & réservoir",
  "Éclairage & air",
  "Humide — chimie",
  "Sec — air & contrôle",
  "Nutriments",
  "Électricité & sécurité",
  "Backup — config v1",
];

const PRODUCTS = [
  {
    id: "tente",
    cat: "Enceinte & réservoir",
    name: "Tente de culture",
    model: "AC Infinity CLOUDLAB 844 (4×4×80 po)",
    sku: "AC-CBA844 / B08MP1ZPMX",
    qty: "1",
    price: "299,00 $ CAD",
    currency: "CAD",
    supplier: "Amazon.ca",
    img: "images/acinfinity-cloudlab-844.jpg",
    url: "https://www.amazon.ca/AC-Infinity-CLOUDLAB-Controller-Hydroponics/dp/B08MP1ZPMX?th=1",
    desc: "Enceinte 48×48×80 po, toile 2000D, pôles 1 po, plaque de montage contrôleur. Modèle CLOUDLAB 844 (AC‑CBA844). On ne prend pas le kit UIS/69 Pro : il reste retiré en bas de page. Volume suffisant pour deux bacs DWC brun FG335192BRN sous LED dimmable."
  },
  {
    id: "spty100",
    cat: "Enceinte & réservoir",
    name: "Bac de rétention",
    model: "Emax Plastics SPTY100",
    sku: "SPTY100",
    qty: "1",
    price: "323,56 $ CAD",
    currency: "CAD",
    supplier: "Emax Plastics",
    img: "images/emax-spty100.jpg",
    url: "https://emaxplastics.ca/shop-here/spill-containment-trays/spill-containment-trays-m-46-x-38-x-12/",
    desc: "Plateau PE rotomoulé canadien 46×38×12 po / 100 gal; secondaire pour condo; porte deux bus tubs FG335192BRN; bande sèche ~10 po possible sur le petit côté dans la tente 4×4; freight; blanc food‑grade sur demande. Un SEN0454 dedans."
  },
  {
    id: "fg335192brn",
    cat: "Enceinte & réservoir",
    name: "Réservoirs DWC",
    model: "Rubbermaid Commercial FG335192BRN (brun)",
    sku: "CF691 (Linen Plus) · Mfr FG335192BRN",
    qty: "2",
    price: "38,50 $ CAD / unité",
    currency: "CAD",
    supplier: "Linen Plus",
    img: "images/rubbermaid-fg335192brn.jpg",
    url: "https://www.linenplus.ca/en/rubbermaid-undivided-bus-utility-box.html?variation=629054",
    desc: "Bac bus undivided NSF HDPE 21,5×17,13×7 po (~28,9 L). Variante brun FG335192BRN, SKU fournisseur CF691. Deux dans le SPTY100. Radeaux XPS DIY (pas de couvercle commercial). ~5–6 laitues chacun (~10–12 total). Linen Plus indique souvent un minimum de 4 unités."
  },
  {
    id: "backup-tente",
    cat: "Backup — config v1",
    name: "Tente de culture (backup)",
    model: "Fusion Hut 4×4×6.5",
    sku: "120x120x200-600D",
    qty: "1",
    price: "129,99 $ CAD",
    currency: "CAD",
    supplier: "GrowLights Canada",
    img: "images/fusion-hut-4x4.jpg",
    url: "https://growlights.ca/products/4-x-4-x-6-5-fusion-hut-600d-mylar-grow-tent",
    backup: true,
    desc: "Ancienne tente v1 : 47×47×79 po, mylar 600D. Restée en documentation comme solution de secours avec l’EZ Stor 8 gal et le plateau XTrays 3×3."
  },
  {
    id: "bac",
    cat: "Backup — config v1",
    name: "Bac de rétention",
    model: "XTrays Classic Flood White 3×3",
    sku: "141105",
    qty: "1",
    price: "89,95 $ CAD",
    currency: "CAD",
    supplier: "HydroponiquePro",
    img: "images/xtrays-classic-3x3-141105.jpg",
    url: "https://hydroponiquepro.com/products/xtrays-classic-flood",
    backup: true,
    desc: "Plateau ABS blanc 3×3 fabriqué au Canada (int. 36×36×7,13 po; ext. 41×41). Option de rétention moins chère et plus compacte que le SPTY100 pour deux bus tubs côte à côte (pack 34×21,5; ~1 po de jeu/côté). Volume posé au sol ~66 L (≥1,5 DWC) et ça rentre dans la CLOUDLAB 844 (41 vs 47,24). Conservé en backup — la config principale reste SPTY100."
  },
  {
    id: "reservoir",
    cat: "Backup — config v1",
    name: "Réservoir DWC",
    model: "EZ Stor 8 gal",
    sku: "IFS-0065",
    qty: "1",
    price: "28,95 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/ez-stor-8gal.jpg",
    url: "https://indoorfarmer.ca/products/ez-stor-trade-container-buckets-lids",
    backup: true,
    desc: "Ancien réservoir v1 ~30 L, HDPE, à percer pour capteurs et air. Gardé en documentation pour la config single‑bac EZ Stor + XTrays 3×3."
  },
  {
    id: "led",
    cat: "Éclairage & air",
    name: "Éclairage",
    model: "Spider Farmer SF2000 (2026, Bridgelux 3030)",
    sku: "SF2000",
    qty: "1",
    price: "189,99 $ CAD",
    currency: "CAD",
    supplier: "Spider Farmer Canada",
    img: "images/spiderfarmer-sf2000.jpg",
    url: "https://spiderfarmer.ca/products/sf2000-200w-full-spectrum-led-grow-light-with-dimmer-knob/",
    desc: "LED 200 W dimmable (bouton + 0–10 V via GP8413). Trop pour laitues à 100 % — on dimme pour la chaleur sans climatiseur. Couverture constructeur 2×4 ; tente 4×4 donc on ne vise pas un flood plein 4×4. Bridgelux 3030, 2026."
  },
  {
    id: "fan",
    cat: "Éclairage & air",
    name: "Ventilateur d’extraction EC",
    model: "SigilVentus PROLINE 4″",
    sku: "SE-A100-T01",
    qty: "1",
    price: "139 $ USD",
    currency: "USD",
    supplier: "SigilVentus",
    img: "images/sigilventus-proline-4.jpg",
    url: "https://sigilventus.com/products/4-inch-ec-inline-fan-hydroponics",
    restock: true,
    desc: "160 CFM pour 18 W, moteur EC avec PWM, 0–10 V et tachymètre. C’est la seule stratégie fraîcheur avec le dimming LED : extraire la chaleur de la tente vers la chambre. En réapprovisionnement chez le fabricant ; commander dès le retour."
  },
  {
    id: "gaine",
    cat: "Éclairage & air",
    name: "Gaine d’air 4 po",
    model: "ThermoFlo Premium Ducting 2000SR 4″ × 25′",
    sku: "2000SR-4",
    qty: "1",
    price: "25–40 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/thermoflo-duct-4in.jpg",
    url: "https://indoorfarmer.ca/products/thermoflo-premium-ducting-2000sr",
    desc: "Gaine flexible 4 po, âme noire anti-fuite de lumière, conçue pour chaleur et humidité de tente. On n’en utilise qu’un court tronçon jusqu’à la sortie. Colliers inox Hydrofarm 4 po (2/sac, 3,95 $) sur la même boutique pour serrer ventilateur et collerette."
  },
  {
    id: "pompe",
    cat: "Éclairage & air",
    name: "Pompe à air DWC",
    model: "Active Aqua HYD-AAPA15L",
    sku: "HYD-AAPA15L",
    qty: "1",
    price: "37,75 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/active-aqua-aapa15l.jpg",
    url: "https://indoorfarmer.ca/products/active-aqua-air-pump-4-outlets-6w-15-l-min",
    desc: "4 sorties, 15 L/min, 6 W. Alimente les deux bacs FG335192BRN via un T et deux lignes — assez d’air pour oxygéner ~2×29 L avec deux pierres par bac, sans surdimensionner le bruit. Se place hors bac, au‑dessus du niveau d’eau, derrière clapets anti‑retour. Tourne en continu."
  },
  {
    id: "pierres",
    cat: "Éclairage & air",
    name: "Pierres à air",
    model: "Active Aqua Round Air Stones 2″",
    sku: "HYD-ASCM",
    qty: "2",
    price: "10–15 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/active-aqua-air-stones.jpg",
    url: "https://indoorfarmer.ca/products/ecoplus-air-stones-1",
    desc: "Diffuseurs ronds 2 po, micropores, entrée 3/16 po. Deux pierres réparties dans le bac évitent un coin mort d’oxygène autour des racines de laitue. À remplacer quand le débit s’effondre — le calcaire et les nutriments bouchent vite."
  },
  {
    id: "tuyau",
    cat: "Éclairage & air",
    name: "Tuyau à air 1/4 po",
    model: "Clear Airline Tubing 3/16″ ID (1/4″ OD)",
    sku: "LEE-14520-FOOT",
    qty: "~15 pi",
    price: "8–12 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/airline-tubing-14.jpg",
    url: "https://indoorfarmer.ca/products/alfred-horticulture-airline-tubing-blue-3-16-id-1-4-od-20-copy",
    desc: "Ligne claire 1/4 po OD, vendue au pied. Assez pour relier pompe, clapets et deux pierres avec une petite réserve de coupe. Transparente : on voit tout de suite une remontée d’eau si un clapet lâche."
  },
  {
    id: "clapets",
    cat: "Éclairage & air",
    name: "Clapets anti-retour 3/16 po",
    model: "Pawfly PF-Ap — 6 PCS",
    sku: "ASIN B01N92AXHF",
    qty: "1 paquet (6)",
    price: "7,99 $ CAD",
    currency: "CAD",
    supplier: "Amazon.ca / Pawfly",
    img: "images/pawfly-pf-ap.jpg",
    url: "https://www.amazon.ca/dp/B01N92AXHF",
    desc: "6 clapets anti‑retour rouges pour tuyau standard 3/16 po ; deux utilisés, quatre de rechange. Empêchent le retour d’eau vers la pompe à air lors d’un arrêt/coupure. Prévu pour l’air/oxygène ; pas pour CO₂ ni autres systèmes haute pression."
  },
  {
    id: "pots",
    cat: "Enceinte & réservoir",
    name: "Net pots 2 po",
    model: "HydroFarm Net Cup 2 Inch",
    sku: "2″ mesh",
    qty: "10–12",
    price: "5–10 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/hydrofarm-net-pots-2.jpg",
    url: "https://indoorfarmer.ca/products/future-harvest-net-pots",
    desc: "Paniers 2 po, format laitue, pour deux radeaux XPS DIY. Cinq à six sites par bac FG335192BRN (~10–12 au total), racines libres vers la solution. À 0,35 $ l’unité, on en prend une douzaine pour avoir des rechanges."
  },
  {
    id: "mac",
    cat: "Sec — air & contrôle",
    name: "Ordinateur superviseur",
    model: "MacBook Air 2012",
    sku: "MacBookAir5,2 / A1466",
    qty: "1",
    price: "0 $",
    currency: "CAD",
    supplier: "Déjà disponible",
    img: "images/macbook-air-2012.jpg",
    url: null,
    owned: true,
    desc: "Machine existante : Python, base de données, tableau de bord, boucles PID/MPC. L’ESP32 Feather V2 gère l’I/O côté air & contrôle 0–10 V ; le Mac supervise. Le kit chimie Atlas/RobotShop reste local (aucune obligation nuage). Boucle 100 % locale. Photo Wikimedia (Mid 2012)."
  },
  {
    id: "feather-esp32-v2",
    cat: "Sec — air & contrôle",
    name: "ESP32 Feather V2",
    model: "Adafruit ESP32 Feather V2 with Headers (STEMMA QT)",
    sku: "5900 / PiShop 805-1",
    qty: "1",
    price: "32,95 $ CAD",
    currency: "CAD",
    supplier: "PiShop.ca",
    img: "images/esp32-feather-v2-headers-pishop.jpg",
    url: "https://www.pishop.ca/product/adafruit-esp32-feather-v2-with-headers-8mb-flash-2-mb-psram-stemma-qt/",
    desc: "Contrôleur I/O côté sec (air & contrôle). Il lit SCD41, SHT45 et les fuites, et pilote le GP8413 pour le dimming LED et ventilateur EC (0–10 V). Version avec headers et STEMMA QT, USB‑C. Le MacBook Air 2012 supervise (logging, tableaux de bord, PID/MPC) mais l’ESP32 reste le bas niveau même si le portable dort."
  },
  {
    id: "dac",
    cat: "Sec — air & contrôle",
    name: "DAC 0–10 V",
    model: "DFRobot Gravity GP8413",
    sku: "DFR1073",
    qty: "1",
    price: "14,90 $ USD",
    currency: "USD",
    supplier: "DFRobot",
    img: "images/gp8413-dfr1073.jpg",
    url: "https://www.dfrobot.com/product-2756.html",
    desc: "Deux sorties 0–10 V, 15 bits, bus I²C. Une voie dimme le Spider Farmer SF2000, l’autre le ventilateur EC SigilVentus. C’est le muscle analogique du projet : pas de PWM brut sur des drivers 0–10 V industriels."
  },
  {
    id: "scd41",
    cat: "Sec — air & contrôle",
    name: "CO₂ / T / HR tente",
    model: "Adafruit SCD-41",
    sku: "Product 5190",
    qty: "1",
    price: "79,24 $ CAD",
    currency: "CAD",
    supplier: "DigiKey Canada",
    img: "images/scd41-5190.jpg",
    url: "https://www.digikey.ca/en/products/detail/adafruit-industries-llc/5190/15194670",
    desc: "CO₂ photoacoustique plus température et humidité, I²C. On ne injecte pas de CO₂ : le capteur sert à voir la respiration de la tente et la qualité d’air. À placer à hauteur de canopée, à l’abri du flux d’extraction."
  },
  {
    id: "sht45",
    cat: "Sec — air & contrôle",
    name: "T / HR de référence",
    model: "Adafruit SHT45",
    sku: "Product 5665",
    qty: "1",
    price: "18,60 $ CAD",
    currency: "CAD",
    supplier: "DigiKey Canada",
    img: "images/sht45-5665.jpg",
    url: "https://www.digikey.ca/fr/products/detail/adafruit-industries-llc/5665/17831054",
    desc: "Sonde T/HR plus fine que le canal climatique du SCD41. Elle ancre le modèle thermique (chambre vs tente) et détecte une dérive du SCD41. Deux mesures qui divergent : on croit la SHT45, on diagnostique l’autre."
  },
  {
    id: "usb-a-to-c",
    cat: "Sec — air & contrôle",
    name: "Câble USB‑A → USB‑C (données)",
    model: "USB Type‑C to USB 3.0 A‑Male Cable — 5 ft",
    sku: "CS-PID-48",
    qty: "1",
    price: "5,95 $ CAD",
    currency: "CAD",
    supplier: "PiShop.ca",
    img: "images/usb-a-to-c-5ft-pishop.jpg",
    url: "https://www.pishop.ca/product/usb-type-c-to-usb-3-0-a-male-cable-5ft/",
    desc: "5 pi ≈ 1,52 m (plus proche de 1,8 m en stock CA). Câble de données USB 3.0, pas un câble charge‑only."
  },
  /* Humide — chimie (kit unique qui remplace pH/EC USB + carriers + DS18B20) */
  {
    id: "atlas-wifi-hk",
    cat: "Humide — chimie",
    name: "Kit Hydroponique Wi‑Fi avec Capteur de Conductivité",
    model: "Atlas Scientific Wi‑Fi Hydroponics Kit (pH/EC/RTD)",
    sku: "RB-Atl-52 (mfr Wi‑Fi‑HK)",
    qty: "1",
    price: "789,99 $ CAD",
    currency: "CAD",
    supplier: "RobotShop Canada",
    img: "images/atlas-wifi-hydroponics-kit.jpg",
    url: "https://ca.robotshop.com/fr/products/kit-hydroponique-wi-fi-capteur-conductivite",
    restock: true,
    desc: "Kit d’acquisition chimie unique : pH, conductivité K=1.0 et température de solution (PT‑1000), compensation automatique et cartes EZO isolées dans un boîtier IP64 assemblé. HUZZAH32 inclus pour la passerelle Wi‑Fi ; firmware usine vers ThingSpeak disponible mais on reste en boucle locale (lecture/firmware locaux, aucun nuage imposé). Remplace les kits USB EZO, les carriers isolés et le DS18B20. Taxes et livraison en sus."
  },
  {
    id: "stemma-qt-400mm",
    cat: "Sec — air & contrôle",
    name: "Câble STEMMA QT / Qwiic",
    model: "Adafruit 5385 — 400 mm",
    sku: "DigiKey 1528-5385-ND / 5385",
    qty: "2",
    price: "2,20 $ CAD / pce",
    currency: "CAD",
    supplier: "DigiKey Canada",
    img: "images/stemma-qt-400mm-adafruit.jpg",
    url: "https://www.digikey.ca/en/products/detail/adafruit-industries-llc/5385/16546436",
    desc: "Longueur 400 mm — PiShop ne monte qu’à 200 mm."
  },
  {
    id: "dupont-ff-40",
    cat: "Sec — air & contrôle",
    name: "Dupont F‑F — ruban 40×",
    model: "Jumper femelle‑femelle 20 cm",
    sku: "285",
    qty: "1",
    price: "2,95 $ CAD",
    currency: "CAD",
    supplier: "PiShop.ca",
    img: "images/dupont-ff-40x-pishop.jpg",
    url: "https://www.pishop.ca/product/40-x-jumper-cable-for-arduino-20cm/",
    desc: "40 conducteurs femelle‑femelle, 20 cm. Pour prototyper câblage ESP32."
  },
  {
    id: "danby",
    cat: "Éclairage & air",
    name: "Déshumidificateur",
    model: "Danby DDR020BJ2WDB",
    sku: "DDR020BJ2WDB",
    qty: "1",
    price: "269,99 $ CAD",
    currency: "CAD",
    supplier: "Danby Canada",
    img: "images/danby-ddr020bj2wdb.jpg",
    url: "https://www.danby.com/fr/products/deshumidificateurs/ddr020bj2wdb/",
    desc: "22 pintes, drainage continu, redémarrage auto après panne. Reste dans la chambre, hors tente : il traite l’air que l’extraction y déverse. Pas un climatiseur — il sèche, il ne refroidit pas. Branchement via la prise Shelly si on veut le couper la nuit."
  },
  {
    id: "shelly",
    cat: "Électricité & sécurité",
    name: "Prise contrôlable",
    model: "Shelly Plug US Gen4",
    sku: "Plug US Gen4 Black",
    qty: "1",
    price: "24,99 $ USD",
    currency: "USD",
    supplier: "Shelly USA",
    img: "images/shelly-plug-us-gen4.jpg",
    url: "https://us.shelly.com/products/shelly-plug-us-gen4-black?variant=51150414020949",
    desc: "Prise 1800 W, Gen4, pour couper un appareil de chambre (Danby, pompe à air de secours) sans cloud obligatoire — API locale. Ce n’est pas le dimming 0–10 V : c’est le tout-ou-rien sécurisé. Un seul SKU noir, format US."
  },
  {
    id: "usb-c-psu",
    cat: "Sec — air & contrôle",
    name: "Alimentation USB‑C 5.1 V / 3 A",
    model: "USB‑C Power Supply 5.1V 3.0A UL Listed (noir)",
    sku: "1203",
    qty: "1",
    price: "9,95 $ CAD",
    currency: "CAD",
    supplier: "PiShop.ca",
    img: "images/usb-c-5v3a-psu-pishop.jpg",
    url: "https://www.pishop.ca/product/usb-c-power-supply-5-1v-3-0a-black-ul-listed/",
    desc: "Bloc secteur USB‑C pour l’ESP32 Feather V2, cordon ~1,5 m."
  },
  {
    id: "boitier-1591xxtsbk",
    cat: "Sec — air & contrôle",
    name: "Boîtier ABS IP54",
    model: "Hammond 1591XXTSBK",
    sku: "HM3995-ND",
    qty: "1",
    price: "15,42 $ CAD",
    currency: "CAD",
    supplier: "DigiKey Canada",
    img: "images/hammond-1591xxtsbk.jpg",
    url: "https://www.digikey.ca/en/products/detail/hammond-manufacturing/1591XXTSBK/1206951",
    desc: "~123×83×60 mm, ABS noir, IP54. Boîte pour l’ESP32 Feather V2 et ses liaisons (SCD41/SHT45/GP8413)."
  },
  {
    id: "cable-22awg-3c",
    cat: "Électricité & sécurité",
    name: "Câble 22 AWG 3 conducteurs",
    model: "Alpha 1173C (référence type)",
    sku: "A121-100-ND (bobine 100 pi)",
    qty: "~2 m",
    price: "~8 $ CAD",
    currency: "CAD",
    supplier: "DigiKey Canada",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23070908'/%3E%3Ctext x='50%25' y='50%25' fill='%23b7c2b4' font-family='sans-serif' font-size='24' text-anchor='middle'%3E22%20AWG%203C%20~2%20m%3C/text%3E%3C/svg%3E",
    url: "https://www.digikey.ca/en/products/detail/alpha-wire/1173C-SL005/204535",
    tbd: true,
    desc: "Besoin ~2 m. DigiKey ne vend que la bobine 100 pi — sourcer une coupe courte ou un câble d’alarme 22/3 localement."
  },
  {
    id: "bundle-fixations",
    cat: "Électricité & sécurité",
    name: "Velcro + serre‑câbles + passe‑câbles (kit)",
    model: "Attaches / colliers / presse‑étoupes — lot pratique",
    sku: null,
    qty: "1 kit",
    price: "~15 $ CAD",
    currency: "CAD",
    supplier: "Amazon.ca",
    img: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23070908'/%3E%3Ctext x='50%25' y='46%25' fill='%23b7c2b4' font-family='sans-serif' font-size='22' text-anchor='middle'%3EKit%20Velcro%20%2B%20serre-c%C3%A2bles%20%2B%20passe-c%C3%A2bles%3C/text%3E%3Ctext x='50%25' y='66%25' fill='%2394a592' font-family='sans-serif' font-size='16' text-anchor='middle'%3Eenv.~15%20$%20CAD%3C/text%3E%3C/svg%3E",
    url: "https://www.amazon.ca/dp/B000F5K82A",
    desc: "Carte combinée pratique : Velcro ONE‑WRAP (Amazon B000F5K82A, ~6,49 $), serre‑câbles Panduit PLT1M‑C0 (DigiKey 298‑1040‑ND, ~0,48 $ / pce × ~25) et presse‑étoupes Bud PG7 (DigiKey 377‑2183‑ND, ~0,73 $ / pce × 4–6). Liens additionnels : 298‑1040‑ND et 377‑2183‑ND chez DigiKey."
  },
  {
    id: "fuite",
    cat: "Sec — air & contrôle",
    name: "Détecteurs de fuite",
    model: "DFRobot Water Leak Detector",
    sku: "SEN0454",
    qty: "2",
    price: "17,90 $ USD / pce",
    currency: "USD",
    supplier: "DFRobot",
    img: "images/dfrobot-sen0454.jpg",
    url: "https://www.dfrobot.com/product-2316.html",
    desc: "Contacts NO/NC, IP66. Un dans le SPTY100, un au point bas de la tente. Ils ferment une entrée ESP32 / Feather et, si besoin, crient au Mac. Deux, pas un : un débordement bac/radeau et une fuite de gaine n’arrivent pas au même endroit."
  },
  {
    id: "remo-a",
    cat: "Nutriments",
    name: "Nutriments A",
    model: "Remo Elements Part A 1 kg",
    sku: "4570010",
    qty: "1",
    price: "40 $ CAD",
    currency: "CAD",
    supplier: "Remo Nutrients Canada",
    img: "images/remo-elements-a.jpg",
    url: "https://www.shop.remonutrients.com/product-page/remo-elements-part-a",
    desc: "Poudre canadienne, spectre micro et macro pour tout le cycle. En DWC laitue on reste en végétatif : Part A + Part B, sans boost floraison. Se mélange en concentré ou direct au réservoir — pesée, pas de bidon de 4 L à stocker."
  },
  {
    id: "remo-b",
    cat: "Nutriments",
    name: "Nutriments B",
    model: "Remo Elements Part B 1 kg",
    sku: "45710101 / 4571010",
    qty: "1",
    price: "28 $ CAD",
    currency: "CAD",
    supplier: "Remo Nutrients Canada",
    img: "images/remo-elements-b.jpg",
    url: "https://www.shop.remonutrients.com/product-page/remo-elements-part-b",
    desc: "Cal-Mag et azote d’appoint, complémentaire du A. On module le B pour éviter la carence Ca/Mg sans faire exploser l’EC. SKU boutique 4571010 (1 kg) ; la référence 45710101 du brief pointe la même formule Part B."
  },
  {
    id: "phdown",
    cat: "Nutriments",
    name: "pH Down",
    model: "Advanced Nutrients pH Down 1 L",
    sku: "3800-14CAN",
    qty: "1",
    price: "22,95 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/an-ph-down.jpg",
    url: "https://indoorfarmer.ca/products/advanced-nutrients-ph-down",
    desc: "Acide phosphorique tamponné, 1 L. En v1 le dosage est manuel, guidé par l’Atlas pH. L’eau canadienne et Remo Elements poussent souvent le pH vers le haut : c’est le flacon qu’on ouvrira le plus."
  },
  {
    id: "phup",
    cat: "Nutriments",
    name: "pH Up",
    model: "Advanced Nutrients pH Up 1 L",
    sku: "3850-14CAN",
    qty: "1",
    price: "22,95 $ CAD",
    currency: "CAD",
    supplier: "Indoor Farmer",
    img: "images/an-ph-up.jpg",
    url: "https://indoorfarmer.ca/products/advanced-nutrients-ph-up",
    desc: "Potasse caustique tamponnée, 1 L. Moins fréquent que le Down, indispensable le jour où on sur-corrige. Même collection Indoor Farmer que le pH Down ; on garde les deux pour ne pas rester bloqué un dimanche."
  },
  {
    id: "gfci",
    cat: "Électricité & sécurité",
    name: "Protection DDFT / GFCI",
    model: "Southwire 25 ft inline GFCI",
    sku: "26020124-21",
    qty: "1",
    price: "Prix à confirmer",
    currency: "CAD",
    supplier: "Home Depot Canada",
    img: "images/southwire-gfci.jpg",
    url: "https://www.homedepot.ca/product/southwire-25-ft-in-line-gfci-cord-14-3-sjtw-a-120v-15a/1001012253",
    tbd: true,
    desc: "Cordon 14/3 SJTW 25 pi, 120 V 15 A, DDFT en ligne avec TEST/RESET. Toute la tente (LED, ventilateur, pompe à air) passe derrière cette protection — eau et 120 V ne cohabitent pas sans. Prix Home Depot à confirmer en magasin."
  }
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const chips = document.getElementById("chips");
const count = document.getElementById("count");

let activeCat = "Tous";

function badgeHTML(p) {
  const bits = [];
  if (p.tbd) bits.push('<span class="badge tbd">Prix à confirmer</span>');
  else if (p.currency === "USD") bits.push('<span class="badge usd">USD</span>');
  else bits.push('<span class="badge cad">CAD</span>');
  if (p.owned) bits.push('<span class="badge own">Déjà disponible</span>');
  if (p.restock) bits.push('<span class="badge restock">En réapprovisionnement</span>');
  if (p.backup) bits.push('<span class="badge backup">Backup v1</span>');
  return bits.join("");
}

function cardHTML(p) {
  const buy = p.owned
    ? '<span class="buy disabled">Aucun achat — déjà en main</span>'
    : `<a class="buy" href="${p.url}" target="_blank" rel="noopener noreferrer">Acheter chez ${esc(p.supplier)} <span aria-hidden="true">↗</span></a>`;
  return `<article class="card" data-id="${p.id}">
    <div class="photo">
      <img src="${p.img}" alt="${esc(p.model)}" loading="lazy" width="640" height="480">
      <div class="badges">${badgeHTML(p)}</div>
    </div>
    <div class="card-body">
      <div class="card-cat">${esc(p.cat)}</div>
      <h3>${esc(p.name)}</h3>
      <div class="sku">${esc(p.model)}${p.sku ? " · " + esc(p.sku) : ""}</div>
      <div class="meta-row"><span>Qté ${esc(p.qty)}</span><span class="price">${esc(p.price)}</span></div>
      <div class="sku">${esc(p.supplier)}</div>
      <p class="desc">${esc(p.desc)}</p>
      ${buy}
    </div>
  </article>`;
}

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function matches(p, q, cat) {
  if (cat !== "Tous" && p.cat !== cat) return false;
  if (!q) return true;
  const hay = [p.name, p.model, p.sku, p.supplier, p.desc, p.cat].join(" ").toLowerCase();
  return hay.includes(q);
}

function render() {
  const q = (search.value || "").trim().toLowerCase();
  const shown = PRODUCTS.filter((p) => matches(p, q, activeCat));
  count.textContent = `${shown.length} / ${PRODUCTS.length} équipements`;
  if (!shown.length) {
    grid.innerHTML = '<p class="empty">Aucun item ne correspond. Effacez la recherche ou changez de filtre.</p>';
    return;
  }
  if (activeCat === "Tous" && !q) {
    const parts = [];
    for (const cat of CATEGORIES) {
      const group = shown.filter((p) => p.cat === cat);
      if (!group.length) continue;
      parts.push(`<h2 class="cat-label">${esc(cat)}</h2>`);
      parts.push(group.map(cardHTML).join(""));
    }
    grid.innerHTML = parts.join("");
  } else {
    grid.innerHTML = shown.map(cardHTML).join("");
  }
}

function buildChips() {
  const labels = ["Tous", ...CATEGORIES];
  chips.innerHTML = labels.map((c) =>
    `<button type="button" class="chip${c === activeCat ? " active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join("");
  chips.querySelectorAll(".chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCat = btn.dataset.cat;
      chips.querySelectorAll(".chip").forEach((b) => b.classList.toggle("active", b === btn));
      render();
    });
  });
}

search.addEventListener("input", render);
buildChips();
render();
