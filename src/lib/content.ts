/**
 * Contenu éditorial Mamarazzi — extrait du brief client (visio 2026-05-28).
 * Source : /.claude/rules/@client-brief.md
 *
 * Photos : Unsplash en placeholder. À remplacer par les photos de la séance
 * que Cristelle organise APRÈS mise en ligne (cf. brief Q21).
 */

export const business = {
  name: "Mamarazzi",
  tagline: "Traiteur italien & niçois — Asnières-sur-Seine",
  taglineShort: "Traiteur italien & niçois · Asnières-sur-Seine",
  phone: "06 82 88 96 51",
  phoneHref: "tel:+33682889651",
  email: "", // À récupérer auprès de Cristelle
  address: {
    street: "4 Rue Maurice Bokanowski",
    zip: "92600",
    city: "Asnières-sur-Seine",
  },
  hours: [
    { label: "Lun. — Jeu.", value: "10h–20h" },
    { label: "Ven. — Sam.", value: "10h–20h30" },
    { label: "Dimanche", value: "10h–14h" },
  ],
  instagram: "https://www.instagram.com/mamarazzi_traiteur/",
  hero: {
    accroche: {
      lines: [
        ["L'aperitivo, c'est un ", "rituel."],
        ["Une mamma, c'est une ", "vie."],
      ],
    },
    subtitle:
      "Cuisine de la Côte d'Azur, recettes de famille, fait maison à Asnières depuis 2022.",
    todayHours: "Ouvert aujourd'hui · 10h–20h",
  },
} as const;

/**
 * Photos officielles Mamarazzi — toutes hotlinkées depuis mamarazzi-traiteur.fr.
 * Couvre devanture, intérieur boutique, vitrines, plats, scènes événementiel.
 */
export const photos = {
  hero: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–10.jpg",
    alt: "Intérieur de la boutique Mamarazzi — étagères en arches, comptoir terracotta, sélection italienne",
  },
  shopFront: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/11/IMG_0347-scaled.jpeg",
    alt: "Devanture de la boutique Mamarazzi à Asnières — façade terracotta, enseigne script blanc",
  },
  shopFrontAlt: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/11/IMG_0348-scaled.jpeg",
    alt: "Devanture Mamarazzi de face — vitrine traiteur italien & niçois",
  },
  shopShelves: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-05-at-12.09.47.jpeg",
    alt: "Étagères en arches de la boutique Mamarazzi — épicerie fine, huiles, conserves italiennes",
  },
  windowDisplay: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–5-scaled.jpg",
    alt: "Vitrine boutique Mamarazzi — pissaladière, focaccia, beignets de fleurs de courgettes",
  },
  beignets: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–3-scaled.jpg",
    alt: "Beignets de fleurs de courgettes Mamarazzi — vitrine du comptoir",
  },
  farcis: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–9.jpg",
    alt: "Petits farcis niçois Mamarazzi — tomates, courgettes, aubergines, poivrons farcis à la viande",
  },
  portrait: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/10/traiteur-italien-nicois-a-asnieres-sur-seine–mammarazzi_02.jpg",
    alt: "Trinquage à l’apéritivo Mamarazzi — convivialité italienne",
  },
  aperitivo: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2026/02/mamarazzi_04-838x1024.webp",
    alt: "Board aperitivo Mamarazzi — burrata, tomates, charcuterie italienne, olives, artichauts",
  },
  aperitivoBanner: {
    src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/10/traiteur-italien-nicois-a-asnieres-sur-seine–mammarazzi_02.jpg",
    alt: "Trinquage à l’apéritivo Mamarazzi — verres levés au-dessus d’une table dressée",
  },
} as const;

/**
 * Posts Instagram déjà publiés sur le site officiel — captures haute résolution
 * du compte @mamarazzi_traiteur. Utilisé pour la grille IG home en attendant
 * l'intégration d'un widget live (Elfsight Instagram Feed).
 */
