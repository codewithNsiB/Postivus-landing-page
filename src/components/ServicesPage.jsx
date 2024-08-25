import React from "react";
import { Button } from "@headlessui/react";
import {servicesData} from "./Data/ServicesData"




export default function ServicesPage() {
  return (
    <>
    <div className="ml-24 my-20 gap-4 items-center flex">
      <Button className="rounded  text-xl font-bold py-2 px-4  bg-green text-black ">
       Services
      </Button>
      <p className="">
        At our digital marketing agency, we offer a range of services to <br /> help
        businesses grow and succeed online. These services include:
      </p>
    </div>

    <div className="flex flex-col mx-24 items-center py-5">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
    {servicesData.map(({ background, text1, text2, arrow, link, image, textColor1, textColor2 }) => (
      <div className={`${background}`}>
        <div className="flex flex-col justify-center items-start gap-24">
          <div className="flex flex-col justify-start items-start">
            <div className="px-2 bg-green-500 rounded-md flex flex-col justify-start items-start gap-2.5">
              <div className={`text-3xl font-medium ${textColor1}`}>{text1}</div>
            </div>
            <div className="px-2 bg-green-500 rounded-md flex flex-col justify-start items-start gap-2.5">
              <div className={`text-3xl font-medium ${textColor2}`}>{text2}</div>
            </div>
          </div>
          <a className="flex justify-start items-center gap-4" href={link}>
            <div className="relative w-10 h-10">
              <img className="absolute w-full h-full" src={arrow} />
            </div>
            <div className="text-xl font-normal leading-7">Learn more</div>
          </a>
        </div>
        <div className="flex justify-center items-center w-52 h-44 pt-0.5 pb-2 hidden md:flex">
          <img src={image} />
        </div>
      </div>
    ))}
  </div>
</div>

<div class="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="justify-start items-center gap-[275px] flex">
            <div class="flex-col justify-start items-start gap-[26px] inline-flex text-black">
                <div class="text-3xl font-medium">Let’s make things happen</div>
                <div class="text-lg font-normal">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</div>
                <a href="/" class="px-[35px] py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-[14px] justify-start items-start gap-2.5 inline-flex">
                    <div class="text-center text-xl font-normal leading-7">Get your free proposal</div>
                </a>
            </div>
        </div>
        <div class="hidden md:grid justify-items-center -m-20">
            <img src="/services/Illustration.svg" width="50%" alt="cat"/>
        </div>
    </div>
</div>
   
    </>
  );
}


