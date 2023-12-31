import React from 'react';
import './Socials.css'
import { BsInstagram } from "react-icons/bs"
import { TiMail } from "react-icons/ti"
import { IconContext } from 'react-icons/lib';

function Socials() {
  return (
    <div className='socials'>
      <span className='socialContainer' id='insta'>
        <div className='iconContainer'>
          <a className='icon' href='https://instagram.com/sevenheaven.band' target='_blank' rel='noopener noreferrer'>
            <IconContext.Provider value={{ color: 'white', size: '12vw' }} >
              <BsInstagram />
            </IconContext.Provider>
          </a>
        </div>
        <a style={{textDecoration: 'none'}} href='https://instagram.com/sevenheaven.band' target='_blank' rel='noopener noreferrer'>
          @<u>sevenheaven.band</u>
        </a>
      </span>
      <span className='socialContainer' id='mail'>
        <div className='iconContainer'>
          <a className='icon' href='mailto:kontakt@sevenheaven.band'>
            <IconContext.Provider value={{ color: 'white', size: '15vw', style: { 'paddingBottom': '1.7vw' } }} >
              <TiMail />
            </IconContext.Provider>
          </a>
        </div>
        <a href='mailto:kontakt@sevenheaven.band'>kontakt@sevenheaven.band</a>
      </span>
    </div>
  )
}

export default Socials