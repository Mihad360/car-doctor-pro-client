"use client";
import Image from "next/image";
import Link from "next/link";
import SocialLogin from "../components/shared/SocialLogin";

const page = () => {
  const handleSignup = async (event) => {
    event.preventDefault();
    const newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(newUser)
    const resp = await fetch('http://localhost:3000/signup/api', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json"
      }
    })
    console.log(resp);
    if(resp.status === 200){
      event.target.reset()
    }
    
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-40 pt-12">
        <div>
          <Image
            width={350}
            height={350}
            src="https://i.ibb.co.com/yqYggXk/Access-control-system-2.png"
            alt="logo"
          />
        </div>
        <div className="border border-[#FF3811] rounded-lg p-8">
          <h1 className="text-center text-black text-2xl font-bold pb-3">
            Sign Up
          </h1>
          <p className="text-black text-base pb-5">
            Already have an Account?? Please{" "}
            <Link className="text-[#FF3811] font-semibold" href="/signin">
              SignIn...
            </Link>
          </p>
          <form onSubmit={handleSignup}>
            <div>
              <div className="pb-3">
                <div className="text-black font-medium pb-2">
                  <label htmlFor="">UserName</label>
                </div>
                <input
                  className="w-80 px-2 py-1 border-gray-400 rounded-lg border outline-none"
                  type="text"
                  name="username"
                  id=""
                  placeholder="Your Name"
                />
              </div>
              <div className="pb-3">
                <div className="text-black font-medium pb-2">
                  <label htmlFor="">Email</label>
                </div>
                <input
                  className="w-80 px-2 py-1 border-gray-400 rounded-lg border outline-none"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Your Email"
                />
              </div>
              <div className="pb-3">
                <div className="text-black font-medium pb-2">
                  <label htmlFor="">Password</label>
                </div>
                <input
                  className="w-80 px-2 py-1 border-gray-400 rounded-lg border outline-none"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                />
              </div>
              <div className="text-center pt-2">
                <input
                  className="border font-semibold py-2 px-5 border-[#FF3811] text-white bg-[#FF3811] hover:scale-110 duration-200 transition-all rounded-lg hover:cursor-pointer"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </div>
          </form>
          <p className="text-center text-sm py-2">Or sign Up with..</p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default page;
