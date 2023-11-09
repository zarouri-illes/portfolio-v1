"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "./const";
import { HiMenu } from "react-icons/hi"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsSticky(true)
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, [])
    return (
        <header className="w-full fixed top-0 left-0 right-0">
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top- right-0 left-0bg-white" : ""}`}>

                <div className="flex items-center justify-between">
                    <div className="cursor-pointer">
                        <h1 className=" text-body text-xl font-extrabold">Zarouri Illes.</h1>
                    </div>

                    <div className="lg:flex items-center gap-3 hidden text-body">
                        {nav.map((item) => (<Link href={item.link} className="block py-2 px-4 cursor-pointer text-lg font-semibold hover:opacity-60 hover:text-body transition-all duration-300">{item.name}</Link>))}
                    </div>

                    <div className="lg:block hidden">
                        <button className="px-4 py-2 font-semibold bg-transparent border border-primary text-primary rounded-[30px] hover:bg-primary hover:text-white transition-all duration-300">Contact</button>
                    </div>

                    <div onClick={toggleMenu} className="lg:hidden text-body text-3xl">
                        <HiMenu/>
                    </div>
                </div>

                {
                    isMenuOpen && <div className="mt-4 bg-primary rounded-lg text-white p-4">
                        {nav.map((item) => (<Link href={item.link} className="block py-2 px-4 cursor-pointer text-lg hover:opacity-60 transition-all duration-300">{item.name}</Link>))}
                    </div>
                }

            </nav>
        </header>
    );
  };

  export default Navbar;