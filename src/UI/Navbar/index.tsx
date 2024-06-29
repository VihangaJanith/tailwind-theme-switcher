"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "../../app/context/ThemeContext";

import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Navbar: React.FC = () => {
  // const color_theme = 'theme-green'
  const { theme, setTheme } = useTheme();
  return (
    <nav className={twMerge(clsx("bg-skin-primary shadow-md", theme))}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a className="text-xl font-bold text-skin-base" href="#">
                Logo
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/home">
                <p className="text-skin-base inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300">
                  Home
                </p>
              </Link>
              <Link href="/about">
                <p className="text-skin-base inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300">
                  About
                </p>
              </Link>
              <Link href="/contact">
                <p className="text-skin-base inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-gray-300">
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex md:space-x-4">
              <p className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200">
                Sign In
              </p>
              <p className="px-3 py-2 rounded-md text-sm font-medium text-white bg-skin-btn hover:bg-skin-btn-hover">
                Sign Up
              </p>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
