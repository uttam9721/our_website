import React from "react";
import java from "../../public/java.png";
import mongoDB from "../../public/image.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "FoodOrdering App",
      description: "A full-stack food ordering web application with add-to-cart and online payment functionality.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description: "A robust back-end using Express for RESTful APIs and middleware.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description: "Built reusable components with React, including routing and state management.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description: "Used Node.js for scalable server-side logic and integration with MongoDB.",
    },
    {
      id: 5,
      // logo: JavaScript,
      name: "JavaScript Projects",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-5">
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              key={id}
              className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
              // className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] object-contain mx-auto p-2 rounded-full border-[2px]"
                alt={`${name} logo`}
              />
              <div className="text-center">
                <div className="font-bold text-xl mt-2 mb-1">{name}</div>
                <p className="text-gray-700 text-sm">{description}</p>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
