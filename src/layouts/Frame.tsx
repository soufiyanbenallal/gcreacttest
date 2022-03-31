import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, CogIcon, CreditCardIcon, KeyIcon, MenuIcon, UserCircleIcon, ViewGridAddIcon, XIcon } from "@heroicons/react/outline";
import HeaderPage from "../components/HeaderPage";

const navigation = [{ name: "Dashboard", href: "#", current: true }];
const userNavigation = [
  { name: "Welcome to my app", href: "#" },
  { name: "Settings", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Frame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Disclosure as="div" className="relative bg-sky-700 pb-32 ">
        {({ open }) => (
          <>
            <nav
              className={classNames(
                open ? "bg-sky-900" : "bg-transparent",
                "relative z-10 border-b border-teal-500 border-opacity-25 lg:bg-transparent lg:border-none",
              )}
            >
              <div className="max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-sky-800">
                  <div className="px-2 flex items-center lg:px-0">
                    <div className="flex-shrink-0 font-bold text-lg text-white">WEATHER APP</div>
                    <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                      <div className="flex">
                        {navigation.map(item => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? "bg-black bg-opacity-25" : "hover:bg-sky-800",
                              "rounded-md py-2 px-3 text-sm font-medium text-white",
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="p-2 rounded-md inline-flex items-center justify-center text-sky-200 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:block lg:ml-4">
                    <div className="flex items-center">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative flex-shrink-0 ml-4">
                        <div>
                          <Menu.Button className="rounded-full flex text-sm text-white focus:outline-none focus:bg-sky-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-900 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <h2 className="flex-shrink-0 flex items-center px-4">Welcome</h2>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map(item => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(active ? "bg-gray-100" : "", "block py-2 px-4 text-sm text-gray-700")}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="bg-sky-900 lg:hidden">
                <div className="pt-2 pb-3 px-2 space-y-1">
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-black bg-opacity-25" : "hover:bg-sky-800",
                        "block rounded-md py-2 px-3 text-base font-medium text-white",
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-sky-800">
                  <h2 className="flex-shrink-0 flex items-center px-4">Welcome</h2>
                  <div className="mt-3 px-2">
                    {userNavigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-sky-200 hover:text-white hover:bg-sky-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </nav>
            <HeaderPage open={open} />
          </>
        )}
      </Disclosure>

      {children}
    </>
  );
}
