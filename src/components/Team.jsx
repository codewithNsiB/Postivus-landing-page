import React from "react";
import { teamData } from "./Data/TeamData";
import { Button } from "@headlessui/react";

export default function Team() {
 
  const duplicatedTeamData = [...teamData, ...teamData.slice(0, 3)];

  return (
    <>
      <div className="mx-4 md:mx-28 mt-16 mb-11 gap-2 items-center flex flex-col md:flex-row text-center md:text-left">
        <Button className="rounded-lg text-xl font-bold py-2 px-4 bg-green text-black">
          Team
        </Button>
        <p className="text-sm mt-2 md:mt-0 md:ml-4">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies.
        </p>
      </div>

      <div className="px-4 md:px-28 py-5" id="team">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {duplicatedTeamData.map(({ title, text, name, link, img }, index) => (
            <div
              key={index}
              className="h-[331px] p-6 bg-white rounded-[45px] border-b-8 rounded-[25px] shadow-card border border-zinc-900 flex flex-col justify-start items-start text-black relative"
            >
              <a
                className="absolute top-4 right-4"
                href={link}
                aria-label={`${name}'s LinkedIn profile`}
              >
                <img
                  src="/public/linkedin.png"
                  alt="linkedinprofile"
                  className="w-6 h-6"
                />
              </a>
              <div className="grid grid-cols-2 gap-4 items-center mb-2">
                <img src={img} alt={name} className="h-24 w-24 rounded-full" />
                <div className="flex flex-col justify-center">
                  <div className="text-xl font-medium mb-2">{name}</div>
                  <div className="text-sm font-bold">{title}</div>
                </div>
              </div>
              <hr className="w-full border border-black mb-2" />
              <p className="text-sm md:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-end items-center mt-8 ">
        <Button className="px-8 py-4 bg-black bg-black text-white hover:bg-green hover:text-black hover:border-b-8 rounded-[12px] mr-32 ">
          See all team
        </Button>
      </div>
    </>
  );
}
