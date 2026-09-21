import React from "react";
import HeroImage from "../assets/myPhoto.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-blue-500">
          Educator | Academic Systems & Data Analyst | Educational Technology & Process Improvement
          
          </h2>
          <p className="text-white text-xl font-semibold py-4 max-w-md">
          SQL • Python • Power Apps • Power BI • Data Analytics • Business Intelligence • Reporting. 
          
          Experienced in analyzing complex information, identifying trends and issues, translating data into actionable recommendations, and collaborating with educators, academic departments, administrative services, IT, and management. A continuous learner with a Bachelor’s degree in Computer Science and an AEC in Full Stack Development, with hands-on experience in Power BI, Power Apps, Microsoft 365, SQL, Excel, forecasting, reporting, and academic systems..
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
