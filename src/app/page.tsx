import { Hero } from "@/components/sections/Hero";
import { Explore } from "@/components/sections/Explore";
import { Story } from "@/components/sections/Story";
import { Dishes } from "@/components/sections/Dishes";
import { Aperitivo } from "@/components/sections/Aperitivo";
import { Bespoke } from "@/components/sections/Bespoke";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Explore />
      <Story />
      <Dishes />
      <Aperitivo />
      <Bespoke />
      <Testimonials />
      <InstagramFeed />
      <FinalCTA />
    </>
  );
}
