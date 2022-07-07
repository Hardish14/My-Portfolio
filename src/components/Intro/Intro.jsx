import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Insta from "../../img/insta-photo-1.png";
import Linkedin from "../../img/linkedin.png";
import Personal from "../../img/Personal.jpeg";
import Personal1 from "../../img/Personal1.png";


const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hey! I Am</span>
          <span>Hardish Avlani</span>
          <span>
            Software Developer with good experience in web designing and
            developement, producting and Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/Hardish14"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github Acc."></img>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            {" "}
            <img src={Insta} alt="Insta Acc."></img>
          </a>
          <a
            href="https://www.linkedin.com/in/hardish-avlani-8295ab219/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin Acc."></img>
          </a>
        </div>
      </div>
      <div
        className="i-right "
      >
      <img src={Personal1} alt="" style={{zIndex: 1,width:"100%"}} >
      </img>
      <div className="darshanbhai">
        <img src={Personal} alt="" style={{width:"100%"}}></img>
      </div>
        {/* <div
          className="blur"
          style={{
            bacground: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Intro;
