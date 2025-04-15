import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const FooterSocialMedia = () => {
  return (
    <div className="flex gap-3">
      <Link
        href="https://www.linkedin.com/company/je-ensias/"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 text-white rounded-full"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href="https://web.facebook.com/profile.php?id=61575353780407"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 text-white rounded-full"
      >
        <FaFacebookF />
      </Link>
      <Link
        href="https://www.instagram.com/junior.entreprise.ensias/"
        target="_blank"
        className="flex items-center justify-center text-xl p-3.5 bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 text-white rounded-full"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default FooterSocialMedia;
