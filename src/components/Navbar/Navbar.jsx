import React from "react";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ hp, pr }) => {
  const [Menu, setMenu] = useState(false);
 
  return (
    <>
      <nav>
        <div className="hidden md:flex h-18 bg-white items-center text-l gap-3 pl-15 justify-between shadow">
          <div className="flex gap-5">
          <a className={`transition duration-200 p-2 rounded-md ${hp ? "bg-[#eff6ff] text-[#1447e6]" : "hover:bg-[#eff6ff] hover:text-[#1447e6]"}`} href='/'>Home</a>
          <a className={`transition duration-200 p-2 rounded-md ${pr ? "bg-[#eff6ff] text-[#1447e6]" : "hover:bg-[#eff6ff] hover:text-[#1447e6]"}`} href='/products'>See our products</a>
          </div>
          <div className="pr-15 font-bold">React Collaborative Project</div>
        </div>
      </nav>

      <nav>
        <div className="flex md:hidden h-18 bg-white items-center text-l gap-3 justify-between shadow">
          <a className={`ml-4 transition-transform duration-300 ${Menu ? "rotate-90" : "rotate-0"}`} onClick={() => setMenu(!Menu)}><MenuIcon/></a>
          <div className="text-center pr-5">React Collaborative Project</div>
        </div>
        {Menu ? 
          <div className="flex flex-col bg-white px-4 pt-2 pb-2 gap-2" >
            <a className={`p-2 rounded-md ${hp ? "bg-[#eff6ff] text-[#1447e6]" : "hover:bg-[#eff6ff] hover:text-[#1447e6]"}`} href="/">Home</a>
            <a className={`p-2 rounded-md ${pr ? "bg-[#eff6ff] text-[#1447e6]" : "hover:bg-[#eff6ff] hover:text-[#1447e6]"}`} href="/products">See our products</a>
          </div>: <></>}
      </nav>

    </>
  );
};

export default Navbar;