export const instagramPosts = Array.from({ length: 15 }, (_, i) => ({
  src: `https://mamarazzi-traiteur.fr/wp-content/uploads/2025/11/mammarazzi_traiteur_instagram_${i + 1}.png`,
  alt: `Publication Instagram Mamarazzi nº${i + 1}`,
}));

// Plats extraits de la Carte Mamarazzi (édition 2026). Vente au poids au comptoir.
// Sélection limitée aux 4 plats dont on a un close-up officiel Mamarazzi.
// Pour la carte complète (Lasagnes, Cannelloni, etc.), voir /carte (CarteFull).
export const dishes = [
  {
    name: "Aubergines alla parmigiana",
    category: "Légumes cuisinés · (V)",
    description:
      "Aubergines fondantes, sauce tomate maison, basilic frais et parmesan gratiné. La version végétarienne signée Mamarazzi.",
    price: "dès 2,70 € / 100 g",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–1-scaled.jpg",
      alt: "Sélection de gratins et plats du jour Mamarazzi — parmigiana, lasagnes, farcis",
    },
    marginalia: "olive" as const,
  },
  {
    name: "Pissaladière niçoise",
    category: "Street Food · Spécialité niçoise",
    description:
      "Oignons fondants, anchois, olives noires de Ligure. À la part au comptoir, ou en plaque Giggante de 53 × 32 cm pour partager.",
    price: "à la part",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–5-scaled.jpg",
      alt: "Vitrine boutique Mamarazzi — pissaladière, focaccia, beignets",
    },
  },
  {
    name: "Petits farcis niçois",
    category: "Légumes cuisinés · Signature niçoise",
    description:
      "Tomates, courgettes, aubergines, poivrons farcis à la viande. Le classique du Sud cuisiné chaque jour.",
    price: "dès 2,70 € / 100 g",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–9.jpg",
      alt: "Petits farcis niçois Mamarazzi — tomates, courgettes, aubergines, poivrons farcis",
    },
  },
  {
    name: "Beignets fleurs de courgettes",
    category: "Street Food · Frit & gourmand",
    description:
      "Fleurs de courgettes panées et fromage provolone. Croustillants à l’extérieur, fondants au cœur.",
    price: "dès 4,50 €",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2025/12/traiteur-italien-nicois-a-asnieres-sur-seine–3-scaled.jpg",
      alt: "Beignets de fleurs de courgettes Mamarazzi en vitrine",
    },
    marginalia: "lemon" as const,
  },
];

// Formules officielles extraites du Menu Aperitivo Mamarazzi (édition 2026).
export const formulas = [
  {
    no: "Formule I",
    name: "Plateau de charcuterie",
    description:
      "Sélection corse & italienne — Jambon de Parme, Bresaola, Coppa, Lonzu, Mortadelle, Jambon blanc aux herbes, Spianata piccante, Speck.",
    size: "4 → 12 personnes",
    priceFrom: "40 €",
  },
  {
    no: "Formule II",
    name: "Plateau d’Antipasti",
    description:
      "Légumes grillés, involtini de speck, poulpe grillé, courgettes farcies fromage, tomates séchées, champignons, bombinettes thon-câpres, olives.",
    size: "4 → 12 personnes",
    priceFrom: "50 €",
  },
  {
    no: "Formule III",
    name: "Plateau mixte",
    description:
      "Charcuterie + Antipasti + sélection de fromages italiens (dés de parmesan, gorgonzola, pecorino, scarmoza fumé).",
    size: "4 → 12 personnes",
    priceFrom: "60 €",
  },
];

