import React, { useState } from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import { useNavigate } from 'react-router-dom';
import BandLogo from '../Components/BandLogo';
import './BurgerMenu.css'

function BurgerMenu() {
  const isDesktop = isBrowser || isTablet
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)

  function toggleBurger() {
    setMenu(!menu)
    const list = document.getElementsByClassName('burgerLine')

    for (let item of list) {
      item.classList.toggle('down')
      item.classList.add('animating')
    }

    setTimeout(() => {
      for (let item of list) {
        item.classList.remove('animating')
      }
    }, 400)
  }

  function scrollTo(id) {
    if (window.location.pathname === '/') {
      const element = document.getElementById(id)
      const titleBar = document.getElementsByClassName('mobileBar')[0]
      const offset = 80 - titleBar.getBoundingClientRect().bottom
      const y = element.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    } else {
      navigate('/', {state: {location: id}})
    }
  }

  return (
    <>
      {isDesktop ? <></> : (
        <div className='burger' onClick={toggleBurger}>
          <div className='burgerLine' id='burger0' />
          <div className='burgerLine' id='burger1' />
          <div className='burgerLine' id='burger2' />
        </div>
      )
      }

      {menu && !isDesktop
        ?
        <div className='menu'>
          <div className='menuImgContainer'>
            <img src='/logo192.png' alt='Bandlogo' />
          </div>
          <div className='menuItem'>
            <BandLogo text='Home' fontSize='6vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => {
              toggleBurger()
              if(window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              } else {
                navigate('/')
              }
            }} />
          </div>
          {/* <div className='menuItem'>
            <BandLogo text='Aktuelles' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollTo('aktuelles') }} />
          </div> */}
          <div className='menuItem'>
            <BandLogo text='Musik' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollTo('musik') }} />
            <a href='/galerie' style={{ textDecoration: 'none' }}>
              <BandLogo text='Galerie' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
            </a>
            <a href='/repertoire' style={{ textDecoration: 'none' }}>
              <BandLogo text='Repertoire' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
            </a>
          </div>
          <div className='menuItem'>
            <BandLogo text='Angebot' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollTo('angebot') }} />
          </div>
          <div className='menuItem'>
            <BandLogo text='Über uns' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollTo('wir') }} />
            <a href='/wir' style={{ textDecoration: 'none' }}>
              <BandLogo text='Die Band' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
            </a>
          </div>
          <div className='menuItem'>
            <BandLogo text='Kontakt' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollTo('kontakt') }} />
            <a href='/kontakt' style={{ textDecoration: 'none' }}>
              <BandLogo text='Kontaktformular' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
            </a>
          </div>
        </div>
        : <></>
      }
    </>
  )
}

export default BurgerMenu