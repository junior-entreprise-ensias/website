import React from "react";
import Link from "next/link";
import { navigationData } from "../../data/navigationData";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const navigation = navigationData;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Data = () => {
  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "text-black hover:opacity-100"
                    : "hover:text-black hover:opacity-100",
                  "px-2 py-1 text-lg font-normal opacity-75 block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            <div className="p-2">
              <div className="flex gap-2">
                <Link
                  href="https://www.linkedin.com/company/je-ensias/"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 text-white bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 rounded-full"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://web.facebook.com/profile.php?id=61575353780407"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 text-white bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 rounded-full"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.instagram.com/junior.entreprise.ensias/"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 text-white bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 rounded-full"
                >
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
