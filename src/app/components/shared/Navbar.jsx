"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

const Navbar = () => {
  const pathName = usePathname();
  const session = useSession();
  console.log(session, session.status);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-gray-200"
              >
                <div className="flex-col flex">
                  {links?.map((link) => (
                    <Link
                      className={`${
                        pathName === link.path ? "text-[#FF3811] font-bold" : ""
                      } text-lg hover:text-[#FF3811]`}
                      key={link.title}
                      href={link.path}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </ul>
            </div>
            <Link href={`/`}>
              <Image
                width={80}
                height={20}
                src="https://i.ibb.co.com/qRHmW3y/logo-removebg-preview.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="flex items-center gap-6">
                {links?.map((link) => (
                  <Link
                    className={`${
                      pathName === link.path ? "text-[#FF3811] font-bold" : ""
                    } text-lg hover:text-[#FF3811]`}
                    key={link.title}
                    href={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </ul>
          </div>
          <div className="navbar-end flex items-center gap-6">
            <button className="text-2xl">
              <LuShoppingBag />
            </button>
            <button className="text-2xl">
              <FaSearch />
            </button>
            {session.status === "unauthenticated" ? (
              <Link href="/signin">
                <button className="border font-semibold py-2 px-5 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">
                  Sign In
                </button>
              </Link>
            ) : (
                <button onClick={() => signOut()} className="border font-semibold py-2 px-5 border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:scale-110 duration-200 transition-all hover:text-white rounded-lg">
                  Log Out
                </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
