import ServiceBanner from "@/app/components/others/ServiceBanner";
import { getServicesDetails } from "@/app/lib/getServices";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Service Details",
  description: 'Service details page'
}

const page = async ({ params }) => {
  const service = await getServicesDetails(params.id); // Assuming this returns a single service object

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        <ServiceBanner service={service.img} title={service.title}></ServiceBanner>
        <div className="bg-white shadow-lg rounded-lg mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center">
              <Image
                width={500}
                height={500}
                src={service.img}
                alt="Service Image"
                className="rounded-lg w-full" // Optional: Add a class for rounded corners
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-600 mt-2 mb-2">${service.price}</p>
                <Link href="">
                <button
                  className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-105 duration-200 transition-all rounded-lg hover:cursor-pointer w-full">CheckOut</button></Link>
                <p className="text-sm text-gray-500 mt-4">
                  {service.description}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mt-4">
                  Facilities:
                </h3>
                <ul className="mt-2 space-y-2">
                  {service.facility.map((facility, index) => (
                   <div key={facility.details}>
                     <div className="flex gap-3">
                      <p>{index + 1}</p>
                      <div>
                      <h1 className="text-lg font-semibold text-black">{facility.name}</h1>
                      <p className="text-black">{facility.details}</p>
                      </div>
                     </div>
                   </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
