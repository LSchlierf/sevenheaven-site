import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './BackToMainPage.css'
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

function BackToMainPage(props) {
  const backgroundColor = props.backgroundColor || 'rgba(0,0,0,0.5)'
  const isDesktop = isBrowser || isTablet
  const fontSize = props.fontSize || (isDesktop ? '30px' : '5vw')
  const retLocation = props.retLocation || ''
  const to = props.to || '/'
  const text = props.text || 'Zurück zur Startseite'
  const styleElement = {
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    textDecoration: 'none',
  }
  return (
    <Link className='backWrapper' style={styleElement} to={to} state={{ location: retLocation }}>
      <div className='backIcon'>
        <IconContext.Provider value={{ color: 'white', size: (isDesktop ? 50 : 30) }}>
          <BsArrowLeft />
        </IconContext.Provider>
      </div>
      <div className='backText'>
        {text}
      </div>
      {
        isDesktop ? (
          <div style={{ width: '50px' }} />
        ) : (<></>)
      }
    </Link>
  )
}

export default BackToMainPage