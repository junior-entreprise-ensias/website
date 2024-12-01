import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const FooterSocialMedia = () => {
  return (
    <div className="flex gap-4">
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-cinnabar-500 text-white rounded-full"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-cinnabar-500 text-white rounded-full"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.instagram.com/"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-cinnabar-500 text-white rounded-full"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default FooterSocialMedia;
