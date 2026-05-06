import React, { useEffect, useState } from "react";
import { products } from "../products";
import { useParams } from "react-router-dom";
import RupiahCurrency from "../utils/RupiahCurrency";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = products.filter((product) => product.slug === slug);
    setDetail(getProduct[0]);
  }, [slug]);

  const addToCartHandler = () => {
    dispatch(addToCart({ productId: detail.id, qty: 1 }));
  };

  const product = products.find((product) => product.slug === slug);

  return (
    <section className="text-gray-600 body-font overflow-hidden md:mt-4">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={detail.name}
            className="lg:w-1/2 w-full h-130 object-cover object-center rounded"
            src={detail.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-accent tracking-widest">
              {detail.brand}
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {detail.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed text-white">{detail.description}</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 py-2">
              {detail?.specification?.map((spec, index) => (
                <li className="text-xs font-sans text-white" key={index}>
                  <FaCheckCircle className="inline me-1" />
                  {spec}
                </li>
              ))}
            </ul>
            <div className="flex mt-2">
              <span className="title-font font-medium text-2xl text-white">
                {RupiahCurrency(detail.price)}
              </span>
              <button
                className="flex font-sans  ml-auto text-background bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-accent/80 rounded cursor-pointer"
                onClick={addToCartHandler}
              >
                Chekout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
