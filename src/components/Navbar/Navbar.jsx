import React from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const Navbar = ({ hp, pr,ab }) => {
  const [Menu, setMenu] = useState(false);
    const navigate = useNavigate();
      const homepagenav = () => {
    navigate(`/`);

  };
  return (
    <div className="z-50 relative">
      <nav>
        <div className={`hidden md:flex h-18 items-center text-l gap-3 pl-15 pr-15 justify-between shadow ${hp || ab ? "bg-[#001433]" : "bg-[#F5F5F5]"}`}>
          <img className="cursor-pointer" src={hp || ab ? "Logo.png" : "LogoC.png"} width='13%' onClick={homepagenav}/>
          <div className={`flex gap-5 ${hp || ab ? "text-white" : "text-[#000000]"} font-[Impact] text-xl`}>
          <a className={`transition duration-200 p-2 rounded-md ${hp ? "text-[#19CEE4]" : " hover:text-[#19CEE4]"}`} href='/'>Home</a>
          <a className={`transition duration-200 p-2 rounded-md ${pr ? "text-[#19CEE4]" : " hover:text-[#19CEE4]"}`} href='/products'>See our products</a>
          <a className={`transition duration-200 p-2 rounded-md ${ab ? "text-[#19CEE4]" : " hover:text-[#19CEE4]"}`} href='/about'>About</a>
          </div>
          
        </div>
      </nav>

      <nav>
        <div className={`flex md:hidden h-18 items-center text-l gap-3 justify-between shadow ${hp || ab ? "bg-[#001433]" : "bg-[#F5F5F5]"}`}>
          <img src={hp || ab ? "Logo.png" : "LogoC.png"} width='50%' onClick={homepagenav}/>
          <a className={`mr-6 transition-transform duration-30 ${hp || ab ? "text-white" : "text-[#000000]"} ${Menu ? "rotate-90" : "rotate-0"}`} onClick={() => setMenu(!Menu)}><MenuIcon/></a>
        </div>
          <div className={`flex flex-col ${hp || ab ? "text-white" : "text-[#000000]"} ${hp || ab ? "bg-[#001433]" : "bg-[#F5F5F5]"} px-4 gap-2 font-[Impact] text-xl duration-300 ease-in-out overflow-hidden ${Menu ? "max-h-45 py-2" : "max-h-0 py-0"}`}>
            <a className={`p-2 rounded-md ${hp ? "text-[#19CEE4]" : "hover:text-[#19CEE4]"}`} href="/">Home</a>
            <a className={`p-2 rounded-md ${pr ? "text-[#19CEE4]" : "hover:text-[#19CEE4]"}`} href="/products">See our products</a>
            <a className={`p-2 rounded-md ${ab ? "text-[#19CEE4]" : "hover:text-[#19CEE4]"}`} href="/about">About</a>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
