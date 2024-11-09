import BlurFade from "@/app/magicui/ui/blur-fade";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { whyData } from "../../data/whyData";

const why = whyData;

const Why = () => {
  return (
    <div id="why">
      <div className="mx-auto my-10 px-5 sm:px-20 py-5 sm:py-20">
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* COLUMN-1 */}
            <div className="lg:-ml-64 hidden lg:block">
              <Image
                src="/assets/why/iPad.png"
                alt="iPad-image"
                width={4000}
                height={900}
              />
            </div>

            {/* COLUMN-2 */}
            <div>
              <div className="section-title relative pb-5 mb-10">
                <h5 className="text-2xl font-medium text-cinnabar-600 uppercase mb-2">
                  Why Choose Us?
                </h5>
                <h1 className="text-4xl mb-0">We Are Here to Grow Your Business Exponentially</h1>
              </div>
              <p className="font-normal text-lg text-black text-opacity-90 mb-5">
                We are here to grow your business exponentially. We provide the
                best services to our clients.
              </p>
              <div className="mt-10 px-4 lg:px-0">
                {why.map((items, i) => (
                  <div className="flex mt-4" key={i}>
                    <FaCheck className="text-4xl text-cinnabar-500" />
                    <div className="ml-5">
                      <h4 className="text-2xl font-semibold">
                        {items.heading}
                      </h4>
                      <h5 className="text-lg text-black text-opacity-90 font-normal mt-2">
                        {items.subheading}
                      </h5>
                    </div>
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

export default Why;
