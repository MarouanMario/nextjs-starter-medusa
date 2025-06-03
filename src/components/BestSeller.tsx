// src/components/BestSeller.tsx
"use client";

import Image from "next/image";

export default function BestSeller() {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
      {/* Repeat for each best-seller product */}
      <div className="space-y-4">
        <Image src="/images/best1.jpg" alt="" width={400} height={400} className="object-cover rounded-lg" />
        <h3 className="text-xl">Piqué Polo Shirt</h3>
        <p className="font-medium">$120</p>
      </div>
      {/* … */}
    </div>
  );
}
