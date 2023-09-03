import Link from "next/link";
import { useRouter } from "next/router";
import { BsStars } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import React, { useEffect, useState } from "react";
import { AppLogo } from "./logo";
import { SubHeaderText } from "./texts";
import { twMerge } from "tailwind-merge";

const AuthHeader = ({ currentUser }) => {
  const { pathname } = useRouter();
  const handleSignOut = (e) => {
    e.preventDefault();
  };

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 70) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "w-full sticky top-0 z-30 backdrop-filter backdrop-blur-lg trasition ease-in-out duration-500",
        animateHeader && "shadow-lg shadow-blue-100/30 bg-white/50"
      )}
    >
      <div
        className={twMerge(
          "flex justify-between h-24 w-full max-w-7xl mx-auto trasition ease-in-out duration-500",
          animateHeader && "h-20"
        )}
      >
        <div className="flex justify-center items-center cursor-pointer m-5">
          <Link href="/">
            <AppLogo />
          </Link>
        </div>
        <nav className="flex justify-center items-center m-5">
          {pathname === "/auth/login" && (
            <Link href={"/auth/register"} className="font-medium">
              Create an Account
            </Link>
          )}
          {pathname === "/auth/register" && (
            <Link href={"/auth/login"} className="font-medium">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default AuthHeader;