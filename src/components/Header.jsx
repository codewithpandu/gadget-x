import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sling as Hamburger } from "hamburger-react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleTab } from "../store/cart";
import { useSelector } from "react-redux";

const Header = () => {
  const carts = useSelector((state) => state.cart.items);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  const totalChart = carts.reduce((acc, item) => acc + item.qty, 0);

  const openCart = () => {
    dispatch(toggleTab());
  };
  return (
    <header className="fixed w-full text-primary bg-foreign  border-b left-0 border-accent z-99">
      <div className="flex justify-between p-4 items-center max-w-7xl mx-auto">
        <div>
          <Link to="/" className="font-bold text-accent text-xl">
            GadgetX
          </Link>
        </div>

        <div>
          <Navbar toogle={isOpen} />
        </div>

        <div className="flex justify-center items-center">
          {/* <div className="text-xl p-2 hover:bg-accent rounded-2xl cursor-pointer">
            <FaSearch />
          </div> */}
          <button
            className="relative text-xl p-2 hover:bg-accent rounded-2xl cursor-pointer"
            onClick={openCart}
          >
            <FaShoppingCart />
            <small className="absolute -translate-y-2 text-xs bg-red-500 px-1.5 rounded-full">
              {totalChart}
            </small>
          </button>
          <div className="hover:bg-accent rounded-2xl block md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={18} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
