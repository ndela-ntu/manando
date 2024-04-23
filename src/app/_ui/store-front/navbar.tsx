"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { IoMdClose, IoMdSunny } from "react-icons/io";
import CartIcon from "./cart-icon";

type Props = {};

const Navbar = (props: Props) => {
  const [dark, setDark] = useState(false);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="">
      <ul className="flex justify-end">
        <li className="px-5">
          <Link href="">
            <CartIcon itemCount={5} />
          </Link>
        </li>
        <li className="px-5">
          <Link href="">Sign In</Link>
        </li>
        <li className="px-5">
          <Link href="/dashboard">Sign in as Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
