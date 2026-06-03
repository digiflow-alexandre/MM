"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function HeroBackdrop({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1.18]);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
