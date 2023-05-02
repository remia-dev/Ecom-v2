import { useContext, useEffect, useState } from "react";
// Icons
import { BsBag } from "react-icons/bs";

import { CartContext } from "../contexts/CartContext";
import {SidebarContext} from '../contexts/SidebarContext';
import { Link } from "react-router-dom";

import { BsShop } from "react-icons/bs";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(true);

  const { isOpen, setIsOpen }= useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <BsShop className="md: ml-12 text-[40px]" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative md: mr-12"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
