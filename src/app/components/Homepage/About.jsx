/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-40 pt-20 pb-40">
                <div className="relative">
                    <Image width={2000} height={1200} src="https://i.ibb.co.com/RDQk8gQ/person.jpg" alt="image"/>
                    <Image className="absolute w-80 h-72 left-72 top-40" width={500} height={500} src="https://i.ibb.co.com/dGC2YDJ/parts.jpg" alt="image"/>
                </div>
                <div>
                    <h1 className="text-lg text-[#FF3811] font-semibold pb-3">About Us</h1>
                    <h1 className="text-4xl font-bold text-black pb-3">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="pb-5 text-base ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;