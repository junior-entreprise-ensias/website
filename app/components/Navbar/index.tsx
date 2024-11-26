"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { navigationData } from "../../data/navigationData";
import NavbarSocialMedia from "./NavbarSocialMedia";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

const navigation = navigationData;

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-white/60 bg-white/60 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link aria-current="page" className="flex items-center" href="/">
              <Image
                src="/assets/logo/logo.png"
                width={40}
                height={40}
                alt="logo"
                className="h-7 w-auto"
              />
              <p className="sr-only">Website Title</p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                aria-current={item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <NavbarSocialMedia />
          </div>
          <div className="block lg:hidden">
            <Bars3Icon
              className="block h-6 w-6 text-cinnabar-600"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
