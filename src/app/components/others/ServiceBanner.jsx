import Image from "next/image";
import React from "react";

const ServiceBanner = ({ service ,title}) => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="relative pb-10 h-[450px]">
      <Image
        width={800}
        height={800}
        src={service}
        alt="Service Image"
        className="rounded-lg w-full h-full object-cover" // Ensures the image covers the container
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold bg-black bg-opacity-60 p-4 rounded">
          {title}
        </h1>
      </div>
    </div>
    </div>
  );
};

export default ServiceBanner;
