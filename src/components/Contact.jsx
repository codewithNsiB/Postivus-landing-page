import React from "react";
import { Button } from "@headlessui/react";

export default function Contact() {
  return (
    <>
      <div className="mx-4 md:mx-28 mt-16 mb-11 gap-2 items-center flex flex-col md:flex-row text-center md:text-left">
        <Button className="rounded-lg text-xl font-bold py-2 px-4 bg-green text-black hover:bg-green">
          Contact us
        </Button>
        <p className="text-sm mt-2 md:mt-0 md:ml-4">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center rounded-[45px] bg-gray mx-4 md:mx-28 p-4 md:p-8">
        <div className="form-div w-full md:w-[34.75rem]">
          <form>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="contactOption"
                  className="w-4 h-4 rounded-full bg-white border border-gray focus:ring-green checked:bg-green appearance-none cursor-pointer"
                />
                <span className="ml-2">Say hi</span>
              </label>

              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  name="contactOption"
                  className="w-4 h-4 rounded-full bg-white border border-gray focus:ring-green checked:bg-green checked:border-green appearance-none cursor-pointer"
                />
                <span className="ml-2">Get a quote</span>
              </label>
            </div>

            <div className="mb-4">
              <label
                className="block text-black  text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:border-green focus:ring-1 focus:ring-green"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="rounded-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:border-green focus:ring-1 focus:ring-green h-32 resize-none"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div>
              <Button
                type="submit"
                className="rounded w-full py-4 px-4 bg-black text-white text-xl hover:bg-green hover:text-black hover:border-b-8 rounded-[12px]"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        <div className="hidden md:flex md:justify-end md:w-4/12 md:py-2 relative">
          <img
            src="/form-img.png"
            alt="Contact Form Image"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-auto md:w-full"
          />
        </div>
      </div>
    </>
  );
}
