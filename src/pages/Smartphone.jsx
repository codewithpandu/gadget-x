import React from "react";
import coverHeader from "../assets/img/product/iphone-11.jpg";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ui/Card";
import { products } from "../products";

const Smartphone = () => {
  const totalProduct = products.filter(
    (product) => product.category === "smartphone",
  );
  return (
    <section className="container mx-auto">
      <div className="relative w-full h-60 md:h-80 overflow-hidden">
        <img
          src={coverHeader}
          alt="smartphone"
          className="object-[10%] object-cover size-full"
        />
        <div className="absolute bg-linear-to-t from-background to-background/10 inset-0 z-10"></div>
        <div className="absolute z-20 top-0 inset-0 translate-y-1/3 md:translate-y-32 p-4">
          <Link
            to="/"
            className="flex text-gray-300 w-fit hover:text-white items-center gap-2"
          >
            <FaLongArrowAltLeft />
            Kembali
          </Link>
          <h3 className="text-3xl font-bold">Smartphone</h3>
          <p className="text-xs mt-2 md:w-1/2 text-gray-300">
            Temukan smartphone terbaik dengan teknologi terkini, kamera canggih,
            dan performa tanpa batas.
          </p>
        </div>
      </div>

      <div>
        <p>Menampilkan {totalProduct.length} Produk</p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => {
            if (product.category === "smartphone") {
              return <ProductCard key={product.id} data={product} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Smartphone;
