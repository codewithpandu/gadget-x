import React, { useEffect, useState } from "react";
import RupiahCurrency from "../utils/RupiahCurrency";
import { FaRegTrashAlt } from "react-icons/fa";
import { products } from "../products";

const CartItem = (props) => {
  const { productId, qty } = props.data;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = products.filter((product) => product.id === productId);
    setProduct(getProduct[0]);
  }, [productId]);

  return (
    <div className="mt-2 border rounded-2xl border-white/50 flex p-2 gap-2 justify-between items-center">
      <div className="w-20 h-20 shrink-0 overflow-hidden rounded-xl ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full justify-self-start">
        <div className="flex flex-col">
          <h4 className="text-sm">{product.name}</h4>
          <small>{product.brand}</small>
          <small>{RupiahCurrency(product.price)}</small>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <button className="w-5 h-5 rounded cursor-pointer bg-gray-600">
            -
          </button>
          <small>{qty}</small>
          <button className="w-5 h-5 rounded cursor-pointer bg-gray-600">
            +
          </button>
        </div>
      </div>
      <div className="self-end">
        <button className="cursor-pointer hover:text-red-500">
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
