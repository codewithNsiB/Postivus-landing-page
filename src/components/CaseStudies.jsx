import React from "react";
import { Button } from "@headlessui/react";

export default function CaseStudies() {
  return (
    <>
      <div className="md:mx-28 mt-16 mb-5 gap-2 items-center  md:flex sm:justify-start mx-4 justify-center text-center">
        <Button className="rounded-lg text-2xl font-bold py-4 px-4 bg-green text-black w-full sm:w-auto mb-8 sm:mb-0">
          Case Studies
        </Button>
        <p className="text-sm sm:text-left text-center">
          Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
          Success through Our Case Studies
        </p>
      </div>
      <div className="flex flex-col items-center max-w-7xl mt-11 my-3 mx-4 md:mx-28 p-2 md:p-6 bg-black text-white rounded-[45px]">
        <div className="w-full rounded-[22px] flex justify-start items-start gap-2 md:gap-8 text-white p-2 md:p-6">
          <div className="grid grid-cols-1 gap-2 divide-y divide-white md:grid-cols-3 md:gap-1 md:divide-y-0 md:divide-x">
            <div className="flex flex-col items-start gap-3 p-2 md:px-4 py-3 md:py-1">
              <div className="w-full text-base font-normal">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="text-green text-lg font-normal leading-6">
                  Learn more
                </div>
                <img src="/casestudy arrow.png" alt="arrow" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 p-2 md:px-4 py-3 md:py-1">
              <div className="w-full text-base font-normal">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first-page ranking for key keywords and a 200%
                increase in organic traffic.
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="text-green text-lg font-normal leading-6">
                  Learn more
                </div>
                <img src="/casestudy arrow." alt="arrow" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 p-2 md:px-4 py-3 md:py-1">
              <div className="w-full text-base font-normal">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="text-green text-lg font-normal leading-6">
                  Learn more
                </div>
                <img src="/casestudy arrow.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
