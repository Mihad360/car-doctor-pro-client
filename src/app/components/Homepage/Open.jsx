import { FaEnvelopeOpenText, FaPhoneVolume } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Open = () => {
  return (
    <div className="pt-12 pb-20 ">
      <div className="flex items-center gap-20 justify-center max-w-7xl mx-auto bg-black bg-opacity-90 p-20 text-white rounded-xl">
        <div className="flex items-center gap-5">
          <div className="text-4xl">
            <FaEnvelopeOpenText />
          </div>
          <div>
            <h1>We are open monday-friday</h1>
            <p className="text-xl">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-4xl">
          <FaPhoneVolume />
          </div>
          <div>
            <h1>Have a question?</h1>
            <p className="text-xl">+8801621257820</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="text-4xl">
          <FaMapLocationDot />
          </div>
          <div>
            <h1>Need a repair? our address</h1>
            <p className="text-xl">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Open;
