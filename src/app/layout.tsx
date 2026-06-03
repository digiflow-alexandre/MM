import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Sacramento } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { QuoteModalProvider } from "@/components/site/QuoteModalProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Sacramento : police script monoline pour le wordmark Mamarazzi
// (au plus proche du logo officiel calligraphique).
const sacramento = Sacramento({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mamarazzi-traiteur.fr"),
  title: {
    default: "Mamarazzi — Traiteur italien & niçois à Asnières-sur-Seine",
    template: "%s · Mamarazzi",
  },
  description:
    "Cuisine de la Côte d'Azur, recettes de famille, fait maison à Asnières depuis 2022. Lasagnes, cannelloni, pissaladière, aperitivo à composer, événementiel sur-mesure.",
  keywords: [
    "traiteur italien Asnières",
    "traiteur niçois",
    "aperitivo Hauts-de-Seine",
    "lasagnes maison",
    "pissaladière niçoise",
    "traiteur mariage Asnières",
    "traiteur événementiel 92",
    "Mamarazzi",
  ],
  authors: [{ name: "Mamarazzi" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Mamarazzi — Traiteur italien & niçois à Asnières-sur-Seine",
    description:
      "Cuisine de la Côte d'Azur, recettes de famille, fait maison à Asnières depuis 2022.",
    siteName: "Mamarazzi",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4EADC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${sacramento.variable}`}>
      <body>
        <SmoothScroll />
        <QuoteModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
