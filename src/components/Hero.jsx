import React from "react";
import heroImage from "../assets/img/hero.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden h-160 mt-12">
      <div>
        <img src={heroImage} alt="GadgetX" className="w-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-background/90 to-background/20"></div>
    </section>
  );
};
