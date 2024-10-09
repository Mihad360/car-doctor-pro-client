/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { services } from "@/app/lib/services";


const Services = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-lg text-[#FF3811] font-semibold pb-3 text-center">Service</h1>
                <p className="text-4xl font-bold text-black pb-3 text-center">Our Service Area</p>
                <p className="pb-5 text-base text-center">the majority have suffered alteration in some form, by injected humour <br /> or randomised words which don't look even slightly believable. </p>
                <div className="flex justify-center pt-12 pb-12">
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                        {
                            services.map(service => <div key={service._id}><div className="card bg-base-100 w-96 shadow-xl">
                                <figure>
                                <Image className="h-72 w-full" width={200} height={250} src={service.img} alt="image"/>
                                </figure>
                                <div className="card-body">
                                  <h2 className="card-title text-2xl pb-3">
                                    {service.title}
                                  </h2>
                                  <div className="card-actions items-center flex justify-between">
                                    <div className="text-[#FF3811] font-semibold text-lg">Price: ${service.price}</div>
                                    <button className="text-[#FF3811] font-semibold text-2xl hover:bg-gray-200 p-2 rounded-lg"><FaArrowRightLong />
                                    </button>
                                  </div>
                                </div>
                              </div></div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;