import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './TitleBar.css'
import BandLogo from './BandLogo';
import { useNavigate } from 'react-router-dom';

function desktopBar(navigate) {
  function scrollTo(id) {
    if(window.location.pathname === '/') {
      const element = document.getElementById(id)
      const offset = -0
      const y = element.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    } else {
      navigate('/', {state: {location: id}})
    }
  }

  return (
    <div className='desktopBarWrapper'>
      <div className='desktopBar'>
        <div className='navContainer'>
          <div className='navLogo'>
            <BandLogo padding='0' text='Musik' fontSize='1.3vw' onClick={() => scrollTo('musik')} cursor='pointer' />
            <a href='/galerie' style={{ textDecoration: 'none' }}>
              <BandLogo padding='5px' text='Galerie' fontSize='0.8vw' cursor='pointer' />
            </a>
            <a href='/repertoire' style={{ textDecoration: 'none' }}>
              <BandLogo padding='5px' text='Repertoire' fontSize='0.8vw' cursor='pointer' />
            </a>
          </div>
        </div>
        <div className='navContainer'>
          <div className='navLogo'>
            <BandLogo padding='0' text='Angebot' fontSize='1.3vw' onClick={() => scrollTo('angebot')} cursor='pointer' />
          </div>
        </div>
        <div className='centerLogo'>
          <img src='logo192.png' alt='bandlogo'/>
          <div className='centerLogoText'>
            <a href='/' style={{ textDecoration: 'none' }}>
              <BandLogo padding='0' fontSize='1.3vw' cursor='pointer'/>
            </a>
          </div>
        </div>
        <div className='navContainer'>
          <div className='navLogo'>
            <BandLogo padding='0' text='Über uns' fontSize='1.3vw' onClick={() => scrollTo('wir')} cursor='pointer' />
            <a href='/wir' style={{ textDecoration: 'none' }}>
              <BandLogo padding='5px' text='Die Band' fontSize='0.8vw' cursor='pointer' />
            </a>
          </div>
        </div>
        <div className='navContainer'>
          <div className='navLogo'>
            <BandLogo padding='0' text='Kontakt' fontSize='1.3vw' onClick={() => scrollTo('kontakt')} cursor='pointer' />
            <a href='/kontakt' style={{ textDecoration: 'none' }}>
              <BandLogo padding='5px' text='Kontaktformular' fontSize='0.8vw' cursor='pointer' />
            </a>
          </div>
        </div>
      </div>
      <div className='desktopBarGradient' />
    </div>
  )
}

function mobileBar(navigate) {
  return (
    <div className='mobileBar'>
      <BandLogo fontSize='8vw' cursor='pointer' onClick={() => navigate('/')} />
      <div className='imgContainer'>
        <img src='Logo.png' alt='Bandlogo' onClick={() => navigate('/')} />
      </div>
    </div>
  )
}

function TitleBar() {
  let navigate = useNavigate()
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopBar(navigate)
        :
        mobileBar(navigate)
      }
    </>
  )
}

export default TitleBar