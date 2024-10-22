import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { servicesData } from "../../data/servicesData";

const services = servicesData;

const Services = () => {
  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 lg:col-span-5 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                Our services
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-black text-opacity-50">
                At ENSIAS Junior Entreprise, we deliver innovative, tailored
                solutions to help your business grow. From software development
                to data analysis, our skilled team is dedicated to meeting your
                unique needs and ensuring top-quality results.
              </h4>
              <Link
                href={"/"}
                className="mt-4 text-xl font-medium text-cinnabar-600 flex gap-2 mx-auto lg:mx-0 space-links"
              >
                Learn more{" "}
                <FaArrowRight className="text-2xl text-cinnabar-600" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-redbg rounded-3xl">
              {services.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                >
                  <div className="mb-5">{item.icon}</div>
                  <h4 className="text-2xl font-semibold">{item.country}</h4>
                  <h4 className="text-lg font-normal text-black text-opacity-50 my-2">
                    {item.paragraph}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
