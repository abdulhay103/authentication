"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isToggle, setIsToggole] = useState();

  const clickHandler = () => {
    setIsToggole(!isToggle);
  };
  return (
    <header className="w-full bg-white py-3 shadow px-5 lg:px-0">
      <div className="container mx-auto">
        <nav className=" flex justify-between">
          <div className=" w-16">
            <Link href="/" replace>Home</Link>
          </div>
          <div className=" lg:hidden">
            <button onClick={clickHandler}>
              {isToggle ? "Hide Menu" : "Show Menu"}
            </button>
          </div>
          <div className=" hidden lg:flex gap-6">
            <Link href="/login" replace>Login</Link>
            <Link href="/signup" replace>Signup</Link>
            <Link href="/dashboard">Dashboard</Link>
          </div>
        </nav>
        <div
          className={
            isToggle ? "flex flex-col lg:hidden gap-4 container pt-3" : "hidden"
          }
        >
          <Link href="/login" replace>Login</Link>
          <Link href="/signup" replace>Signup</Link>
          <Link href="/dashboard" replace>Dashboard</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;