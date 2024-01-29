import React from "react";
import { useState } from "react";
import "./AboutCss/style.css";

const content = [
  [
    "I am a Full Stack Developer",
    "Passionate for front-end and back-end development",
    "Amazed by the continuous development in the world of Software",
    "I am a lover of studying the new technologies!",
  ],
  ["React", "Java", "Front-end development", "SQL and MySQL"],
  ["Microsoft PowerPoint", "Microsoft Excel", "Microsoft Word", " "],
  ["Home Decoration", "Planting", "Jogging", "Listening to music "],
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

        <p className="text-white text-xl ">
          I am a Full Stack Developer / Software Developer.       <br />
          With experience in Java, C# (.Net and .Net Core), PHP, JavaScript, HTML, CSS, SQL. Visual
          Studio, VSCode, IntelliJ IDEA. Frameworks: Asp.net(MVC and Razor
          Pages), WPF, MySQL, React. I can Handle SQL databases such as MySQL
          and MS SQL Server and, no-SQL databases: MongoDB. I can Create and
          consume web API, webservices, knowledge of AWS, Unit testing, Git and
          Github, Agile methodology, Trello. Proficient in Microsoft Office
          applications (Powerpoint, Excel, Word).
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