export const pillars = [
  {
    label: "En famille",
    tag: "Particuliers",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2026/02/mamarazzi_03-723x1024.webp",
      alt: "Centre de table familial Mamarazzi — basilic, conserves italiennes, nappe vichy",
    },
    text: "Les dimanches qui s’étirent, les retours de balade qui finissent en lasagnes. On vous prépare tout, vous n’avez qu’à mettre la nappe.",
  },
  {
    label: "Entre amis",
    tag: "Particuliers",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2026/02/mamarazzi_01-849x1024.webp",
      alt: "Plateau apéritif Mamarazzi — tartes tomate, mini-sandwichs, croquettes",
    },
    text: "Plateaux apéro pour 4 à 40 convives, plateaux-repas livrés à domicile. Discrets, soignés, immédiatement prêts à dresser pour vos soirées partagées.",
  },
  {
    label: "Pour célébrer",
    tag: "Événementiel",
    image: {
      src: "https://mamarazzi-traiteur.fr/wp-content/uploads/2026/02/mamarazzi_02-909x1024.webp",
      alt: "Tablée habillée Mamarazzi pour événement — vichy rouge, conserves italiennes, cyprès",
    },
    text: "Mariages, baptêmes, communions, anniversaires. Devis sur-mesure, dégustation préalable, accompagnement de A à Z avec Cristelle.",
  },
];

export const testimonials = [
  {
    text: "Sans aucun doute le meilleur traiteur de la ville ! Le goût de l'Italie, une vraie cuisine familiale.",
    author: "Andrea L.",
    source: "Google",
  },
  {
    text: "L'expérience est toujours exceptionnelle. Goûtez ses cannellonis au veau et aux cèpes.",
    author: "Mikaël B.",
    source: "Google",
  },
  {
    text: "Cuisine familiale savoureuse — lasagnes, pissaladière, des recettes qui sentent bon le Sud.",
    author: "Guillaume T.",
    source: "Google",
  },
];

