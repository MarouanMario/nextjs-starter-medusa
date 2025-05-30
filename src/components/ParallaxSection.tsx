"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxSectionProps {
  imageSrc: string;
  height?: string;
  children?: React.ReactNode;
}

export default function ParallaxSection({
  imageSrc,
  height = "100vh",
  children,
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden flex items-center justify-center`}
      style={{ height }}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={imageSrc} alt="" fill className="object-cover" priority />
      </motion.div>

      <div className="relative z-10 text-center text-white bg-black bg-opacity-40 p-8 rounded-lg">
        {children}
      </div>
    </section>
  );
}
