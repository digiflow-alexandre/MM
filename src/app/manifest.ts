import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mamarazzi — Traiteur italien & niçois à Asnières-sur-Seine",
    short_name: "Mamarazzi",
    description:
      "Cuisine de la Côte d’Azur, recettes de famille, fait maison à Asnières depuis 2022.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4EADC",
    theme_color: "#cb7d65",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
