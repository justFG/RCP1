import React from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ hp, pr,ab }) => {
  const [Menu, setMenu] = useState(false);
 
  return (
    <>
      <nav>
        <div className="hidden md:flex h-18 bg-[#001433] items-center text-l gap-3 pl-15 pr-15 justify-between shadow ">
          <img src="Logo.png" width='13%'/>
          <div className="flex gap-5 text-white font-[Impact] text-xl">
          <a className={`transition duration-200 p-2 rounded-md ${hp ? "text-[#19CEE4]" : " hover:text-[#19CEE4]"}`} href='/'>Home</a>
          <a className={`transition duration-200 p-2 rounded-md ${pr ? "text-[#19CEE4]" : " hover:text-[#19CEE4]"}`} href='/products'>See our products</a>
          <a className={`transition duration-200 p-2 rounded-md ${ab ? "text-[#19CEE4]" : " hover:text-[#19CEE4]"}`} href='/products'>About</a>
          </div>
          
        </div>
      </nav>

      <nav>
        <div className="flex md:hidden h-18 bg-[#001433] items-center text-l gap-3 justify-between shadow">
          <img src="Logo.png" width='50%'/>
          <a className={`mr-6 transition-transform duration-300 text-white ${Menu ? "rotate-90" : "rotate-0"}`} onClick={() => setMenu(!Menu)}><MenuIcon/></a>
        </div>
          <div className={`flex flex-col text-white bg-[#001433] px-4 gap-2 font-[Impact] text-xl duration-300 ease-in-out overflow-hidden ${Menu ? "max-h-45 py-2" : "max-h-0 py-0"}`}>
            <a className={`p-2 rounded-md ${hp ? "text-[#19CEE4]" : "hover:text-[#19CEE4]"}`} href="/">Home</a>
            <a className={`p-2 rounded-md ${pr ? "text-[#19CEE4]" : "hover:text-[#19CEE4]"}`} href="/products">See our products</a>
            <a className={`p-2 rounded-md ${ab ? "text-[#19CEE4]" : "hover:text-[#19CEE4]"}`} href="/about">About</a>
          </div>
      </nav>

    </>
  );
};

export default Navbar;
