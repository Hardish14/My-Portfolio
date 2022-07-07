import React from "react";
import "./Projects.css";
// import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
//   const project = [
//     {
//       heading: "Money Tracker",
//       details:
//         "User can track their income and expense. With this application user can add different categorywise transactions. User can see graph representation of their income and expenses and user can also add transaction with their voice also.",
//     },
//     {
//       heading: "Flipkart_trail",
//       details:
//         "In this project I created basic UI like flipkart home page with the help of html,css.",
//     },
//     {
//       heading: "Portfolio_website",
//       details:
//         "This website is demonstration of my personal information and my skills.",
//     },
//     {
//       heading: "To-do-list",
//       details:
//         "User can add their work in to-do list.And after completion of work user can also delete work.",
//     },
//   ];

  return (
    <div className="p-wrapper">
        <div className="p-heading">
            <span>My</span>
            <span>Projects</span>
        </div>
        
        <div className="container">

            <input type="radio" name="slider" id="slide-1-trigger" className="trigger" />
            <label className="btn" htmlFor="slide-1-trigger"></label>
            <input type="radio" name="slider" id="slide-2-trigger" className="trigger" />
            <label className="btn" htmlFor="slide-2-trigger"></label>
            <input type="radio" name="slider" id="slide-3-trigger" className="trigger" />
            <label className="btn" htmlFor="slide-3-trigger"></label>
            <input type="radio" name="slider" id="slide-4-trigger" className="trigger" />
            <label className="btn" htmlFor="slide-4-trigger"></label>

            <div className="slide-wrapper">
                <div id="slide-role">
                    <div className="slide slide-1">
                        <span className="slider-heading">
                            Money Tracker
                        </span>
                        <span className="slider-details">
                             User can track their income and expense. With this application user can add different categorywise transactions. 
                        </span>
                        <span className="slider-details">User can see graph representation of their income and expenses and user can also add transaction with their voice also.</span>
                    </div>
                    <div className="slide slide-2">
                        <span className="slider-heading">Flipkart_trail</span>
                        <span className="slider-details">This is basic html, css based project.</span>
                        <span className="slider-details">In this project I created basic UI like flipkart home page, login page and prodect page.</span>
                    </div>
                    <div className="slide slide-3">
                        <span className="slider-heading"> Portfolio_website</span>
                        <span className="slider-details"> This website is demonstration of my personal information and my skills.</span>
                    </div>
                    <div className="slide slide-4">
                        <span className="slider-heading">To-do-list</span>
                        <span className="slider-details">User can add their work in to-do list.</span>
                        <span className="slider-details">And after completion of work user can also delete work.</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Projects;
