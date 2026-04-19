"use client";

import { motion } from "motion/react";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

import { type Logo } from "@/lib/logos";

export default function LogoMarquee({
  logos,
  reverse = false,
}: {
  logos: Logo[];
  reverse?: boolean;
}) {
  // const SPEED = 290; // pixels per second
  // const width = (logos.length * 120 + logos.length * 24) * 2; // logo width (w-30) + gap
  // const duration = Math.floor(width / SPEED); // seconds
  // console.log("Marquee duration:", duration, "seconds");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      className="w-full max-w-7xl mx-auto overflow-hidden"
    >
      <div className="relative py-1" aria-label={"Trusted by " + logos.map((logo) => logo.name).join(", ")}>
        <div className="absolute left-0 top-0 bottom-0 z-10 w-20 md:w-40 bg-linear-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-20 md:w-40 bg-linear-to-l from-background to-transparent pointer-events-none" />
        {/* Speed is 80px per second */}
        <Marquee reverse={reverse} className={`[--duration:25s] [--gap:1.5rem] py-2`} pauseOnHover>
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo.url}
              className="w-30 h-auto max-h-16 px-2 brightness-0 dark:invert object-contain"
              alt={logo.name + " "}
              height={100}
              width={100}
              loading="lazy"
            />
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}
