import React from "react";
import { Button } from "@headlessui/react";
import { servicesData } from "./Data/ServicesData";

export default function ServicesPage() {
  return (
    <>
      <div className="md:ml-28 mt-32 mb-5 gap-4 items-center sm:flex sm:justify-start mx-4 justify-center text-center">
  <Button className="rounded-lg text-2xl font-bold py-4 px-8 bg-green text-black w-full sm:w-auto mb-8 sm:mb-0">
    Services
  </Button>
  <p className="sm:text-left text-center">
    At our digital marketing agency, we offer a range of services to{" "}
    <br /> help businesses grow and succeed online. These services
    include:
  </p>
</div>

{/* 
      <div className="flex flex-col md:mx-12 items-center p-14">
        <div className="grid grid-cols-1 w-full sm:grid-cols-1 md:grid-cols-2 gap-8 ">
          {servicesData.map(
            ({
              background,
              text1,
              text2,
              arrow,
              link,
              image,
              textColor1,
              textColor2,
              textWhite,
            }) => (
              <div className={`${background} border-b-8 rounded-[25px] `}>
                <div className="flex flex-col justify-center items-start md:gap-24">
                  <div className="flex flex-col justify-start items-start">
                    <div className="px-2 bg-green rounded-md flex flex-col justify-start items-start gap-2.5">
                      <div
                        className={`text-3xl font-medium rounded ${textColor1}`}
                      >
                        {text1}
                      </div>
                    </div>
                    <div className="px-2 bg-green rounded-md flex flex-col justify-start items-start gap-2.5">
                      <div
                        className={`text-3xl font-medium rounded ${textColor2}`}
                      >
                        {text2}
                      </div>
                    </div>
                  </div>
                  <a
                    className="flex justify-start items-center gap-4"
                    href={link}
                  >
                    <div className="relative w-10 h-10">
                      <img className="absolute w-full h-full" src={arrow} />
                    </div>
                    <div className={`text-xl font-normal leading-7 rounded ${textWhite}`}>
                      Learn more
                    </div>
                  </a>
                </div>
                <div className="flex justify-center items-center md:w-52 md:h-44 pt-0.5 pb-2 hidden md:flex">
                  <img src={image} className="w-full h-auto max-w-xs sm:max-w-full" />
                </div>
              </div>
            )
          )}
        </div>
      </div> */}
      <div className="flex flex-col md:mx-12 items-center p-14">
  <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
    {servicesData.map(
      ({
        background,
        text1,
        text2,
        arrow,
        link,
        image,
        textColor1,
        textColor2,
        textWhite,
      }) => (
        <div className={`${background} border-b-8 rounded-[25px]`}>
          <div className="flex flex-col justify-center items-start md:gap-24">
            <div className="flex flex-col justify-start items-start">
              <div className="px-2 bg-green rounded-md flex flex-col justify-start items-start gap-2.5">
                <div className={`text-3xl font-medium rounded ${textColor1}`}>
                  {text1}
                </div>
              </div>
              <div className="px-2 bg-green rounded-md flex flex-col justify-start items-start gap-2.5">
                <div className={`text-3xl font-medium rounded ${textColor2}`}>
                  {text2}
                </div>
              </div>
            </div>
            <a
              className="flex justify-start items-center gap-4"
              href={link}
            >
              <div className="relative w-10 h-10">
                <img className="absolute w-full h-full" src={arrow} />
              </div>
              <div className={`text-xl font-normal leading-7 rounded ${textWhite}`}>
                Learn more
              </div>
            </a>
          </div>
          <div className="flex justify-center items-center w-52 h-44 w-full h-auto pt-0.5 pb-2 md:flex">
            <img
              src={image}
              className="w-full h-4 max-w-lg sm:max-w-full"
              alt="Service"
            />
          </div>
        </div>
      )
    )}
  </div>
</div>


      <div className="flex flex-col mt-8 mx-4 md:flex-row items-center my-6 md:mx-28 p-8 h-[347px] bg-gray rounded-[45px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="flex justify-start items-center gap-[275px]">
            <div className="flex flex-col justify-start items-start gap-6 text-black">
              <div className="text-3xl font-medium">
                Let’s make things happen
              </div>
              <div className="md:text-lg font-normal">
                Contact us today to learn more about how our digital marketing
                services can help your business grow and succeed online.
              </div>
                 <Button className="rounded py-4 px-4 bg-black text-white hover:bg-green hover:text-black hover:border-b-8 rounded-[12px]">
              Get your free proposal
              </Button>
        
            </div>
          </div>
          <div className="hidden md:flex justify-center -m-20">
            <img src="/public/7th card icon.png" width="50%" alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
}
