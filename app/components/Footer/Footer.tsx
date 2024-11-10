import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/app/data/footerData";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FooterSocialMedia from "./FooterSocialMedia";

const data = footerData;
const year = new Date().getFullYear();

const footer = () => {
  return (
    <div className="bg-black opacity-90 mt-40">
      <div className="mx-auto max-w-2xl pt-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-0 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-12 md:col-span-12 lg:col-span-4">
            <Image
              src="/assets/logo/logo_inverted.png"
              width={160}
              height={60}
              alt="logo"
              className="pb-8"
            />
            <FooterSocialMedia />
          </div>

          {/* CLOUMN-2/3 */}

          {data.map((item) => (
            <div
              key={item.id}
              className="group relative col-span-12 md:col-span-4 lg:col-span-2"
            >
              <ul>
                {item.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white text-sm font-normal mb-6 space-links"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-12 md:col-span-4 lg:col-span-4">
            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-cinnabar-500 text-2xl" />
              <h5 className="text-base font-normal text-white">
                ENSIAS, Rabat, Morocco
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <FaPhone className="text-cinnabar-500 text-2xl" />
              <h5 className="text-base font-normal text-white">
                + 212 6 00 00 00 00
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <FaEnvelope className="text-cinnabar-500 text-2xl" />
              <h5 className="text-base font-normal text-white">
                ensias.je@gmail.com
              </h5>
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 lg:flex items-center justify-between border-t border-t-bordertop">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            &copy; {year} ENSIAS Junior Entreprise.
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Privacy policy
              </Link>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-offwhite text-sm font-normal">
              <Link href="/" target="_blank">
                Terms & conditions
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
