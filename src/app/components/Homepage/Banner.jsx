"use client"
import { useState, useEffect } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 6 ? 1 : prevSlide + 1));
    }, 4000); // Auto-move every 7 seconds for slower transition

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="carousel w-full h-[700px]">
        <div
          id="slide1"
          className={`carousel-item relative banner w-full  transition-all duration-1000 ease-in-out ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
        >
            <div className="mt-40 ml-40 bg-gray-800 bg-opacity-30 p-5 w-[500px] rounded-lg">
                <h1 className="text-5xl text-white font-semibold pb-3">Affordable Price <br /> For Car Servicing</h1>
                <p className='text-lg text-white pb-5'>There are many variations of passages of  available <br /> but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-6">
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg">Discover More</button>
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">Latest Project</button>
                </div>
            </div>
          <div className="absolute left-5 right-40 top-[500px] flex -translate-y-1/2 transform justify-end gap-5">
            <a
              href="#slide6"
              className="btn btn-lg btn-circle bg-gray-500"
              onClick={() => setCurrentSlide(6)}
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-lg btn-circle bg-[#FF3811]"
              onClick={() => setCurrentSlide(2)}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className={`carousel-item relative w-full banner2 transition-all duration-1000 ease-in-out ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
        >
            <div className="mt-40 ml-40 bg-gray-800 bg-opacity-30 p-5 w-[500px] rounded-lg">
                <h1 className="text-5xl text-white font-semibold pb-3">Affordable Price <br /> For Car Servicing</h1>
                <p className='text-lg text-white pb-5'>There are many variations of passages of  available <br /> but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-6">
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg">Discover More</button>
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">Latest Project</button>
                </div>
            </div>
          <div className="absolute left-5 right-40 top-[500px] flex -translate-y-1/2 transform justify-end gap-5">
            <a
              href="#slide1"
              className="btn btn-lg btn-circle bg-gray-500"
              onClick={() => setCurrentSlide(1)}
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-lg btn-circle bg-[#FF3811]"
              onClick={() => setCurrentSlide(3)}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className={`carousel-item relative w-full banner3 transition-all duration-1000 ease-in-out ${
            currentSlide === 3 ? "block" : "hidden"
          }`}
        >
            <div className="mt-40 ml-40 bg-gray-800 bg-opacity-30 p-5 w-[500px] rounded-lg">
                <h1 className="text-5xl text-white font-semibold pb-3">Affordable Price <br /> For Car Servicing</h1>
                <p className='text-lg text-white pb-5'>There are many variations of passages of  available <br /> but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-6">
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg">Discover More</button>
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">Latest Project</button>
                </div>
            </div>
          <div className="absolute left-5 right-40 top-[500px] flex -translate-y-1/2 transform justify-end gap-5">
            <a
              href="#slide2"
              className="btn btn-lg btn-circle bg-gray-500"
              onClick={() => setCurrentSlide(2)}
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-lg btn-circle bg-[#FF3811]"
              onClick={() => setCurrentSlide(4)}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className={`carousel-item relative w-full banner4 transition-all duration-1000 ease-in-out ${
            currentSlide === 4 ? "block" : "hidden"
          }`}
        >
            <div className="mt-40 ml-40 bg-gray-800 bg-opacity-30 p-5 w-[500px] rounded-lg">
                <h1 className="text-5xl text-white font-semibold pb-3">Affordable Price <br /> For Car Servicing</h1>
                <p className='text-lg text-white pb-5'>There are many variations of passages of  available <br /> but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-6">
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg">Discover More</button>
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">Latest Project</button>
                </div>
            </div>
          <div className="absolute left-5 right-40 top-[500px] flex -translate-y-1/2 transform justify-end gap-5">
            <a
              href="#slide3"
              className="btn btn-lg btn-circle bg-gray-500"
              onClick={() => setCurrentSlide(3)}
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-lg btn-circle bg-[#FF3811]"
              onClick={() => setCurrentSlide(5)}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className={`carousel-item relative w-full banner5 transition-all duration-1000 ease-in-out ${
            currentSlide === 5 ? "block" : "hidden"
          }`}
        >
            <div className="mt-40 ml-40 bg-gray-800 bg-opacity-30 p-5 w-[500px] rounded-lg">
                <h1 className="text-5xl text-white font-semibold pb-3">Affordable Price <br /> For Car Servicing</h1>
                <p className='text-lg text-white pb-5'>There are many variations of passages of  available <br /> but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-6">
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg">Discover More</button>
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">Latest Project</button>
                </div>
            </div>
          <div className="absolute left-5 right-40 top-[500px] flex -translate-y-1/2 transform justify-end gap-5">
            <a
              href="#slide4"
              className="btn btn-lg btn-circle bg-gray-500"
              onClick={() => setCurrentSlide(4)}
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-lg btn-circle bg-[#FF3811]"
              onClick={() => setCurrentSlide(6)}
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide6"
          className={`carousel-item relative w-full banner6 transition-all duration-1000 ease-in-out ${
            currentSlide === 6 ? "block" : "hidden"
          }`}
        >
            <div className="mt-40 ml-40 bg-gray-800 bg-opacity-30 p-5 w-[500px] rounded-lg">
                <h1 className="text-5xl text-white font-semibold pb-3">Affordable Price <br /> For Car Servicing</h1>
                <p className='text-lg text-white pb-5'>There are many variations of passages of  available <br /> but the majority have suffered alteration in some form</p>
                <div className="flex items-center gap-6">
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg">Discover More</button>
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">Latest Project</button>
                </div>
            </div>
          <div className="absolute left-5 right-40 top-[500px] flex -translate-y-1/2 transform justify-end gap-5">
            <a
              href="#slide5"
              className="btn btn-lg btn-circle bg-gray-500"
              onClick={() => setCurrentSlide(5)}
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-lg btn-circle bg-[#FF3811]"
              onClick={() => setCurrentSlide(1)}
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
