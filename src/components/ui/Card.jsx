import React from "react";
import RupiahCurrency from "../../utils/RupiahCurrency";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

export const ProductCard = (props) => {
  const { id, name, price, image, brand, slug } = props.data;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ productId: id, qty: 1 }));
  };

  return (
    <Link
      to={`/product/${slug}`}
      className="bg-background border border-white/20 w-full md:1/3 rounded-2xl overflow-hidden group"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt="product 1"
          className="group-hover:scale-125 transition-transform duration-100 ease-in-out object-cover w-full h-72 md:h-80"
        />
      </div>
      <div className="p-2 h-28 md:h-20">
        <small className="text-gray-400">{brand}</small>
        <h3 className="font-bold text-xl group-hover:text-accent">{name}</h3>
        <small className="text-gray-400">⭐4.8 (543)</small>
      </div>
      <div className="mt-auto flex justify-between p-2">
        <p>{RupiahCurrency(price)}</p>
        <button
          className="bg-accent p-2 rounded-xl cursor-pointer"
          onClick={addToCartHandler}
        >
          <IoCartOutline className="text-background" />
        </button>
      </div>
    </Link>
  );
};