export const navLinks = [
  { href: "/histoire", label: "L’histoire" },
  { href: "/carte", label: "La carte" },
  { href: "/aperitivo", label: "L’aperitivo" },
  { href: "/sur-mesure", label: "Le sur-mesure" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = [
  { href: "/carte", label: "La carte" },
  { href: "/aperitivo", label: "L’aperitivo" },
  { href: "/sur-mesure", label: "Demander un devis" },
  { href: business.instagram, label: "Instagram", external: true },
  { href: "/mentions-legales", label: "Mentions légales" },
];

/* ════════════════════════════════════════════════════════════════════════
   CARTE COMPLÈTE — extraite des 6 pages PDF officielles
   (mamarazzi-traiteur.fr/wp-content/uploads/2026/02/Carte-Fevrier-2026-Mamarazzi_*.webp)
   ════════════════════════════════════════════════════════════════════════ */

export type CarteItem = {
  name: string;
  description?: string;
  price?: string;
  veggie?: boolean;
  note?: string;
};

export type CarteCategory = {
  title: string;
  priceRange?: string;
  items: CarteItem[];
};

export const carteCategories: CarteCategory[] = [
  {
    title: "Street Food",
    priceRange: "de 4,50 € à 8,50 €",
    items: [
      { name: "Croccantino", description: "Le croque italien croustillant au jambon fumé & mozzarella." },
      { name: "Croque Truffe individuel", description: "Jambon blanc, crème de truffe et mozzarella." },
      { name: "Escalope panée à la milanaise" },
      { name: "Beignets de fleurs de courgettes & fromage provolone" },
      { name: "Mozzarella in carroza", description: "Petit croque végé 100 % mozza, 100 % gourmand.", veggie: true },
      { name: "Les billes de mozzarelline fritte", veggie: true },
      { name: "Panisses, sauce aïoli", veggie: true },
      { name: "Focaccia tomate cerise", veggie: true },
      { name: "Focaccia blanche au romarin", veggie: true },
      { name: "Pizza du jour sur base Focaccia", description: "À la part." },
      { name: "Pissaladière niçoise à la part" },
    ],
  },
  {
    title: "Arancini",
    priceRange: "5,00 € / pièce",
    items: [
      { name: "Tomate séchée mozza", veggie: true },
      { name: "Gorgonzola et thym frais", veggie: true },
      { name: "Chorizo" },
      { name: "Ragù" },
    ],
  },
  {
    title: "Nos fameuses tartes Tatin",
    priceRange: "à partir de 4,90 € / pièce",
    items: [
      { name: "Tatin de tomates Datterino de Sicile", description: "Au caramel de balsamique.", veggie: true },
      { name: "Tatin de légumes du soleil", description: "Avec une pointe de cannelle, comme à Nice.", veggie: true },
      { name: "Tatin d’aubergines grillées", description: "Sur une base tomatade.", veggie: true },
    ],
  },
  {
    title: "Lasagnes",
    priceRange: "de 3,00 € à 3,60 € / 100 g",
    items: [
      { name: "Lasagne à la bolognaise", description: "Viande de bœuf." },
      { name: "Lasagne Ricotta-épinards", description: "Tomates séchées et pignons de pin.", veggie: true },
      { name: "Lasagne à la truffe et aux champignons", description: "Gratinée au parmesan.", veggie: true },
    ],
  },
  {
    title: "Cannelloni",
    priceRange: "de 3,20 € à 3,60 € / 100 g",
    items: [
      { name: "Cochon, graines de fenouil, coppa & scarmoza fumée" },
      { name: "Veau aux cèpes à la crème de parmesan", note: "sur commande" },
      { name: "Al Ragù", description: "En sauce bolognaise légère." },
    ],
  },
  {
    title: "Pâtes & Gnocchi",
    priceRange: "à partir de 2,70 € / 100 g",
    items: [
      { name: "Penne Alla luciana", description: "Sauce tomate assaisonnée aux olives de Ligure.", veggie: true },
      { name: "Gnocchi Gorgonzola / Gnocchi Sorentina", veggie: true },
    ],
  },
  {
    title: "Risotto",
    priceRange: "2,90 € / 100 g",
    items: [
      { name: "Tomate cerise, parmesan", veggie: true },
      { name: "Citron, pesto de courgette", veggie: true },
    ],
  },
  {
    title: "Nos pâtes fraîches",
    priceRange: "à partir de 12 € / Kg",
    items: [
      { name: "Gnocchi frais nature", veggie: true },
      { name: "Gnocchi farcis au pesto", veggie: true },
      { name: "Gnocchi farcis à la truffe", veggie: true },
      { name: "Tagliatelle", veggie: true },
      { name: "Tagliolini", veggie: true },
    ],
  },
  {
    title: "Viandes & Poissons",
    priceRange: "de 2,70 € à 6,30 € / 100 g",
    items: [
      { name: "Cuisses de poulet crumble citron & parmesan", description: "Sur un lit de tomates Datterino de Sicile confites." },
      { name: "Sauté de volaille aux légumes et olives vertes" },
      { name: "Escalope Milanaise en sauce aux câpres" },
      { name: "Polpettes veau & bœuf", description: "Boulettes de viande assaisonnées." },
      { name: "Osso Bucco au romarin" },
      { name: "Pallotte cacio et ova", description: "Boulettes au fromage de brebis en sauce tomate." },
      { name: "Polpo alla luciana", description: "Poulpe cuisiné en sauce tomate et olives noires de Ligure." },
      { name: "Salade de poulpe en persillade" },
      { name: "Saumon gravlax", description: "Marinade 3 jours — citron cédrat, citron vert, pamplemousse, racine galanga." },
      { name: "Vitello Tonato", description: "Carpaccio de veau, sauce thon, câpres et anchois.", note: "uniquement le week-end" },
      { name: "Pavé de saumon au pesto", description: "Citron confit, olives taggiasche, pesto au basilic frais." },
    ],
  },
  {
    title: "Légumes cuisinés",
    priceRange: "de 2,70 € à 3,80 € / 100 g",
    items: [
      { name: "Petits farcis niçois", description: "Légumes farcis à la viande (aubergines, courgettes, artichauts, champignons, tomates, poivrons)." },
      { name: "Capouns niçois", description: "Feuilles de blette, farce à la viande (veau, bœuf et porc)." },
      { name: "Aubergines alla parmigiana", description: "Aubergines fondantes, sauce tomate maison, basilic frais et parmesan gratiné.", veggie: true },
      { name: "Légumes rôtis façon ratatouille", veggie: true },
      { name: "Carottes sautées à l’ail et au persil", veggie: true },
      { name: "Brocolis à la vénitienne", veggie: true },
      { name: "Salade d’artichauts en persillade", veggie: true },
    ],
  },
  {
    title: "Les bons raviolis frais de Marcello",
    priceRange: "à partir de 27 € / Kg",
    items: [
      { name: "Demi-Lune Chèvre Miel", veggie: true },
      { name: "Demi-Lune Osso Bucco et safran" },
      { name: "Demi-Lune Carbonara" },
      { name: "Ciambellone Radicchio & Speck" },
      { name: "Ciambellone Basilic et Bufala", veggie: true },
      { name: "Ciambellone au fromage", veggie: true },
      { name: "Papillon jambon cru & Bufala" },
      { name: "Papillon saucisse italienne" },
      { name: "Treccione aux artichauts", veggie: true },
      { name: "Quadratti Poulet citron & olives" },
      { name: "Quadratti alla parmigiana", veggie: true },
      { name: "Quadratti pesto, pignons de pin", veggie: true },
      { name: "Quadratti citron & ricotta", veggie: true },
      { name: "Tortellone tomate séchée", veggie: true },
      { name: "Tortellone aux champignons", veggie: true },
      { name: "Tortellone au veau" },
      { name: "Tortellone au bœuf braisé" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Sélection de biscotti italiens", description: "Cannoli, amaretti, sfogliatelle…", veggie: true },
      { name: "Baba au Rhum", veggie: true },
      { name: "Panna Cotta", description: "Nature, framboise, caramel ou mangue.", veggie: true },
      { name: "Tiramisu", description: "Classique au café, caramel, pistache framboise, spéculos, citron.", veggie: true, price: "individuel 4,80 € · verrine buffet 3 € · 6 pers. 35 € · 8/10 pers. 45 € · Gigante 25 pers. 150 €" },
    ],
  },
];

/* ════════════════════════════════════════════════════════════════════════
   APERITIVO — détail complet du Menu Aperitivo officiel
   (Menu-Aperetivo-Mamarazzi pages 1-4)
   ════════════════════════════════════════════════════════════════════════ */

export const aperitivoPlateaux = [
  {
    no: "Formule I",
    name: "Plateau de charcuterie",
    description:
      "Sélection corse & italienne : Jambon de Parme, Bresaola, Coppa, Lonzu, Mortadelle, Jambon blanc aux herbes, Spianata piccante, Speck.",
    extra: "Sur demande de décembre à février : Figatelli grillé (sup. 12 €).",
    tiers: [
      { size: "4 à 6 personnes", price: "40 €" },
      { size: "6 à 8 personnes", price: "50 €" },
      { size: "10 à 12 personnes", price: "80 €" },
    ],
  },
  {
    no: "Formule II",
    name: "Plateau d’Antipasti",
    description:
      "Légumes grillés, involtini de speck, bresaola, spianata piccante farcis au fromage, poulpe grillé, courgettes farcies fromage, tomates séchées, champignons à l’huile, bombinettes thon-câpres, petits poivrons doux au fromage, olives.",
    tiers: [
      { size: "4 à 6 personnes", price: "50 €" },
      { size: "6 à 8 personnes", price: "60 €" },
      { size: "10 à 12 personnes", price: "120 €" },
    ],
  },
  {
    no: "Formule III",
    name: "Plateau mixte",
    description:
      "Antipasti + Charcuterie + sélection de fromages italiens (dés de parmesan, gorgonzola, pecorino, scarmoza fumé).",
    tiers: [
      { size: "4 à 6 personnes", price: "60 €" },
      { size: "6 à 8 personnes", price: "70 €" },
      { size: "10 à 12 personnes", price: "130 €" },
    ],
  },
];

export const aperitivoMignardises = {
  intro: "5 pièces minimum recommandées par personne. Possibilité de commander des plateaux d’une seule variété.",
  items: [
    "Mini arancini au choix",
    "Croque truffe végé, jambon blanc ou saumon",
    "Navettes garnies — effiloché de poulet paprika ou version végé (ricotta, épinard, tomate séchée)",
    "Mini tatin de tomate Datterino de Sicile sur pâte brisée au pesto",
    "Mini pissaladière niçoise",
    "Feuilletés champignons de Paris en persillade & mozzarella",
    "Polenta snackée, chantilly de ricotta au citron vert, éclats de noisette torréfiées*",
    "Tiramisu salé — version jambon de Parme ou végé**",
  ],
  notes: "* à partir de 42 pièces · ** à partir de 100 pièces",
  tiers: [
    { size: "15 pièces · 3 variétés", price: "20 €" },
    { size: "30 pièces · 5 variétés", price: "42 €" },
    { size: "42 pièces · 6 variétés", price: "60 €" },
    { size: "100 pièces · 8 variétés", price: "170 €" },
  ],
};

export const aperitivoGiggante = [
  {
    name: "Plaque de pissaladière niçoise",
    subtitle: "Format giggante 53 × 32 cm",
    description: "Oignons fondants, anchois, olives noires de Ligure.",
    price: "60 €",
  },
  {
    name: "Contadina",
    subtitle: "Pizza sur base de Foccacia",
    description: "Base tomate, légumes grillés, Reggiano et Fior di Latte.",
    price: "58 €",
  },
  {
    name: "La Niçoise",
    subtitle: "Pizza sur base de Foccacia",
    description: "Base tomate, persillade, chiffonnade de jambon de Parme ou spianata piccante.",
    price: "60 €",
  },
  {
    name: "Tartufina",
    subtitle: "Pizza sur base de Foccacia",
    description: "Base blanche, crème de truffe, champignons & pistaches.",
    price: "70 €",
  },
];

/* ════════════════════════════════════════════════════════════════════════
   SUR-MESURE — services BtoC + BtoB extraits du site
   ════════════════════════════════════════════════════════════════════════ */

export const enterpriseServices = {
  intro: "Afterwork convivial, pause déjeuner, réunion stratégique, séminaire, team building ou repas clients : profitez d’une cuisine maison, fraîche et généreuse, livrée directement sur votre lieu de travail.",
  moments: [
    {
      title: "Apéritifs d’équipe",
      items: ["Afterwork", "Victoire", "Signature de contrat", "Pot de départ"],
    },
    {
      title: "Team building & séminaires",
      items: ["Food bars", "Brunchs", "Pauses sucrées", "Cocktails d’entreprise"],
    },
    {
      title: "Repas clients",
      items: ["Déjeuners de travail", "Plateaux-repas livrés", "Buffets réception"],
    },
  ],
};

// Verbatim du site officiel — pas de précisions inventées.
export const sumesurePrestations = [
  "Livraison",
  "Installation",
  "Décoration",
  "Food bar",
  "Cocktail bar",
  "Animation culinaire",
];

// Options du formulaire devis — extraites du site officiel (page Contact).
export const quoteOptions = [
  "Buffet / Dîner",
  "Anniversaire",
  "Mariage",
  "Communion / Baptême",
  "Séminaire",
  "Déjeuner d’entreprise",
  "Apéritivo",
  "Autre (préciser)",
];

export const evenementsCovers = [
  "Mariages",
  "Communions",
  "Baptêmes",
  "Anniversaires",
  "Garden parties",
  "Buffets chics",
];

export const evenementsCoversByAudience = [
  {
    label: "Particuliers",
    items: [
      "Mariages",
      "Communions",
      "Baptêmes",
      "Anniversaires",
      "Garden parties",
      "Buffets chics",
    ],
  },
  {
    label: "Entreprises",
    items: [
      "Afterworks",
      "Séminaires",
      "Team building",
      "Déjeuners clients",
      "Cocktails d’entreprise",
      "Pauses sucrées",
    ],
  },
];
