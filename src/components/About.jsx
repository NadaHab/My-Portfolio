import React from "react";
import { useState } from "react";
import "./AboutCss/style.css";

const content = [
  [
    "Business Intelligence & Data Analyst",
    "SQL • Python • Power Apps • Power BI • Data Analytics • Business Intelligence • Reporting",
    "Amazed by the continuous development in the world of Artificial Intelligence & Software",
    "I am a lover of studying the new technologies!",
  ],
  ["Business Intelligence & Data Analyst",
  "Amazed by the continuous development in the world of Artificial Intelligence & Software"],
  ["Power Apps", "Power BI", "Forms", "Lists","Microsoft PowerPoint, Excel, Word","React", "Java", "Front-end development", "SQL and MySQL"],
  [ " Jogging", "Planting", "Jazz Music"],
 
];

const About = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white xs:pt-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-500 inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <br />

        <p className="text-white xs:text-l md:text-xl">
        Educator and Academic Systems & Data Analyst with extensive experience in education, technology, academic planning, data analysis, and organizational process improvement. Brings a combination of 14+ years of teaching and training experience and recent experience supporting academic operations and institutional decision-making in a Québec CEGEP environment. 
        </p>
        <div id="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Who Am I?
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              My Passion
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Microsoft
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              Hobbies
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
