# DESIGN.md — Mamarazzi

> Direction artistique de Mamarazzi — traiteur italien & niçois à Asnières-sur-Seine.
> Validée par Cristelle Doveri le 2026-06-01. Direction : **Riviera Editoriale** (mix A+C raffiné).
> Ce fichier pilote toute l'implémentation Next.js qui suit.

---

## 1. Atmosphère

Un magazine couleur italien réimprimé en 2026 sur papier ivoire. L'ossature presse rigoureuse de *Cabana* et *NYT Cooking* rencontre la chaleur tactile d'un carnet de recettes de famille — Cristelle, ex-journaliste italienne de la Côte d'Azur, devient le sujet du site, pas un catalogue de plats. Tout est généreux, lisible, soigné.

Les **arches italianisantes** sont la grammaire visuelle principale — pas un détail décoratif. Elles structurent la page : hero en grande arche architecturale, portrait Cristelle en arche haute, plats en arches étroites verticales, formules aperitivo et témoignages en arches classiques. C'est l'élément non négociable que la cliente a explicitement demandé de conserver.

La palette **terracotta brûlé + olive sombre + ivoire vélin** sort du minimalisme blanc/noir corporate des concurrents premium (Profumo, AMARSI, Buongustaio) tout en évitant les clichés cards-arches-empilées du traiteur italien IDF moyen.

