import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Button,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
      <Disclosure as="nav" className="fixed px-1 w-full z-10">
        <div className="flex justify-between items-center mt-2 md:ml-24  px-2 max-w-7xl sm:px-6 lg:px-2 sm:mb-12">
          <div className="flex items-center py-3 mt-2 sm:gap-20">
            <img
              alt="icon"
              src="/black logo.png"
              className="h-6 w-auto"
            />
          </div>

          <div className="flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-green ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-4 mr-24">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray text-dark"
                      : "text-black hover: hover:text-gray",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <Button className="rounded-[10px] py-2 px-2 border-solid border border-black hover:bg-green hover:text-black">
                Request a quote
              </Button>
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
                    ? "bg-gray text-white"
                    : "text-black hover:bg-gray hover:text-white",
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
