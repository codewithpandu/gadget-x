import React, { useState } from "react";
import { SmallButton } from "./ui/Button";
import { ProductCard } from "./ui/Card";

import { products } from "../products";
import { GrRadialSelected } from "react-icons/gr";

const FeaturedProduct = () => {
  const [filtered, setFiltered] = useState(products);

  const selectProduct = (category) => {
    if (category === "all") {
      setFiltered(products);
    } else {
      const result = products.filter(
        (product) => product.category === category,
      );
      setFiltered(result);
    }
  };

  return (
    <div className="mt-18">
      <h1 className="text-center text-2xl font-bold">
        Product <span className="text-accent">Unggulan</span>
      </h1>
      <p className="text-center text-xs w-1/2 mx-auto mt-2">
        Pilihan gadget terbaik dengan kualitas premium dan garansi resmi
      </p>
      <div className="mt-8 flex gap-2 justify-center pb-4">
        <SmallButton onClick={() => selectProduct("all")}>Semua</SmallButton>
        <SmallButton onClick={() => selectProduct("smartphone")}>
          Smartphone
        </SmallButton>
        <SmallButton onClick={() => selectProduct("audio")}>Audio</SmallButton>
        <SmallButton onClick={() => selectProduct("laptop")}>
          Laptop
        </SmallButton>
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
