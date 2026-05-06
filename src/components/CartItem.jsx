import React, { useEffect, useState } from "react";
import RupiahCurrency from "../utils/RupiahCurrency";
import { FaRegTrashAlt } from "react-icons/fa";
import { products } from "../products";
import { changeQty, deleteProductCart } from "../store/cart";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { productId, qty } = props.data;
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = products.filter((product) => product.id === productId);
    setProduct(getProduct[0]);
  }, [productId]);

  const handleMinusQty = () => {
    dispatch(
      changeQty({ productId: productId, qty: qty - 1 >= 1 ? qty - 1 : 1 }),
    );
  };

  const handlePlusQty = () => {
    dispatch(changeQty({ productId: productId, qty: qty + 1 }));
  };

  const handleDeleteCart = () => {
    dispatch(deleteProductCart({ productId: productId }));
  };

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
          <small>{RupiahCurrency(product.price * qty)}</small>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <button
            className="w-5 h-5 rounded cursor-pointer bg-gray-600"
            onClick={handleMinusQty}
          >
            -
          </button>
          <small>{qty}</small>
          <button
            className="w-5 h-5 rounded cursor-pointer bg-gray-600"
            onClick={handlePlusQty}
          >
            +
          </button>
        </div>
      </div>
      <div className="self-end">
        <button
          className="cursor-pointer hover:text-red-500"
          onClick={handleDeleteCart}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
