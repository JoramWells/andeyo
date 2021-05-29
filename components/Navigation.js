import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { XIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import PopOver from "../components/PopOver";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <>
        <nav className=" top-0 flex flex-wrap w-full p-5 justify-between text-md text-gray-700 bg-yellow-300 shadow-sm">
          <div className=" container flex flex-wrap space-x-4 items-center">
            <b className="link text-lg">
              <Link href="/">ANDEYO</Link>
            </b>
            <p className="link ">
              <Link href="/documentation">Developers</Link>
            </p>
            <p className="link">
              <Link href="/about">Pricing</Link>
            </p>
            <p className="link">
              <Link href="/about">Partners</Link>
            </p>
            <p>
                <PopOver />
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
          <div className="flex space-x-4 items-center ">
            <p className="link">
              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full  shadow-sm px-4 py-2  text-gray-700  focus:outline-none  ">
                        Register
                        <ChevronDownIcon
                          className="-mr-1  mt-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                          <form method="POST" action="#">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  type="submit"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block w-full text-left px-4 py-2 text-sm"
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </p>
          </div>
        </nav>
    </>
  );
}
