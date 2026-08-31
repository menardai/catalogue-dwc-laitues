/* DWC laitues — catalogue interactif */
const CATEGORIES = [
  "Enceinte & réservoir",
  "Éclairage & air",
  "Contrôle & capteurs",
  "Nutriments",
  "Électricité & sécurité",
  "Backup — config v1",
];

const PRODUCTS = [
  {
    id: "tente",
    cat: "Enceinte & réservoir",
    name: "Tente de culture",
    model: "Fusion Hut 4×4×6.5",
    sku: "120x120x200-600D",
    qty: "1",
    price: "129,99 $ CAD",
    currency: "CAD",
    supplier: "GrowLights Canada",
    img: "images/fusion-hut-4x4.jpg",
    url: "https://growlights.ca/products/4-x-4-x-6-5-fusion-hut-600d-mylar-grow-tent",
    desc: "Enceinte 47×47×79 po en mylar 600D, assez haute pour un DWC instrumenté sous LED dimmable. La tente isole lumière et flux d’air : extraction 4 po vers l’extérieur de la chambre, sans climatiseur dédié. C’est le volume de travail v1 — un bac, pas une forêt."
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
    desc: "Plateau PE rotomoulé canadien 46×38×12 po / 100 gal; secondaire pour condo; porte deux bus tubs FG335100; bande sèche ~10 po possible sur le petit côté dans la tente 4×4; freight; blanc food‑grade sur demande. Un SEN0454 dedans."
  },
  {
    id: "fg335100",
    cat: "Enceinte & réservoir",
    name: "Réservoirs DWC",
    model: "Rubbermaid Commercial FG335100",
    sku: "FG335100GRAY",
    qty: "2",
    price: "~24 $ CAD / unité",
    currency: "CAD",
    supplier: "s.t.o.p. Restaurant Supply",
    img: "images/rubbermaid-fg335100.jpg",
    url: "https://www.shopatstop.com/products/21-1-2x17-1-8x7-inch-gray-bus-bin",
    desc: "Bac bus undivided NSF HDPE 21,5×17,13×7 po (~28,9 L). Deux dans le SPTY100. Radeaux XPS DIY (pas de couvercle commercial). ~5–6 laitues chacun (~10–12 total). Gris préféré; brun résiste mieux aux algues si dispo. Alternative : caisse de 6 chez Hubert ~215 $ CAD."
  },
  {
    id: "bac",
    cat: "Backup — config v1",
    name: "Bac de rétention",
    model: "XTrays Classic Flood Black 2×4",
    sku: "141104",
    qty: "1",
    price: "86,95 $ CAD",
    currency: "CAD",
    supplier: "HydroponiquePro",
    img: "images/xtrays-classic-flood.jpg",
    url: "https://hydroponiquepro.com/fr/products/xtrays-classic-flood-black",
    backup: true,
    desc: "Ancienne option v1 : plateau ABS noir 2×4 fabriqué au Canada. Il portait un seul EZ Stor ~30 L et retenait une fuite. Conservé ici en référence comme config de secours (EZ Stor 8 gal + XTrays 2×4)."
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
    desc: "Ancien réservoir v1 ~30 L, HDPE, à percer pour capteurs et air. Gardé en documentation pour la config single‑bac EZ Stor + XTrays 2×4."
  },
  {
    id: "led",
    cat: "Éclairage & air",
    name: "Éclairage",
    model: "Fusion X-Spider 320 W 2FT",
    sku: "FSX-320-2FT",
    qty: "1",
    price: "289,99 $ CAD",
    currency: "CAD",
    supplier: "GrowLights Canada",
    img: "images/fusion-x-spider-320.jpg",
    url: "https://growlights.ca/products/fusion-x-spider-320w-2ft-led-grow-light",
    desc: "Barre LED à entrée 0–10 V, largement trop puissante pour des laitues — c’est voulu. On la tient fortement dimmée via le GP8413 pour limiter la chaleur dans une tente sans climatiseur. Spectre et uniformité d’un 2 pi, pas d’un 4×4 fleuri."
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
    desc: "4 sorties, 15 L/min, 6 W. Alimente les deux bacs FG335100 via un T et deux lignes — assez d’air pour oxygéner ~2×29 L avec deux pierres par bac, sans surdimensionner le bruit. Se place hors bac, au‑dessus du niveau d’eau, derrière clapets anti‑retour. Tourne en continu."
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
    name: "Clapets anti-retour 1/4 po",
    model: "1/4″ Plastic Check Valve",
    sku: "SKU18772",
    qty: "2",
    price: "8–12 $ CAD",
    currency: "CAD",
    supplier: "Reef Supplies Canada",
    img: "images/check-valve-14.jpg",
    url: "https://www.reefsupplies.ca/products/1-4-plastic-check-valve",
    desc: "Clapet plastique 1/4 po, un par ligne de pierre. Empêche la solution de siphonner vers la pompe à air en cas de coupure. Indoor Farmer et HydroponiquePro n’en cataloguent pas en 1/4 po ; Reef Supplies (Canada) est le substitut retenu."
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
    desc: "Paniers 2 po, format laitue, pour deux radeaux XPS DIY. Cinq à six sites par bac FG335100 (~10–12 au total), racines libres vers la solution. À 0,35 $ l’unité, on en prend une douzaine pour avoir des rechanges."
  },
  {
    id: "mac",
    cat: "Contrôle & capteurs",
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
    desc: "Machine existante : Python, base de données, tableau de bord, boucles PID/MPC. Les sondes Atlas pH et EC arrivent en USB ; l’Arduino aussi. Toute la boucle reste locale — aucun nuage, aucun abonnement capteur. Photo Wikimedia (Mid 2012)."
  },
  {
    id: "arduino",
    cat: "Contrôle & capteurs",
    name: "Contrôleur I/O",
    model: "Arduino UNO R4 Minima",
    sku: "ABX00080",
    qty: "1",
    price: "28,80 $ CAD",
    currency: "CAD",
    supplier: "Mouser Canada",
    img: "images/arduino-uno-r4-minima.jpg",
    url: "https://www.mouser.ca/ProductDetail/Arduino/ABX00080?qs=ulEaXIWI0c9tbG%2FHj5EzRA%3D%3D",
    desc: "Renesas RA4M1 32 bits, 5 V, USB-C, format UNO. Il lit SCD41, SHT45, DS18B20 et les fuites, et pilote le GP8413. Le Mac supervise ; l’Arduino reste le bas niveau capteurs/actionneurs, même si le portable dort."
  },
  {
    id: "dac",
    cat: "Contrôle & capteurs",
    name: "DAC 0–10 V",
    model: "DFRobot Gravity GP8413",
    sku: "DFR1073",
    qty: "1",
    price: "14,90 $ USD",
    currency: "USD",
    supplier: "DFRobot",
    img: "images/gp8413-dfr1073.jpg",
    url: "https://www.dfrobot.com/product-2756.html",
    desc: "Deux sorties 0–10 V, 15 bits, bus I²C. Une voie dimme le Fusion X-Spider, l’autre le ventilateur EC SigilVentus. C’est le muscle analogique du projet : pas de PWM brut sur des drivers 0–10 V industriels."
  },
  {
    id: "scd41",
    cat: "Contrôle & capteurs",
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
    cat: "Contrôle & capteurs",
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
    id: "ds18",
    cat: "Contrôle & capteurs",
    name: "Température de solution",
    model: "Waterproof DS18B20 + résistor",
    sku: "119",
    qty: "1",
    price: "9,95 $ CAD",
    currency: "CAD",
    supplier: "PiShop Canada",
    img: "images/ds18b20-pishop.jpg",
    url: "https://www.pishop.ca/product/waterproof-ds18b20-digital-temperature-sensor-extras/",
    desc: "Sonde étanche 1-Wire, à immerger dans le DWC. La température de solution pilote oxygène dissous et confort racinaire — plus critique que l’air pour la laitue. Le kit PiShop inclut le résistor de rappel : prêt à câbler sur l’UNO."
  },
  {
    id: "ph",
    cat: "Contrôle & capteurs",
    name: "pH continu",
    model: "Atlas Scientific EZO Complete-pH Kit",
    sku: "KIT-106P",
    qty: "1",
    price: "194,99 $ USD",
    currency: "USD",
    supplier: "Atlas Scientific",
    img: "images/atlas-ezo-ph.jpg",
    url: "https://atlas-scientific.com/kits/ezo-complete-ph-kit/",
    desc: "Kit USB complet : circuit EZO, sonde, calibration. Branché au Mac, pas à un nuage. Le pH de la solution laitue reste la consigne manuelle v1 — pas de pompe doseuse. On mesure en continu pour voir la dérive, pas pour fermer une boucle d’acide encore."
  },
  {
    id: "ec",
    cat: "Contrôle & capteurs",
    name: "EC continu",
    model: "Atlas Scientific EZO Complete-Conductivity Kit K=1.0",
    sku: "KIT-105E",
    qty: "1",
    price: "259,99 $ USD",
    currency: "USD",
    supplier: "Atlas Scientific",
    img: "images/atlas-ezo-ec.jpg",
    url: "https://atlas-scientific.com/kits/ezo-complete-ec-kit/",
    desc: "Conductivité K=1.0, USB vers le Mac, même philosophie que le pH. Suit la force nutritive Remo A+B dans ~30 L. Sans dosage auto, c’est le garde-fou : on voit la consommation des plants avant que les feuilles ne parlent."
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
    id: "fuite",
    cat: "Contrôle & capteurs",
    name: "Détecteurs de fuite",
    model: "DFRobot Water Leak Detector",
    sku: "SEN0454",
    qty: "2",
    price: "17,90 $ USD / pce",
    currency: "USD",
    supplier: "DFRobot",
    img: "images/dfrobot-sen0454.jpg",
    url: "https://www.dfrobot.com/product-2316.html",
    desc: "Contacts NO/NC, IP66. Un dans le SPTY100, un au point bas de la tente. Ils ferment une entrée Arduino et, si besoin, crient au Mac. Deux, pas un : un débordement bac/radeau et une fuite de gaine n’arrivent pas au même endroit."
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
