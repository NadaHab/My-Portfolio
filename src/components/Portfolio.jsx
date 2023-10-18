import React from "react";

import coffeeShop from "../assets/portfolio/coffeeShop.jpg";
import eShop from "../assets/portfolio/EshopASPNET.png";
//import navbar from "../assets/portfolio/navbar.jpg";
import taskManager from "../assets/portfolio/taskManager.png";
import javaPractice from "../assets/portfolio/java4.jpeg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: javaPractice,
      desc: "JAVA Practice",
      github: "https://github.com/NadaHab/Java-Practice/tree/master/src",
    },
    {
      id: 4,
      src: eShop,
      desc: "Lady Brands",
      github: "https://github.com/NadaHab/eshop",
    },
    {
      id: 3,
      src: coffeeShop,
      desc: "Coffee Shop",
      github: "https://github.com/NadaHab/React-Online-Coffee-Shop",
    },

  
    {
      id: 2,
      src: taskManager,
      desc: "Task Manager",
      github: "https://github.com/NadaHab/TasksManager",
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white xs:pt-5 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold  text-blue-500 inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="text-xl py-6">Check out some of my work right here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, desc, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <button className=" px-6 py-3 m-4 duration-200 hover:scale-105">
                {desc}
              </button>
              <img
                src={src}
                alt=""
                className="h-52 w-full rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={github}> Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
