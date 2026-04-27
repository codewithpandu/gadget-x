import React from "react";
import product1 from "../../assets/img/product/iphone-11.jpg";
import RupiahCurrency from "../../utils/RupiahCurrency";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  return (
    <Link
      to=""
      className="bg-background w-1/2 h-auto rounded-2xl overflow-hidden group"
    >
      <div className="overflow-hidden">
        <img
          src={product1}
          alt="product 1"
          className="group-hover:scale-125 transition-transform duration-100 ease-in-out"
        />
      </div>
      <div>
        <small className="text-gray-400">Smartphone</small>
        <h3 className="font-bold text-lg group-hover:text-accent">Iphone 11</h3>
        <small className="text-gray-400">⭐4.8 (543)</small>
      </div>
      <div className="mt-2 flex justify-between">
        <p>{RupiahCurrency(18999000)}</p>
        <button className="bg-accent p-2 me-4 rounded-xl cursor-pointer">
          <IoCartOutline className="text-background" />
        </button>
      </div>
    </Link>
  );
};
