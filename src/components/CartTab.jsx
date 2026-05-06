import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTab } from "../store/cart";
import CartItem from "./CartItem";
import RupiahCurrency from "../utils/RupiahCurrency";
import { products } from "../products";

export const CartTab = () => {
  const statusTab = useSelector((state) => state.cart.statusTab);
  const carts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(toggleTab());
  };

  const totalProduct = carts.reduce((acc, item) => {
    const product = products.find((product) => product.id === item.productId);
    return acc + product.price * item.qty;
  }, 0);

  return (
    <div
      className={` ${statusTab ? "translate-x-0" : "translate-x-full"} transition duration-500 ease-in-out fixed top-0 right-0 z-99 w-100 text-white bg-foreign px-4 py-8 h-full grid grid-rows-[60px_1fr_60px]`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <FaShoppingCart />
          <p>Keranjang</p>
        </div>
        <button
          onClick={closeCart}
          className="py-1 px-3 hover:bg-white/20 rounded cursor-pointer"
        >
          X
        </button>
      </div>
      <div className="border-b-2 border-t-2 border-white/50 ">
        {carts.map((cart, index) => (
          <CartItem data={cart} key={index} />
        ))}
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <small>Total</small>
          <p className="font-bold">{RupiahCurrency(totalProduct)}</p>
        </div>
        <div className="pt-2">
          <button className="bg-accent w-full py-2 rounded-xl cursor-pointer hover:text-foreign">
            Checkout Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
