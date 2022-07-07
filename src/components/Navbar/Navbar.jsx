import React from 'react';
import './Navbar.css';


const navbar = () => {
  return (
      <div className='n-wrapper'>
          <div className='n-left'>
            <div className='n-name'>
                Hardish
            </div>
            <span>toggle</span>
          </div>
          <div className='n-right'>
            <div className='n-list'>
                <ul className='n-list-ul'>
                    <li>Home</li>
                    <li>AboutMe</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button className='button n-button'>
                Contact
            </button>
          </div>
      </div>
    
  )
}

export default navbar;