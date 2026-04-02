import React from "react";
import heroImage from "../assets/img/hero.jpg";
import { PrimaryButton, SecondaryButton } from "./ui/Button";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden h-160 mt-12">
      <div>
        <img
          src={heroImage}
          alt="GadgetX"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-background/90 to-background/20 flex items-center">
        <div className="px-8 py-12">
          <p className="text-xs py-1 px-2 bg-accent/30 rounded-full border border-accent w-fit ">
            🔥 Promo Spesial — Diskon hingga 30%
          </p>
          <h1 className="text-5xl md:text-6xl mt-8 font-bold">
            Gadget Terbaru,
            <br />
            <span className="text-accent drop-shadow-xl drop-shadow-accent/30">
              Teknologi Masa <br />
              Depan
            </span>
          </h1>
          <p className="pt-8 md:w-1/2">
            Temukan koleksi gadget premium terlengkap dengan harga terbaik. Dari
            smartphone hingga wearable, semua ada di sini.
          </p>
          <div className="mt-8 flex gap-4">
            <PrimaryButton>Jelajahi Produk</PrimaryButton>
            <SecondaryButton>Lihat Promo</SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};
