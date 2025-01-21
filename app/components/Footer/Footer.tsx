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
      <div className="w-full pt-8">
        <div className="my-20 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 grid grid-cols-12 gap-y-10 gap-x-0 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start">
            <Image
              src="/assets/logo/logo_inverted.png"
              width={160}
              height={60}
              alt="logo"
              className="pb-8"
            />
            <div className="mb-5 lg:mb-0">
              <FooterSocialMedia />
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {data.map((item) => (
            <div
              key={item.id}
              className="group relative col-span-12 lg:col-span-2 flex flex-col items-center lg:items-start"
            >
              <ul>
                {item.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5 text-center lg:text-start">
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

          <div className="col-span-12 lg:col-span-4 flex flex-col items-center lg:items-start">
            <div className="flex gap-2">
              <FaMapMarkerAlt className="text-cinnabar-500 text-2xl" />
              <h5 className="text-base font-normal text-white">
                ENSIAS, Rabat, Morocco
              </h5>
            </div>
            <div className="flex gap-2 mt-5">
              <FaPhone className="text-cinnabar-500 text-2xl" />
              <Link
                href="tel:+212708301269"
                title="President"
                className="text-base font-normal text-white"
              >
                +212 7 08 30 12 69 (P)
              </Link>
            </div>
            <div className="flex gap-2 mt-5">
              <FaPhone className="text-cinnabar-500 text-2xl" />
              <Link
                href="tel:+212674984499"
                title="Vice President"
                className="text-base font-normal text-white"
              >
                +212 6 74 98 44 99 (VP)
              </Link>
            </div>
            <div className="flex gap-2 mt-5">
              <FaEnvelope className="text-cinnabar-500 text-2xl" />
              <h5 className="text-base font-normal text-white">
                ensias.je.media@gmail.com
              </h5>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}

        <div className="py-8 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:flex items-center justify-between border-t border-white/20">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            &copy; {year} Junior Entreprise ENSIAS.
          </h4>
          <h4 className="text-offwhite text-sm text-center mt-5 lg:mt-0 lg:text-start font-normal">
            Made with ❤️ by{" "}
            <Link href="https://ahmedidrissi.com" target="_blank">
              @ahmedidrissi
            </Link>
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
