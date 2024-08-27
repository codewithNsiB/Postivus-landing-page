import React from "react";
import { Button } from "@headlessui/react";

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

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white mx-14 md:mx-24 mt-20 rounded-t-[45px] py-8 px-6">
        <div className="flex gap-4 items-center justify-between">
          <img alt="icon" src="/public/pro.png" className="h-6 w-auto" />
          <div className="flex space-x-4 items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "text-white decoration-2"
                    : " hover:text-green",
                  "rounded-md  px-3 py-2 text-sm font-medium"
                )}
              >
                {item.name}
              </a>
            ))}
            <img src="/public/Linkedinwhite.png" alt="LinkedIn" className="w-6 h-6" />
            <img src="/public/twitter.png" alt="Twitter" className="w-6 h-6" />
            <img src="/public/fb.png" alt="Facebook" className="w-6 h-6" />
          </div>
        </div>
        <div className="mt-8 mb-6 flex flex-col md:flex-row justify-between">
          <div className="text-center md:text-left">
            <Button className="rounded-lg text-xl font-bold py-2 px-4 bg-green text-black hover:bg-green">
              Contact us
            </Button>
            <p className="mt-4 text-white">Email: info@positivus.com</p>
            <p className="text-white my-4">Phone: 555-567-8901</p>
            <p className="text-white">
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="mt-8 md:mt-0 bg-dark p-11 rounded-lg w-[700px]flex gap-2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className=" py-2 px-2 mr-3 text-gray bg-dark border border-gray rounded-md focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
              required
            />
            <Button
              type="submit"
              className="  py-3 px-2 bg-green text-black text-sm rounded-md "
            >
              Subscribe to news
            </Button>
          </div>
        </div>
        <hr />
       <div  className="mt-8">
       <span>© 2023 Positivus. All Rights Reserved.</span>
       <span className="ml-20 decoration-2">Privacy Policy</span>
       </div>
      </footer>
    </>
  );
}
