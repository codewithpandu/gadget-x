import React from "react";
import { Hero } from "../components/Hero";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div className="py-24">
      <Hero />
      <div className="py-8">
        <FeaturedProduct />
      </div>
      <Footer />
    </div>
  );
};
