import React from "react";

const About = () => {
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

        <p className="text-white text-xl mt-20 text-justify">
          I am a Full Stack Developer, passionate for front-end and back-end development.
          Amazed by this world of continuous development, I am a lover of
          studying the new technologies! 
        </p>

        <br />

        <p className="text-white text-xl text-justify">
          With experience in Java, C# (.Net and .Net Core), PHP, JavaScript,
          HTML, CSS, SQL. Visual Studio, VSCode, IntelliJ IDEA. Frameworks:
          Asp.net(MVC and Razor Pages), WPF, MySQL, React. I can Handle SQL
          databases such as MySQL and MS SQL Server and, no-SQL databases:
          MongoDB. I can Create and consume web API, webservices, knowledge of
          AWS, Unit testing, Git and Github, Agile methodology, Trello. Proficient in
          Microsoft Office applications (Powerpoint, Excel, Word).
        </p>
      </div>
    </div>
  );
};

export default About;
