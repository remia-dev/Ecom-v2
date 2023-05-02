/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// icons
import { BsPlus, BsEyeFill } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Destructure objects
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[250px] mb-4 relative overflow-hidden group transition">
        {/* image */}
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>

        {/* buttons */}
        <div className="absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(id, product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3x1" />
            </div>
          </button>

          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-gray-900 drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title */}
      <div>
        <div>
          <div className="text-sm capitalize text-gray-500 mb-1">
            {category}
          </div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
          <div className="font-semibold">$ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
