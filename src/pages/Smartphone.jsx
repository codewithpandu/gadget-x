import React from "react";
import coverHeader from "../assets/img/product/iphone-11.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Smartphone = () => {
  return (
    <section className="container mx-auto">
      <div className="relative w-full h-60 md:h-80 overflow-hidden">
        <img
          src={coverHeader}
          alt="smartphone"
          className="object-[10%] object-cover size-full"
        />
        <div className="absolute bg-linear-to-t from-background to-background/10 inset-0 z-10"></div>
        <div className="absolute z-20 top-0 inset-0 translate-y-1/2 p-4">
          <Link to="/">
            <FaLongArrowAltLeft className="inline me-2" />
            Kembali
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Smartphone;
