import BlurFade from "@/app/magicui/ui/blur-fade";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { servicesData } from "../../data/servicesData";

const services = servicesData;

const Services = () => {
  return (
    <div id="services">
      <div className="mx-auto px-5 sm:px-24 py-20">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-4">
            {/* COLUMN-1 */}
            <div className="col-span-6 flex flex-col justify-center">
              <div className="section-title relative pb-5 mb-10">
                <h5 className="text-xl md:text-2xl text-center md:text-start font-medium text-cinnabar-800 uppercase mb-2">
                  Our Services
                </h5>
                <h1 className="text-2xl md:text-4xl text-center md:text-start mb-0">
                  Custom IT Solutions for Your Successful Business
                </h1>
              </div>
              <p className="font-normal text-lg text-black text-opacity-90 mb-5">
                At Junior Entreprise ENSIAS, we deliver innovative, tailored
                solutions to help your business grow. From software development
                to data analysis, our skilled team is dedicated to meeting your
                unique needs and ensuring top-quality results.
              </p>
              {/* <Link
                href={"/"}
                className="mt-4 text-xl font-medium text-cinnabar-600 flex gap-2 mx-auto lg:mx-0 space-links"
              >
                Learn more{" "}
                <FaArrowRight className="text-2xl text-cinnabar-600" />
              </Link> */}
            </div>

            {/* COLUMN-2 */}
            <div className="col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 rounded-3xl">
                {services.map((item, i) => (
                  <div key={i} className="bg-white rounded-3xl p-6 shadow-xl">
                    <div className="mb-5">{item.icon}</div>
                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                    <h4 className="text-lg font-normal text-black text-opacity-90 my-2">
                      {item.paragraph}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Services;
