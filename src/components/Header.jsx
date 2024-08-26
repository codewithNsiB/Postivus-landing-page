
import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Button,
  
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Us", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Use Cases", href: "#", current: false },
  { name: "Prices", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <div className="mx-auto">
      <Disclosure as="nav" className="bg-gray-800 fixed w-full z-10">
        <div className="flex justify-between items-center mt-2 ml-24 px-6 max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center flex-shrink-0  mt-2">
            
            <div className="flex gap-1 items-center justify-between">
              <img
                alt="icon"
                src="/Icon.png"
                className="h-6 w-auto"
              />
            
              <h1 className="text-3xl font-medium	">Positivus</h1>
            </div>
            <div className="flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-green ">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6  group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>

          <div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 mr-24">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-600 text-dark"
                        : "text-gray-300 hover: hover:text-gray",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="rounded py-2 px-4 border-solid border border-black hover:bg-green hover:text-black">
                Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="absolute right-0 w-full bg-gray text-center sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            <Button className="rounded py-2 px-4 border-solid border border-black hover:bg-black hover:text-white">
            Get Started
            </Button>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
