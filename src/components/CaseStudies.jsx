import React from "react";
import { Button } from "@headlessui/react";

export default function CaseStudies() {
  return (
    <>
      <div className="ml-28 mt-32 mb-11 gap-4 items-center flex">
        <Button className="rounded-lg text-2xl font-bold py-4 px-8 bg-green text-black">
          Case Studies
        </Button>
        <p className="">
          Explore Real-Life Examples of Our Proven Digital Marketing <br />{" "}
          Success through Our Case Studies
        </p>
      </div>
      <div className="flex flex-col items-center my-6 mx-4 md:mx-28 p-4 md:p-14 bg-black text-white rounded-[45px]">
        <div className="w-full rounded-[45px] flex justify-start items-start gap-4 md:gap-16 text-white p-4 md:p-12">
          <div className="grid grid-cols-1 gap-4 divide-y divide-white md:grid-cols-3 md:gap-2 md:divide-y-0 md:divide-x">
            <div className="flex flex-col items-start gap-5 p-4 md:px-6 py-6 md:py-2">
              <div className="w-full text-lg font-normal">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </div>
              <div className="flex justify-start items-center gap-[15px]">
                <div className="text-green text-xl font-normal leading-7">
                  Learn more
                </div>
                <img src="/public/casestudy arrow.png" alt="arrow" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 p-4 md:px-6 py-6 md:py-2">
              <div className="w-full text-lg font-normal">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first-page ranking for key keywords and a 200%
                increase in organic traffic.
              </div>
              <div className="flex justify-start items-center gap-[15px]">
                <div className="text-green text-xl font-normal leading-7">
                  Learn more
                </div>
                <img src="/public/casestudy arrow.png" alt="arrow" />
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 p-4 md:px-6 py-6 md:py-2">
              <div className="w-full text-lg font-normal">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </div>
              <div className="flex justify-start items-center gap-[15px]">
                <div className="text-green text-xl font-normal leading-7">
                  Learn more
                </div>
                <img src="/public/casestudy arrow.png" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
