// src/components/NewArrivals.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function NewArrivals() {
  return (
    <Swiper spaceBetween={20} slidesPerView={"auto"} centeredSlides>
      {["na1.jpg","na2.jpg","na3.jpg","na4.jpg"].map((img) => (
        <SwiperSlide key={img} style={{ width: "300px" }}>
          <Image src={`/images/${img}`} alt="" width={300} height={400} className="rounded-lg" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
