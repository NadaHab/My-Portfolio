import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import aspnet from "../assets/aspnet.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import java from "../assets/java.png";

const ExperienceCarousel = () => {
  const techs = [
    {
      id: 9,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: aspnet,
      title: "Asp.Net",
      style: "shadow-blue-300",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
   
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen pt-20 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4  text-blue-500 border-gray-500 pt-2  inline">
            Experience
          </p>
          <p className=" justify-center text-xl pt-4 ">
            These are the technologies I've worked with:
          </p>
        </div>
        <div className="flex justify-center items-center h-screen ">
          <Carousel className="max-h-3/4 w-2/5 ">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-xl hover:scale-105 duration-600 rounded-lg ${style}`}
              >
                <img src={src} alt="" className=" max-h-1/3 w-28 mx-auto" />
                <p className="mt-8 mb-8">{title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
