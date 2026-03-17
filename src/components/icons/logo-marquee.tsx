"use client";

import { motion } from "motion/react";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const logos = [
  {
    name: "LSIA",
    url: "/logos/lsia.png",
  },
  {
    name: "EMSI",
    url: "/logos/emsi.png",
  },
  {
    name: "Driveme",
    url: "/logos/driveme.png",
  },
  {
    name: "easygop",
    url: "/logos/easygop.png",
  },
  {
    name: "medsupport",
    url: "/logos/medsupport.png",
  },
  {
    name: "izitouch",
    url: "/logos/izitouch.png",
  },
];

export default function LogoMarquee() {
  const SPEED = 80; // pixels per second

  const [duration, setDuration] = useState(30);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.scrollWidth;
    setDuration(width / SPEED);
  }, [logos]);

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
        <Marquee className={`[--duration:${duration}s] [--gap:1.5rem] py-2`} pauseOnHover>
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo.url}
              className="w-50 h-auto max-h-16 px-2 brightness-0 dark:invert object-contain"
              alt={logo.name}
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
