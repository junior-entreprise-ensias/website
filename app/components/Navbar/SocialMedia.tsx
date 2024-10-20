// import icons from react-icons
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4 text-blue font-medium py-2 px-4">
      <a href="https://www.linkedin.com/">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/">
        <FaFacebook />
      </a>
      <a href="https://www.github.com/">
        <FaGithub />
      </a>
      <a href="https://www.twitter.com/">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
