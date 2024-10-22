import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { whyData } from "../../data/whyData";

const why = whyData;

const Why = () => {
    return (
        <div id="why">

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src="/assets/why/iPad.png" alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why choose us?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-black text-opacity-50 lg:text-start">
                        We are here to grow your business exponentially. We provide the best services to our clients.
                        </h4>
                        <div className="mt-10 px-4 lg:px-0">
                            {why.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <FaCheck className="text-4xl text-cinnabar-500" />
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-black text-opacity-50 font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
