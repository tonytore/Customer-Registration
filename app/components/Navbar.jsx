"use client";

import React from "react";
import { IoIosMenu, IoIosNotificationsOutline } from "react-icons/io";
import { IoPartlySunnyOutline, IoSunnyOutline } from "react-icons/io5";
import profile from "../../public/profile.jpg";
import Image from "next/image";
import ThemeSwitcherBtn from './ui/ThemeSwitcherBtn'
import Link from "next/link";




const Navbar = ({ showSideBar, setShowSideBar }) => {
  return (
    <div className="w-full pr-[400px] mx-auto h-20 text-green  dark:text-slate-50 bg-slate-50 dark:bg-slate-800 fixed flex justify-between items-center">
      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className="text-green-600 cursor-pointer  sm:pr-[100px] text-2xl pl-3"
      >
        <IoIosMenu />
      </button>
     
      <div className="flex  space-x-5 items-center cursor-pointer">
        
      <ThemeSwitcherBtn/>
        
        <Link href='/cart' className="relative text-green-600 text-2xl">
          <IoIosNotificationsOutline className="w-[32px] h-[32px]" />
          <div className="absolute -top-2 pt-1 -left-2 w-6 h-6 rounded-full bg-red-500 text-sm text-white text-center">20</div>
        </Link>

      
            <Image
              className="w-9 h-9 rounded-full"
              src={profile}
              alt="profile"
            />
           
         
      </div>
    </div>
  );
};

export default Navbar;