**Caractéristiques clés** :
- Terracotta saturé `#C44A2C` comme couleur signature (CTA, kickers, accents)
- Fond ivoire chaud `#F4EADC` (entre crème et sable, surface principale)
- Olive sombre `#2F4A3A` comme contrepoint chic
- Typographie variable Fraunces (axes opsz + SOFT + ital + wght exploités à fond)
- Body Inter en finition premium (ss01, cv11, ligatures)
- Texture papier SVG noise subtile (opacity 0.025, mix-blend multiply)
- Animations scroll-driven `cubic-bezier(0.22, 1, 0.36, 1)`
- Grammaire d'arches déclinée en 4 variantes
- Frises italianisantes SVG (branche d'olivier) en séparateurs

---

## 2. Palette

### Tokens (à copier dans `@theme {}` Tailwind v4)

```css
@theme {
  --color-dark:        #1F1815;  /* espresso quasi-noir chaud — texte principal */
  --color-light:       #F4EADC;  /* ivoire sable chaud — fond page */
  --color-accent:      #C44A2C;  /* terracotta brûlé saturé — CTA, signatures */
  --color-accent-dark: #8E3520;  /* brique foncée — hover, états pressed */
  --color-olive:       #2F4A3A;  /* vert olive sombre — accent secondaire, sections inversées */
  --color-sand:        #EBD9B8;  /* sable doré — surface cartes, fond section #03 */
  --color-ink:         #5A463A;  /* brun encre vieilli — légendes, captions, filets sépia */
}
```

### Rôles et contrastes WCAG

| Token | Hex | Rôle | Contraste sur light |
|-------|-----|------|---------------------|
| `--color-dark` | `#1F1815` | Texte principal, footer bg | 15.35:1 ✓ AAA |
| `--color-light` | `#F4EADC` | Fond page, texte sur dark/olive | — |
| `--color-accent` | `#C44A2C` | CTA primary, kickers terracotta, dropcap | 4.09:1 ✓ AA large only |
| `--color-accent-dark` | `#8E3520` | Hover CTA, terracotta en texte petit | 6.41:1 ✓ AA |
| `--color-olive` | `#2F4A3A` | Kickers olive, fond section #05, accents | 8.20:1 ✓ AAA |
| `--color-sand` | `#EBD9B8` | Fond section #03, cartes formules | — (surface) |
| `--color-ink` | `#5A463A` | Légendes, citations, filets sépia | 7.55:1 ✓ AAA |

### Couleurs fonctionnelles

```
Erreur         : #C44A2C (même que terracotta — pas besoin de duo)
Succès         : #2F4A3A (olive)
Focus ring     : 2px solid var(--color-olive); outline-offset: 3px
Overlay photo  : linear-gradient(180deg, transparent 60%, rgba(31,24,21,0.18))
Shadow soft    : 0 18px 40px -22px rgba(31, 24, 21, 0.28)
Shadow CTA hov : 0 12px 28px -8px rgba(196, 74, 44, 0.45)
```

---

## 3. Typographie

### Fonts

| Rôle | Font | Fallback | Poids | Variable axes | Pourquoi |
|------|------|----------|-------|---------------|----------|
| Display | **Fraunces** | Georgia, serif | 500, 600, 700, 800 | `opsz 9..144`, `SOFT 0..100`, `ital 0/1`, `wght 400..900` | Serif éditorial moderne avec personnalité presse. SOFT 70 donne la chaleur d'un carnet, SOFT 30 donne la rigueur magazine. Italic + swashes activés pour les citations. |
| Body | **Inter** | system-ui, sans-serif | 400, 500, 600 | — | Sans-serif neutre premium (standard Notion/Linear/Vercel). Feature settings `ss01` et `cv11` pour la finition haute couture. |

### Chargement (Next.js)

```ts
// app/layout.tsx
import { Fraunces, Inter } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
```

### Hiérarchie

| Rôle | Font | Taille | Poids | Variation | Line-height | Letter-spacing |
|------|------|--------|-------|-----------|-------------|----------------|
| Hero H1 | Fraunces | `clamp(3.2rem, 8.5vw, 7.5rem)` | 800 | `opsz 144, SOFT 70, ital mix` | 0.92 | -0.025em |
| Section H2 | Fraunces | `clamp(2rem, 5vw, 3.6rem)` | 700 | `opsz 144, SOFT 50` | 1.05 | -0.02em |
| Final CTA H2 | Fraunces italic | `clamp(4rem, 12vw, 9rem)` | 800 | `opsz 144, SOFT 70` | 0.95 | -0.035em |
| Nº édito | Fraunces italic | `clamp(2.5rem, 5vw, 4rem)` | 800 | `opsz 144, SOFT 70` | 1 | -0.02em |
| Citation | Fraunces italic | `clamp(1.4rem, 2.6vw, 2.2rem)` | 500 | `opsz 144, SOFT 70` | 1.35 | -0.005em |
| Plat H3 | Fraunces italic | `clamp(1.25rem, 1.8vw, 1.55rem)` | 700 | `opsz 144, SOFT 60` | 1.1 | -0.01em |
| Kicker | Fraunces upper | `0.78rem` | 600 | `opsz 14, SOFT 30` | 1 | 0.22em |
| Body | Inter | `1rem` | 400 | — | 1.65 | normal |
| Body large | Inter | `1.08rem` | 400 | — | 1.7 | normal |
| Sous-titre hero | Inter | `clamp(1.05rem, 1.4vw, 1.2rem)` | 500 | — | 1.55 | normal |
| Bouton | Inter | `0.94rem` | 600 | — | 1 | 0.02em |
| Légende | Inter upper | `0.78rem` | 500 | — | 1.5 | 0.18em |

### Micro-typographie premium (mandatory partout)

```css
:root {
  font-feature-settings: 'liga', 'clig', 'calt', 'ss01', 'cv11';
  text-rendering: optimizeLegibility;
  hanging-punctuation: first last;
}

h1, h2, h3, h4 { text-wrap: balance; }
p { text-wrap: pretty; }
```

---

## 4. Signatures visuelles

### Signature 1 — Grammaire d'arches systémique
- **Description** : L'arche est PARTOUT (contrainte cliente non négociable). Pas un détail décoratif — une grammaire complète déclinée en 4 variantes. Photo hero, portrait Cristelle, 4 plats, 3 formules aperitivo, 3 piliers sur-mesure, 3 témoignages = tout est en arche.
- **Implémentation** :
```css
:root {
  --arch-classic: 50% 50% 0 0 / 30% 30% 0 0;   /* Arche large basse — formules, piliers, témoignages */
  --arch-tall:    50% 50% 0 0 / 50% 50% 0 0;   /* Arche haute classique — portrait, hero */
  --arch-narrow:  50% 50% 0 0 / 25% 25% 0 0;   /* Arche étroite — plats en colonnes */
  --arch-soft:    60% 60% 8% 8% / 30% 30% 4% 4%; /* Arche douce — variations subtiles */
}
.arch { border-radius: var(--arch-classic); overflow: hidden; }
```

### Signature 2 — Numérotation édito
- **Description** : Chaque section porte un Nº01 → Nº05 en Fraunces 800 italic monumental, alternance couleurs terracotta/olive.
- **Implémentation** : `<span class="no no--terracotta">Nº01</span>` ou `no--olive`, `font-style: italic; font-variation-settings: "opsz" 144, "SOFT" 70; font-size: clamp(2.5rem, 5vw, 4rem);`

### Signature 3 — Kickers small caps de presse
- **Description** : Avant chaque titre de section, un kicker en small caps Fraunces 600, letter-spacing 0.22em, précédé d'un filet horizontal court.
- **Implémentation** :
```css
.kicker {
  font-family: var(--font-fraunces);
  font-weight: 600;
  font-variation-settings: "opsz" 14, "SOFT" 30;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--color-olive);
  display: inline-flex; align-items: center; gap: 0.65rem;
}
.kicker::before { content: ""; width: 28px; height: 1px; background: currentColor; opacity: 0.65; }
```

### Signature 4 — Dropcap éditorial
- **Description** : Première lettre des intros narratives (chapitre I notamment) en Fraunces 800 italic SOFT 70, taille 5-7rem, floating, color terracotta.
- **Implémentation** :
```css
.dropcap::first-letter {
  font-family: var(--font-fraunces);
  font-style: italic; font-weight: 800;
  font-variation-settings: "opsz" 144, "SOFT" 70;
  font-size: clamp(5rem, 9vw, 7rem);
  line-height: 0.78;
  float: left;
  color: var(--color-accent);
  padding: 0.45rem 0.55rem 0 0;
  margin-top: 0.3rem;
}
```

### Signature 5 — Frises italianisantes SVG (branche d'olivier)
- **Description** : Frises inline en SVG, hauteur 28-36px, color ink-vieilli opacity 0.55-0.6, en séparateurs de sections. Branche d'olivier stylisée avec olives + feuilles.
- **Implémentation** : SVG inline (cf. variant-mamarazzi-D.html ligne ~570 pour le pattern de base) — à composantiser en `<OliveBranchFrieze />`.

### Signature 6 — Marginalia illustrations SVG
- **Description** : Petites illustrations linéaires (citron, olive, basilic, blé) en SVG inline, stroke 1.2-1.4px terracotta ou olive, semées avec parcimonie dans les marges des sections (max 1 par section).
- **Implémentation** : Composants `<Marginalia.Lemon />`, `<Marginalia.Olive />`, etc. Position absolue dans les sections clés.

### Signature 7 — Texture papier
- **Description** : SVG noise feTurbulence inline, opacity 0.025 maximum, mix-blend multiply, fixé sur tout le body. Donne la sensation papier sans casser la propreté éditoriale.
- **Implémentation** :
```css
body::before {
  content: ""; position: fixed; inset: 0;
  pointer-events: none; z-index: 1;
  opacity: 0.5; mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='340' height='340'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.36 0 0 0 0 0.27 0 0 0 0 0.23 0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
```

### Signature 8 — Citations en Fraunces italic SOFT 70
- **Description** : Toutes les citations (verbatims clients, phrases de Cristelle) en Fraunces italic 500, SOFT 70, taille generous, color ink-vieilli, encadrées de filets ou de points décoratifs.
- **Implémentation** : Composant `<PullQuote attribution="..." />` avec filets terracotta haut/bas + points dorés aux extrémités.

### Signature 9 — Animations scroll-driven premium
- **Description** : Reveals au scroll via IntersectionObserver, easing `cubic-bezier(0.22, 1, 0.36, 1)`, stagger 90ms entre enfants, parallax léger sur le hero (desktop only).
- **Implémentation** :
```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 900ms var(--ease), transform 900ms var(--ease); }
.reveal.in { opacity: 1; transform: none; }
/* + stagger logic — cf. variant-mamarazzi-D.html */

@media (prefers-reduced-motion: reduce) {
  .reveal, .stagger > * { opacity: 1 !important; transform: none !important; }
}
```
Côté Next.js : composantiser via un hook `useReveal()` qui retourne un `ref` à attacher.

### Signature 10 — Header sticky transparent → fond ivoire au scroll
- **Description** : Au load, header transparent par-dessus le hero. Au scroll > 24px, fond ivoire `rgba(244, 234, 220, 0.92)` + backdrop-filter blur + filet inférieur terracotta. Transition 400ms.
- **Implémentation** : classe `.scrolled` toggled sur le `<header>` via scroll listener avec rAF (cf. variant-mamarazzi-D.html script).

---

## 5. Direction photographique

### Type de photos attendues
- **Plats en gros plan** : assiettes dressées avec soin, lumière naturelle latérale, fond neutre (bois, lin, papier kraft chaud).
- **Scènes de cuisine** : mains de Cristelle, gestes (rouler les cannellonis, dresser un plateau), mouvement, profondeur de champ.
- **Portraits Cristelle** : intimistes, regard tourné légèrement, jamais frontal corporate. Lumière chaude, fond travaillé (mur ivoire, étagère cuisine).
- **Plateaux apéritivo** : flat-lay généreux, plusieurs niveaux, jamais centré strict — composition asymétrique éditoriale.
- **Scènes événementiel** : tablées dressées, focus sur les détails (nappe, vaisselle, lumière), pas sur les visages.

### Traitement
- **Température** : chaude (4500K-5500K équivalent), jamais froide.
- **Saturation** : naturelle, surtout pas sur-saturée — préserver l'authenticité de la cuisine maison.
- **Contraste** : moyen — éviter les noirs trop écrasés (qui contrediraient le côté chaleureux).
- **Blend optionnel** : sur 2-3 photos clés (hero, témoignages bg), léger `mix-blend-mode: multiply` avec overlay `rgba(196, 74, 44, 0.05)` pour cohérence chromatique avec le terracotta. À utiliser avec parcimonie.

### À éviter
- ❌ Photos stock générique d'assiettes anonymes
- ❌ Lumière froide / bleutée / fluorescente
- ❌ Plans trop posés avec ingrédients alignés au cordeau
- ❌ Filtres Instagram saturés rouge/jaune flashy
- ❌ Captures d'écran du feed Instagram (le site actuel le fait — surtout ne pas reproduire)
- ❌ Visages en plan serré qui datent (sourire forcé)

### Note projet
Cristelle a prévu une **séance photo après mise en ligne** (Q21). La maquette utilise des photos Unsplash en attendant — à remplacer dans `public/photos/` lors de la séance. Prévoir un naming convention `dish-lasagne.jpg`, `portrait-cristelle.jpg`, etc., et un dossier `ressource/photos/` à créer.

---

## 6. Composants clés

### Hero
- Layout 2 colonnes desktop (texte gauche 1.05fr, arche photo droite 0.95fr), stack mobile.
- Texte gauche : kicker `Traiteur italien & niçois — Asnières-sur-Seine` + H1 monumental Fraunces italic mix `"L'aperitivo, c'est un rituel. Une mamma, c'est une vie."` + sous-titre Inter + double CTA (terracotta + lien souligné olive) + meta horaires / adresse.
- Photo : grande arche `--arch-tall`, aspect-ratio 3/4, parallax léger desktop, badge "Spécialités du jour · Nº 01 · Riviera" en bas en italic.
- Animation : stagger sur le texte (kicker → titre → sous-titre → CTAs → meta), reveal sur l'arche avec 200ms de delay.

### Cards (3 archétypes)

**Plat (Nº02)** : Photo en arche `--arch-narrow` aspect 3/4.2, nom italic Fraunces, prix discret Inter, description italic Fraunces SOFT 50 dessous. Hover : scale 1.06 sur image, transform 800ms ease premium.

**Formule aperitivo (Nº03)** : Fond `--color-light` sur section sand, border-radius `--arch-classic`, padding généreux centré. Mini-numéro `Formule I/II/III` en italic small caps terracotta, nom italic Fraunces 700, description Inter, taille (à partir de X personnes) en olive italic en bas séparée d'un filet. Hover : translateY -6px + shadow soft.

**Témoignage (Nº05)** : Fond `--color-light` sur section olive, border-radius `--arch-classic`, padding généreux. 5 étoiles terracotta en haut, citation italic Fraunces, attribution Inter caps en bas séparée d'un filet. Rotation initiale subtle (-0.6° / +0.4° / -0.3°) qui se redresse au hover. Sur mobile : pas de rotation.

### Navigation
- Header sticky, padding 1.1rem → 0.7rem au scroll.
- Brand "Mamarazzi" en Fraunces italic 800 SOFT 70, taille 1.7rem (1.4rem sur mobile).
- Nav centrée : L'histoire / La carte / L'aperitivo / Le sur-mesure / Contact — liens avec underline animé scaleX au hover (color → terracotta).
- CTA droit "Commander" en pill terracotta plein.
- Mobile : nav burger, brand + CTA visibles.

### CTA principal
- Pill terracotta plein (`border-radius: 9999px`), text light (utiliser `#FFFFFF` si AA strict requis pour bold 0.94rem, ou garder `var(--color-light)` qui passe en AA large).
- Padding `1.05rem 2rem`, font Inter 600 0.94rem letter-spacing 0.02em.
- Hover : background terracotta-dark + translateY -2px + box-shadow `0 12px 28px -8px rgba(196, 74, 44, 0.45)`.
- Focus-visible : outline 2px olive offset 3px.
- Transition 280ms ease.

### CTA secondaire (ghost)
- Transparent, border olive 1px à 20% opacity, text olive.
- Hover : background olive @ 6% opacity, border solid olive.
- Même padding que le primary.

### Lien de section ("Voir la carte complète", "Découvrir l'histoire")
- Inline-flex avec icône flèche → SVG 14px.
- Color olive, border-bottom 1px currentColor.
- Hover : color terracotta, gap augmente de 0.4rem à 0.7rem (effet d'invitation).

### Footer
- Background `--color-dark` (espresso), text `--color-sand`.
- Frise olivier en haut centrée (color sand @ 35% opacity).
- Grille 4 colonnes : Brand (wordmark Mamarazzi grand Fraunces italic 800 + tagline) / Contact / Horaires / La maison (liens).
- Headers de colonnes en kicker terracotta small caps.
- Filet horizontal sépia avant la zone bottom.
- Bottom : copyright + "Site créé par DIGIFLOW" (ou BE-HYPE selon tranche brief).

---

## 7. À éviter

Garde-fous spécifiques à cette DA, à ne JAMAIS enfreindre :

- ❌ **Aucune autre couleur que les 7 tokens** — pas de magenta, pas de rose, pas de bleu, pas de jaune mimosa (réservé direction B abandonnée).
- ❌ **Aucune autre font** — pas d'Amatic SC (le site actuel l'utilise — c'est ce qu'on remplace), pas de Poppins, pas de Montserrat, pas de Caveat / handwriting.
- ❌ **Pas de pure black `#000`** — utiliser `--color-dark` `#1F1815` partout. Noir pur = froid, brise l'atmosphère chaude.
- ❌ **Pas de blanc pur `#FFFFFF`** sauf cas WCAG critique (texte sur CTA terracotta éventuellement). Utiliser `--color-light` `#F4EADC` qui est ivoire chaud.
- ❌ **Pas de cards à arches empilées en grille uniforme** — c'est ce que fait le site actuel (Web&Vous), c'est ce qu'on dépasse. Les arches sont systémiques mais déclinées en variantes (hauteurs différentes, contextes différents).
- ❌ **Pas de bandeau cookie pleine largeur en haut** — discret bas-droite uniquement.
- ❌ **Pas de captures Instagram intégrées dans le site** — si un feed est souhaité, soit Elfsight live, soit on n'en met pas.
- ❌ **Pas de gradient multicolore** — strictement les 7 couleurs de la palette. Gradients = `transparent → rgba(31, 24, 21, X)` pour overlay photos, jamais coloré.
- ❌ **Pas de border-radius `9999px`** sur les cards et photos — seulement sur les CTA pills. Les cartes utilisent les arches.
- ❌ **Pas d'illustration cartoon** — si illustration, ligne fine SVG monochrome (cf. Marginalia signature 6).
- ❌ **Pas d'icônes Material / Feather emojis** — SVG custom uniquement, dans le ton éditorial.
- ❌ **Pas de slideshow Ken Burns dans le hero** — le site actuel l'a, on évite. Une seule photo arche, parallax léger.

---

## 8. Références

| Type | Référence | Ce qu'on en garde |
|------|-----------|-------------------|
| Magazine print | *Cabana* | Mises en page éditoriales généreuses, kickers small caps, dropcaps, photos en pleine page |
| Magazine print | *Domino* | Couleurs chaudes assumées, traitement éditorial de la cuisine domestique |
| Site web | *NYT Cooking* | Hiérarchie typographique (Fraunces-like), recettes comme articles narratifs |
| Site web | *Apartment 32* (Phaidon) | Cookbook éditorial chic — direction photo plat/portrait/scène |
| Brand | *Acqua Pazza* (Paris) | Concurrent italien minimaliste — référence pour la rigueur, qu'on dépasse par la chaleur |
| Couleur | Toscane / Riviera ligurienne | Terracotta brûlé, olive sombre, ivoire vélin |
| Typo | Variable Fraunces (Tobias Frere-Jones / Fraunces / Undercase Type) | Axe SOFT exploité — chaleur dynamique sans changer de famille |
| Site actuel | mamarazzi-traiteur.fr | Conserver : qualité des textes de Cristelle, idée des arches. Remplacer : palette générique, 4 typos chaotiques, mosaïque Instagram, H1 SEO-only |

---

## 9. Quick tokens (référence rapide pour développement)

```
Fond page         : var(--color-light)        #F4EADC
Texte principal   : var(--color-dark)         #1F1815
Texte secondaire  : var(--color-ink)          #5A463A
CTA primary       : var(--color-accent)       #C44A2C
CTA hover         : var(--color-accent-dark)  #8E3520
Accent secondaire : var(--color-olive)        #2F4A3A
Surface section   : var(--color-sand)         #EBD9B8
Footer bg         : var(--color-dark)         #1F1815

Display           : var(--font-fraunces), weight 700-800, italic mix, opsz 144, SOFT 70
Body              : var(--font-inter), weight 400-500, ss01+cv11
Kicker            : Fraunces 600 caps 0.22em letter-spacing
Citation          : Fraunces italic 500 SOFT 70

Easing            : cubic-bezier(0.22, 1, 0.36, 1)
Reveal duration   : 900ms
Stagger gap       : 90ms
Hover scale photo : 1.04-1.06 over 600-800ms
Shadow soft       : 0 18px 40px -22px rgba(31,24,21,0.28)
Shadow CTA hover  : 0 12px 28px -8px rgba(196,74,44,0.45)

Arche classique   : 50% 50% 0 0 / 30% 30% 0 0   (formules, piliers, témoignages)
Arche haute       : 50% 50% 0 0 / 50% 50% 0 0   (portrait, hero)
Arche étroite     : 50% 50% 0 0 / 25% 25% 0 0   (plats colonne)
Arche douce       : 60% 60% 8% 8% / 30% 30% 4% 4%

Max width         : 1320px
Section padding-y : clamp(5rem, 12vw, 10rem)
Section padding-x : clamp(1.25rem, 5vw, 5rem)
Breakpoints       : 540px, 760px, 880px, 1080px
```

---

## 10. Architecture pages (à confirmer en prod)

Sections du brief Q23 + visio :

- **Accueil** — Hero / Nº01 Histoire / Nº02 Cuisine / Nº03 Aperitivo / Nº04 Sur-mesure / Nº05 Avis / CTA final / Footer
- **La carte** — détaillée comptoir quotidien + menu buffet (à fusionner ou non — à trancher avec Cristelle)
- **L'aperitivo** — page dédiée formules + commande (intégrée BeBook)
- **Le sur-mesure** — événementiel BtoC + BtoB (formulaire devis)
- **L'histoire** — page longue Cristelle + Mamarazzi (renvoie le ton presse)
- **Contact** — coordonnées + formulaire + Google Maps embed
- **Mentions légales** — généré par skill `mentions-legales` (siège Asnières actuel)

**À trancher** : nom de page "Galerie / Dernières prestations" — renommer "Carnet d'événements" pour rester dans le ton éditorial.

**Multilingue** : FR/EN (Q23) — utiliser `next-intl` (cf. skill `i18n`).

**Commande / paiement** : intégration **BeBook** (Q15 = action prioritaire). Boutons "Commander" partout pointent vers la modal BeBook (cf. skill `bebook`).
