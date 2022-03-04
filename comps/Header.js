import React from "react";
import Image from "next/image";
import {GlobeAltIcon, MenuAlt1Icon, MenuIcon, SearchIcon, UserCircleIcon} from "@heroicons/react/solid"

export default function Header() {
  return (
    <header className="sticky top-0 z-5 grid grid-cols-2 bg-white shadow-md p-5 md:px-10 ">
      <div className="relative flex items-center h-10 w-30 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" 
        alt="logo"
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        />
      </div>
      {/* <div className="flex items-center md:border-2 rounded-full py-1">
          <input className="w-20 md:flex-grow pl-5 bg-transparent outline-none text-gray-500 placeholder-gray-300" type="text" placeholder="Search Place" />
          <SearchIcon className="hidden md:inline-flex  mr-1 h-9 bg-red-400 rounded-full p-2 text-white cursor-pointer right-0"/>
      </div> */}
      <div className="flex items-center justify-end ">
            <GlobeAltIcon className="h-8 text-red-400"/>
        <div className="flex rounded-full bg-red-400 py-1 px-2">
            <MenuIcon className="h-8 text-white"/>
            <UserCircleIcon className="h-8 text-white"/>
        </div>
        
      </div>
    </header>
  );
}
