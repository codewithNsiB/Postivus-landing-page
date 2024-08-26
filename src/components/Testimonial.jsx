import React from "react";
import { Button } from "@headlessui/react";
import { Carousel } from "react-bootstrap";
export default function Testimonial() {
  return (
    <>
      <div className="mx-4 md:mx-28 mt-16 mb-11 gap-2 items-center flex flex-col md:flex-row text-center md:text-left">
        <Button className="rounded-lg text-xl font-bold py-2 px-4 bg-green text-black">
          Testimonials
        </Button>
        <p className="text-sm mt-2 md:mt-0 md:ml-4">
          Hear from our satisfied clients: Read our testimonials to learn more
          about our Digital Marketing services
        </p>
      </div>
      <div class=" mx-4 md:mx-28 flex-row items-center my-6 p-14 bg-black text-white rounded-[45px]">
            <div class=" quote justify-items-center relative w-full w-full border border-green rounded-3xl">
              <div class="p-4 md:p-10">
                <p class="items-center justify-center text-white text-sm md:text-lg font-normal mb-4">
                  "We have been working with Positivus for the past year and
                  have seen a significant increase in website traffic and leads
                  as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence."
                </p>
                <span class="text-green text-base md:text-xl font-medium">
                  John Smith
                  <br />
                </span>
                <span class="text-white text-lg font-normal">
                  Marketing Director at XYZ Corp
                </span>
              </div>
            </div>
          </div>

    </>
  );
}
