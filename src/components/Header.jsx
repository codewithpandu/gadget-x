import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sling as Hamburger } from "hamburger-react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleTab } from "../store/cart";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

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
          <div className="text-xl p-2 hover:bg-accent rounded-2xl cursor-pointer">
            <FaSearch />
          </div>
          <button
            className="text-xl p-2 hover:bg-accent rounded-2xl cursor-pointer"
            onClick={openCart}
          >
            <FaShoppingCart />
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
