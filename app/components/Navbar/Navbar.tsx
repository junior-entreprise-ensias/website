import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import { navigationData } from "../../data/navigationData";
import NavbarSocialMedia from "./NavbarSocialMedia";

const navigation = navigationData;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar absolute top-0 left-0 right-0 z-10">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            {/* LOGO AND NAVIGATION LINKS */}

            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/assets/logo/logo_inverted.png"
                  width={80}
                  height={80}
                  alt="logo"
                  className="block lg:hidden"
                />
                <Image
                  src="/assets/logo/logo_inverted.png"
                  width={80}
                  height={80}
                  alt="logo"
                  className="hidden lg:block"
                />
              </div>
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "hover:opacity-100"
                          : "hover:opacity-100",
                        "px-3 py-4 text-lg text-white font-normal opacity-90 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* SOCIAL MEDIA ICONS */}

            <div className="hidden lg:block">
              <NavbarSocialMedia />
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6 text-white"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
