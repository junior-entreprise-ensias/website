import BlurFade from "@/app/magicui/ui/blur-fade";
import { FaArrowRight, FaCheck, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <div className="mx-auto my-10 px-5 sm:px-20 py-5 sm:py-20">
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column */}
            <div className="col-span-6 lg:col-span-7">
              <div className="section-title relative pb-5 mb-10">
                <h5 className="text-2xl font-medium text-cinnabar-600 uppercase mb-2">
                  About Us
                </h5>
                <h1 className="text-4xl mb-0">The Best IT Solutions</h1>
              </div>
              <p className="font-normal text-lg text-black text-opacity-90 mb-5">
                ENSIAS Junior Entreprise is a technology organization that
                prides itself on a commitment to excellence and innovation. We
                believe in using the latest technologies to provide our clients
                with top-quality services and solutions. Our team of students is
                dedicated to staying up-to-date with the latest trends in the
                industry and constantly striving to improve our skills and
                knowledge. At ENSIAS Junior Entreprise, we value integrity,
                honesty, and transparency, and we believe in building
                long-lasting relationships with our clients based on trust and
                mutual respect.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-0 mb-3">
                <div className="col-span-6">
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-cinnabar-600 me-4" />
                    Best In Industry
                  </h5>
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-cinnabar-600 me-4" />
                    Passionate Team
                  </h5>
                </div>
                <div className="col-span-6">
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-cinnabar-600 me-4" />
                    24/7 Support
                  </h5>
                  <h5 className="mb-3 flex items-center text-xl">
                    <FaCheck className="text-cinnabar-600 me-4" />
                    Affordable Pricing
                  </h5>
                </div>
              </div>
              <div className="flex items-center mb-5">
                <div
                  className="w-[60px] h-[60px] bg-cinnabar-600 flex items-center justify-center rounded-lg"
                >
                  {/* <i className="fa fa-phone-alt text-white fa-lg"></i> */}
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
                <div className="ps-4">
                  <h5 className="text-lg">Call to ask any question</h5>
                  <h4 className="text-cinnabar-600 text-lg mb-0">
                    +212 600 00 00 00
                  </h4>
                </div>
              </div>
            </div>
            {/* Right column */}
            <div className="col-span-6 lg:col-span-5 min-h-[500px]">
              <div className="relative h-full">
                <Image
                  src="/assets/about/ensias.jpg"
                  alt="ensias"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg absolute  right-0"
                />
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default About;
