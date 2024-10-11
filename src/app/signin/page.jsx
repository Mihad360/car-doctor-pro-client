/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import SocialLogin from "../components/shared/SocialLogin";

const page = () => {

  const router = useRouter()

  const handleLogin =async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const resp = await signIn('credentials',{
      email, password,redirect : false
    });
    console.log(resp);
    if(resp.status === 200){
      router.push('/')
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
            Sign In
          </h1>
          <p className="text-black text-base pb-5">
            Don't have an Account?? Please{" "}
            <Link className="text-[#FF3811] font-semibold" href="/signup">
              SignUp...
            </Link>
          </p>
          <form onSubmit={handleLogin}>
            <div>
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
                  value="Sign In"
                />
              </div>
            </div>
          </form>
          <p className="text-center text-sm py-2">Or sign in with..</p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default page;
