import React from "react";
import Link from "next/link";
import { XIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";

export default function Navigation() {
  return (
    <header className="flex w-full p-5 justify-between text-md text-gray-700 bg-yellow-400">
      <div className="flex space-x-4 items-center">
        <b className="link">
          <Link href="/">Andeyo</Link>
        </b>
        <p className="link">
          <Link href="/documentation">Developers</Link>
        </p>
        <p className="link">
          <Link href="/about">Pricing</Link>
        </p>
        <p className="link">
          <Link href="/about">Products</Link>
        </p>
      </div>
      <div>
        <form>
          <div className="flex flex-row w-full max-w-md rounded-full bg-yellow-200 items-center p-1 sm:max-w-xl lg:max-w-2xl">
            <SearchIcon className="h-5 text-gray-500 hover:cursor-pointer m-1" />

            <input
              placeholder="Search..."
              className="border-none focus:outline-none flex-grow bg-yellow-200 rounded-full p-1 text-sm text-gray-700"
            />
            <XIcon className="h-5 text-gray-500 m-1 hover:cursor-pointer" />
          </div>
        </form>
      </div>
      {/* right */}
      <div className="flex space-x-4 items-center">
        <p>
          <Link href="/contact">Contact us</Link>
        </p>
        <p className="link">Register</p>
      </div>
    </header>
  );
}

