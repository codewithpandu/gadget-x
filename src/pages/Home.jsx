import React from "react";
import { Hero } from "../components/Hero";
import FeaturedProduct from "../components/FeaturedProduct";

export const Home = () => {
  return (
    <div className="pt-24">
      <Hero />
      <div className="py-8">
        <FeaturedProduct />
      </div>
    </div>
  );
};
