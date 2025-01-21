"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationData } from "../../data/navigationData";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";


const navigation = navigationData;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state based on scroll position
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        `fixed inset-x-0 top-0 left-0 right-0 z-30 w-full` +
        ` ${
          isScrolled || isOpen
            ? "bg-white border-b border-black/20 text-black"
            : "bg-transparent border-b border-white/20 text-white"
        }`
      }
    >
      <div className="flex items-center justify-between px-5">
        <div
          className={
            `flex items-center border-0 md:border-r pr-5 py-4` +
            ` ${isScrolled ? "border-black/20" : "border-white/20"}`
          }
        >
          <Link aria-current="page" className="flex items-center" href="/">
            <Image
              src={
                isScrolled
                  ? "/assets/logo/logo.png"
                  : "/assets/logo/logo_inverted.png"
              }
              width={65}
              height={65}
              alt="logo"
              className="h-10 w-auto"
            />
            <p className="sr-only">Home</p>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="inline-block rounded-lg px-2 py-1 text-sm text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
              aria-current={item.href ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div
          className={
            `hidden lg:block border-l pl-5 py-5` +
            ` ${isScrolled ? "border-black/20" : "border-white/20"}`
          }
        >
          <div className="flex gap-2">
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className={
                `flex items-center justify-center w-8 h-8 text-white rounded-full` +
                ` ${isScrolled ? "bg-gradient-to-r from-cinnabar-950 to-cinnabar-500" : "bg-transparent"}`
              }
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className={
                `flex items-center justify-center w-8 h-8 text-white rounded-full` +
                ` ${isScrolled ? "bg-gradient-to-r from-cinnabar-950 to-cinnabar-500" : "bg-transparent"}`
              }
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className={
                `flex items-center justify-center w-8 h-8 text-white rounded-full` +
                ` ${isScrolled ? "bg-gradient-to-r from-cinnabar-950 to-cinnabar-500" : "bg-transparent"}`
              }
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <div
          className={
            `block lg:hidden border-l pl-5 py-6` +
            ` ${isScrolled ? "border-black/20" : "border-white/20"}`
          }
        >
          <Bars3Icon
            className="block h-6 w-6"
            aria-hidden="true"
            onClick={() => setIsOpen(true)}
          />
        </div>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <Drawerdata />
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar;
