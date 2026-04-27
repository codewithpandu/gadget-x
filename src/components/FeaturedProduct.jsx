import React from "react";
import { SmallButton } from "./ui/Button";
import { ProductCard } from "./ui/Card";

const FeaturedProduct = () => {
  return (
    <div className="mt-18">
      <h1 className="text-center text-2xl font-bold">
        Product <span className="text-accent">Unggulan</span>
      </h1>
      <p className="text-center text-xs w-1/2 mx-auto mt-2">
        Pilihan gadget terbaik dengan kualitas premium dan garansi resmi
      </p>
      <div className="mt-8 flex gap-2">
        <SmallButton>Semua</SmallButton>
        <SmallButton>Smartphone</SmallButton>
        <SmallButton>Audio</SmallButton>
        <SmallButton>Laptop</SmallButton>
        <SmallButton>Storage</SmallButton>
      </div>
      <div className="mt-4 flex gap-2">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProduct;
