import React from "react";
import { SmallButton } from "./ui/Button";
import { ProductCard } from "./ui/Card";

import { products } from "../products";

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
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
