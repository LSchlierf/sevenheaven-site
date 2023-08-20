import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './TitleBar.css'
import BandLogo from './BandLogo';

function desktopBar() {
  return (
    <>
    </>
  )
}

function mobileBar() {
  return (
    <div className='mobileBar'>
      <BandLogo fontsize='8vw' />
      <div className='imgContainer'>
        <img src='Logo.png' alt='Bandlogo' width='100vw'/>
      </div>
    </div>
  )
}

function TitleBar() {
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopBar()
        :
        mobileBar()
      }
    </>
  )
}

export default TitleBar