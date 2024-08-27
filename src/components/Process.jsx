import { useState } from 'react';
import { Button } from "@headlessui/react";
import { processData } from "./Data/TeamData";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="mt-16 mb-11 ml-28 gap-2 items-center flex">
        <Button className="rounded-lg text-xl font-bold py-2 px-4 bg-green text-black">
        Our Working Process
        </Button>
        <p className="text-sm">
        Step-by-Step Guide to Achieving Your Business Goals
        </p>
        </div>
      <div className="max-w-7xl mx-28 grid grid-cols-1 gap-4">
        {processData.map((panel, index) => (
          <Panel
            key={panel.id}
            id={index + 1}
            title={panel.label}
            isActive={activeIndex === index}
            onShow={() => setActiveIndex(index)}
            className="border-b-8 rounded-[25px] mx-auto w-full mb-4"
          >
            {panel.content}
          </Panel>
        ))}
      </div>
    </>
  );
}

function Panel({
  id,
  title,
  children,
  isActive,
  onShow,
  className
}) {
  return (
    <section
      className={`relative border ${className} ${isActive ? 'bg-green' : 'bg-gray'} transition-all panel-width`}
    >
      <h3
        className="text-xl font-semibold p-4 bg-gray-200 cursor-pointer flex items-center justify-between"
        onClick={onShow}
      >
        <div><span>{id}</span>
        <span className="ml-4">{title}</span></div>
        <img
          src={isActive ? "/public/Minus icon (1).png" : "/public/Plus icon.png"}
          alt=""
          className="h-8 w-auto ml-4"
        />
      </h3>
      
      {isActive ? (
        <div className="p-4">
          <hr />
          {children}
        </div>
      ) : null}
    </section>
  );
}
