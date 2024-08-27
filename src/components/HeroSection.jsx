import React from "react";
import { Button } from "@headlessui/react";
import Amazon from "../../public/Amazon.png";
import Dribble from "../../public/dribble.png";
import Notion from "../../public/Notion.png";
import Netflix from "../../public/Netflix.png";
import Zoom from "../../public/Zoom.png";
import Hubspot from "../../public/Hubspot.png";

const images = [Amazon, Dribble, Notion, Netflix, Zoom, Hubspot];

export default function HeroSection() {
  return (
    <>
      <div className="pt-16 mt-4 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:ml-24">
          <h1 className="text-3xl md:text-4xl font-medium">
            Navigating the digital
            <br />
            landscape for success
          </h1>
          <p className="text-sm md:text-base my-6 md:my-12">
            Our digital marketing agency helps businesses
            <br />
            grow and succeed online through a range of
            <br />
            services including SEO, PPC, social media marketing,
            <br />
            and content creation.
          </p>
          <Button className="rounded py-4 px-4 bg-black text-white hover:bg-green hover:text-black hover:border-b-8 rounded-[12px] ">
            Book a consultation
          </Button>
        </div>
        <div className="mt-8 md:mt-0 md:mr-28">
          <img alt="" src="/Hero-Illustration.png" className="max-w-full h-auto" />
        </div>
      </div>
      <div className="relative w-full mt-14 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="inline-block px-4 h-8 md:h-11 py-2 filter grayscale brightness-0"
              alt=""
            />
          ))}
          {images.map((src, index) => (
            <img
              key={`duplicate-${index}`}
              src={src}
              className="inline-block px-4 h-8 md:h-11 py-2 filter grayscale brightness-0"
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}