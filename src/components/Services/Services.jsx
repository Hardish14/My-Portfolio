import React from 'react';
import './Services.css';
import heartemoji from '../../img/heartemoji.png';
import Card from '../Cards/Card';
import humble from '../../img/humble.png';
import glasses from '../../img/glasses.png';
import Resume from './Hardish_resume_1.pdf';

const Services = () => {
  return (
    <div className='services'>
      <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>Designers are responsible artists. Whether it is web designing or development it requires a sense of imagination for looking at the output even before it is published.</span>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
      </div>
      <div className='card2'>
        <div style={{left: '15rem'}}>
          <Card emoji={heartemoji} 
          heading = {'Design'}
          detail = {"Sketch,Adobe,Adobe Xd"} />
        </div>

        <div style={{top:'15rem',left: '-3rem'}}>
          <Card emoji={glasses} 
          heading = {'Developer'}
          detail = {"Html, Css, Bootstrap, JavaScript,REACT"} />
        </div>

        <div style={{top:'22rem',left: '14rem'}}>
          <Card emoji={humble} 
          heading = {'Competitive Coder'}
          detail = {"C, C++, Java, Python"} />
        </div>
      </div>
    </div>
  )
}

export default Services;