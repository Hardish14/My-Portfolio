import React from 'react';
import './Experience.css';
import Epsilon from '../../img/Epsilon.jpg';
import Brainy from '../../img/Brainybeam.png';

const Experience = () => {
  return (
    <div className='Experience'>
        <div className='e-title'>
            <span>My</span>
            <span>Experience</span>
        </div>
        <div className='Company-details'>
          <div className='first-company'>
            <a href='https://www.epsilon-technology.com/' target='_blank' rel='noreferrer'>
            <img src={Epsilon} alt=""></img>
            </a>
            <p>Web Developer</p>
            <span>May 2022 - June 2022, 1 mos</span>
            <span>Worked as a Web Designer in HTML/CSS and Web Developer in JS, React and Firebase</span>
            <span>Junagadh, Gujarat, India</span>
          </div>
          <div className='second-company'>
            <a href='https://www.brainybeam.com/' target='_blank' rel="noreferrer"> 
            <img src={Brainy} alt="" className='second-image'></img>
            </a>
            <p>Android and flutter Developer</p>
            <span>May 2021 - June 2021, 2 weeks</span>
            <span>Worked as an App Developer with Android Studio and foundational in Flutter </span>
            <span>Ahmedabad, Gujarat, India</span>
          </div>
        </div>
    </div>
  )
}

export default Experience;