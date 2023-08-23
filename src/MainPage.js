import { isBrowser, isTablet, } from 'react-device-detect'
import React, { useState } from 'react';
import TitleBar from './TitleBar';
import './MainPage.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs"
import { TiMail } from "react-icons/ti"
import { IconContext } from 'react-icons/lib';
import Header from './Header';
import ImageCard from './ImageCard';
import PageFooter from './PageFooter';
import BandLogo from './BandLogo';

let imagesM = ['bg/2.jpeg', 'bg/0.jpg', 'bg/1.JPG']

function getImages(input, className) {
  return input.map((src, index) => <img className={className} id={'bg' + index} src={src} alt='background' key={index} />)
}

function desktopPage(img, setImg, menu, setMenu) {
  return mobilePage(img, setImg, menu, setMenu)
  return (
    <>
      <TitleBar />
    </>
  )
}

function mobilePage(img, setImg, menu, setMenu) {

  function slideLeft() {
    const list = document.getElementsByClassName('bg')
    for (let item of list) {
      item.classList.add('animate-to-left')
    }
    const imagesMNew = [img[img.length - 1], ...img.slice(0, img.length - 1)]
    setImg(imagesMNew)

    setTimeout(() => {
      for (let item of list) {
        item.classList.remove('animate-to-left')
      }
    }, 400)
  }

  function slideRight() {
    const list = document.getElementsByClassName('bg')
    for (let item of list) {
      item.classList.add('animate-to-right')
    }
    const imagesMNew = [...img.slice(1, img.length), img[0]]
    setImg(imagesMNew)

    setTimeout(() => {
      for (let item of list) {
        item.classList.remove('animate-to-right')
      }
    }, 400)
  }

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
    toggleBurger()
    const element = document.getElementById(id)
    const titleBar = document.getElementsByClassName('mobileBar')[0]
    const offset = 80 - titleBar.getBoundingClientRect().bottom
    const y = element.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({top: y, behavior: 'smooth'})
  }

  return (
    <>
      <TitleBar />
      <div className='imgCyclerM'>
        {img}
      </div>
      <div className='landingContent'>
        <IconContext.Provider value={{ color: 'white', size: 30 }}>
          <div className='goLeft'>
            <FaChevronLeft onClick={slideLeft} />
          </div>
          <div className='goRight'>
            <FaChevronRight onClick={slideRight} />
          </div>
        </IconContext.Provider>
        <div className='burger' onClick={toggleBurger}>
          <div className='burgerLine' id='burger0' />
          <div className='burgerLine' id='burger1' />
          <div className='burgerLine' id='burger2' />
        </div>
        {menu
          ?
          <div className='menu'>
            <div className='menuImgContainer'>
              <img src='Logo.png' alt='Bandlogo' />
            </div>
            <div className='menuItem'>
              <BandLogo text='Home' fontSize='6vw' padding='10px' backgroundColor='rgba(0,0,0,0)' onClick={toggleBurger}/>
            </div>
            <div className='menuItem'>
              <BandLogo text='Musik' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' onClick={() => scrollTo('musik')} />
              <a href='/galerie' style={{textDecoration: 'none'}}>
                <BandLogo text='Galerie' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' />
              </a>
              <a href='/repertoire' style={{textDecoration: 'none'}}>
                <BandLogo text='Repertoire' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' />
              </a>
            </div>
            <div className='menuItem'>
              <BandLogo text='Angebot' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' onClick={() => scrollTo('angebot')}/>
            </div>
            <div className='menuItem'>
              <BandLogo text='Über uns' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' onClick={() => scrollTo('wir')}/>
              <a href='/wir' style={{textDecoration: 'none'}}>
                <BandLogo text='Die Band' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' />
              </a>
            </div>
            <div className='menuItem'>
              <BandLogo text='Kontakt' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' onClick={() => scrollTo('kontakt')}/>
              <a href='/kontakt' style={{textDecoration: 'none'}}>
                <BandLogo text='Kontaktformular' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' />
              </a>
            </div>
          </div>
          : <></>
        }
      </div >
      <div className='scrollContent' >
        <Header text='musik' id='musik'/>
        <ImageCard text='40-jähriges Westpark Jubiläum (Highlights)' />
        <ImageCard text='Musikalisches Weinfest 2023 (Highlights)' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'large' }} >
            Willst du noch mehr von uns sehen? <a href='/galerie'>Hier</a> sind weitere Videos und Fotos.
          </div>
        </div>
        <ImageCard text='Wir erweitern unser Repertoire regelmäßig. Vielleicht sind ja auch ein paar Deiner Lieblingssongs dabei?' fontSize='medium' />
        <Header text='Angebot' fontSize='7.5vw' id='angebot'/>
        <ImageCard text='Auf deinem Dorffest/Weinfest oder in deinem Bierzelt sorgen wir für die richtige Stimmung' fontSize='medium' backgroundColor='darkred' />
        <ImageCard text='Zu einer guten Hochzeit gehört Tanz, Stimmung und ein Hauch Romantik. Wir liefern die perfekte Kombi.' fontSize='medium' backgroundColor='darkred' />
        <ImageCard text='Musik vom Handy ist Dir für Deine Feier nicht mehr genug? Greife doch auf eine Live-Band zurück.' fontSize='medium' backgroundColor='darkred' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'darkred', fontsize: 'large' }} >
            Interesse? Kontaktiere uns gerne <a href='/kontakt'>hier</a>.
          </div>
        </div>
        <Header text='Über uns' fontSize='7vw' id='wir'/>
        <ImageCard text='Auf der Bühne treten wir nicht nur als Band, sondern auch als Freundesgruppe auf. Seit 2019 sorgen wir auf diese Weise in und um München für die beste Unterhaltung. Mit fünfstimmigen Gesangssätzen, rockigen Gitarrensounds und abwechslungsreichen Arrangements haben wir uns zum Ziel gesetzt, einzigartige Erlebnisse für das Publikum zu schaffen.' fontSize='medium' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'medium' }} >
            <a href='/wir'>Hier</a> erfährst du mehr über unsere einzelnen Bandmitglieder.
          </div>
        </div>
        <Header text='Kontakt' fontSize='7.5vw' id='kontakt'/>
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'darkred', fontSize: 'large' }} >
            Schreibe uns eine Nachricht!
          </div>
        </div>
        <div className='socials'>
          <span className='socialContainer' id='insta'>
            <div className='iconContainer'>
              <a className='icon' href='https://instagram.com/sevenheaven.band' target='_blank' rel='noopener noreferrer'>
                <IconContext.Provider value={{ color: 'white', size: '12vw' }} >
                  <BsInstagram />
                </IconContext.Provider>
              </a>
            </div>
            <a href='https://instagram.com/sevenheaven.band' target='_blank' rel='noopener noreferrer'>
              @sevenheaven.band
            </a>
          </span>
          <span className='socialContainer' id='mail'>
            <div className='iconContainer'>
              <a className='icon' href='mailto:sevenheaven.partyband@gmail.com'>
                <IconContext.Provider value={{ color: 'white', size: '15vw', style: { 'paddingBottom': '2vw' } }} >
                  <TiMail />
                </IconContext.Provider>
              </a>
            </div>
            <a href='mailto:sevenheaven.partyband@gmail.com'>sevenheaven.partyband@gmail.com</a>
          </span>
        </div>
        <PageFooter />
      </div>
    </>
  )
}

function MainPage() {
  const [img, setImg] = useState(getImages(imagesM, 'bg'))
  const [menu, setMenu] = useState(false)
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopPage(img, setImg, menu, setMenu)
        :
        mobilePage(img, setImg, menu, setMenu)
      }
    </>
  );
}

export default MainPage