import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './BackToMainPage.css'
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from 'react-icons';

function desktopPage(props) {
  return mobilePage(props)
  return (
    <>
    </>
  )
}

function mobilePage(props) {
  const backgroundColor = props.backgroundColor || 'rgba(0,0,0,0.5)'
  const fontSize = props.fontSize || '5vw'
  const styleElement = {
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    textDecoration: 'none',
  }
  return (
    <a href='/' className='backWrapper' style={styleElement}>
      <div className='backIcon'>
        <IconContext.Provider value={{color: 'white', size: '7vw'}}>
          <BsArrowLeft />
        </IconContext.Provider>
      </div>
      <div className='backText'>
        Zurück zur Startseite
      </div>
    </a>
  )
}

function BackToMainPage(props) {
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopPage(props)
        :
        mobilePage(props)
      }
    </>
  )
}

export default BackToMainPage