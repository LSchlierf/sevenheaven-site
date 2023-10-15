import { isBrowser, isTablet, } from 'react-device-detect'
import React, { useEffect, useState } from 'react';
import './MainPage.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IconContext } from 'react-icons/lib';
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import { ImageCard, VideoCard } from '../Components/ImageCard';
import PageFooter from '../Components/PageFooter';
import BandLogo from '../Components/BandLogo';
import Socials from '../Components/Socials';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import constants from './Constants.json'

function getImages(input, className) {
  return input.map((src, index) => <img className={className} id={'bg' + index} src={src} alt='background' key={index} />)
}

function MainPage() {
  const isDesktop = isBrowser || isTablet
  const [img, setImg] = useState(getImages(isDesktop ? constants.cyclerD : constants.cyclerM, 'bg'))
  const [menu, setMenu] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

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

  document.onkeydown = (e) => {
    switch (e.code) {
      case 'ArrowLeft':
        slideLeft()
        break
      case 'ArrowRight':
        slideRight()
        break
      default:
        break
    }
  }

  function scrollToM(id) {
    const element = document.getElementById(id)
    const titleBar = document.getElementsByClassName('mobileBar')[0]
    const offset = 80 - titleBar.getBoundingClientRect().bottom
    const y = element.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  function scrollToD(id) {
    const element = document.getElementById(id)
    const offset = -0
    const y = element.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  useEffect(() => {
    if (location.state?.location) {
      if (isDesktop) {
        scrollToD(location.state.location)
      } else {
        scrollToM(location.state.location)
      }
      navigate(location.pathname, { replace: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    // eslint-disable-next-line
  }, [])

  function stickyLink(text, href, id) {
    return (
      <Link to={href} state={{ location: id }}>
        {text}
      </Link>
    )
  }

  return (
    <>
      <TitleBar />
      <div className='cyclerBgImgContainer'>
        <img className='cyclerBgImg' src={constants.staticBg} alt='background' />
      </div>
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
        {isDesktop ? <></> : (
          <div className='burger' onClick={toggleBurger}>
            <div className='burgerLine' id='burger0' />
            <div className='burgerLine' id='burger1' />
            <div className='burgerLine' id='burger2' />
          </div>
        )
        }
        <div className='contactWrapper'>
          <div className='contact'>
            <a href='/kontakt' style={{ textDecoration: 'none' }}>
              <BandLogo text='Anfragen' fontSize={isDesktop ? '35px' : '120%'} backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
            </a>
          </div>
        </div>
        {menu && !isDesktop
          ?
          <div className='menu'>
            <div className='menuImgContainer'>
              <img src='logo192.png' alt='Bandlogo' />
            </div>
            <div className='menuItem'>
              <BandLogo text='Home' fontSize='6vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => {
                toggleBurger()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }} />
            </div>
            <div className='menuItem'>
              <BandLogo text='Musik' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollToM('musik') }} />
              <a href='/galerie' style={{ textDecoration: 'none' }}>
                <BandLogo text='Galerie' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
              </a>
              <a href='/repertoire' style={{ textDecoration: 'none' }}>
                <BandLogo text='Repertoire' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
              </a>
            </div>
            <div className='menuItem'>
              <BandLogo text='Angebot' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollToM('angebot') }} />
            </div>
            <div className='menuItem'>
              <BandLogo text='Über uns' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollToM('wir') }} />
              <a href='/wir' style={{ textDecoration: 'none' }}>
                <BandLogo text='Die Band' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
              </a>
            </div>
            <div className='menuItem'>
              <BandLogo text='Kontakt' fontSize='6vw' padding='0' backgroundColor='rgba(0,0,0,0)' cursor='pointer' onClick={() => { toggleBurger(); scrollToM('kontakt') }} />
              <a href='/kontakt' style={{ textDecoration: 'none' }}>
                <BandLogo text='Kontaktformular' fontSize='3vw' padding='10px' backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
              </a>
            </div>
          </div>
          : <></>
        }
      </div >
      <div className='scrollContent' >
        <Header text='musik' id='musik' fontSize={isDesktop ? '400%' : '300%'} paddingBottom={isDesktop ? "60px" : "10vw"} />
        <div className='contentContainer'>
          <VideoCard vid='https://www.youtube.com/embed/j6pDTYMMN7o?si=mEWEJK5ZGlRIHqyF' text={<>40-jähriges Westpark Jubiläum 2023<br />(Highlights)</>} thumbnail='thumbnails/westpark.jpg' domain='YouTube' />
          <VideoCard vid='https://www.youtube.com/embed/urSar1gnXOQ?si=DQh8lAVymiEx-CFJ' text={<>Konzert Jugendhaus Neuried 2023<br />(Hightlights)</>} thumbnail='thumbnails/juha.jpg' domain='YouTube' />
        </div>
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'large' }} >
            Willst du noch mehr von uns sehen? {stickyLink('Hier', '/galerie', 'musik')} sind weitere Fotos.
          </div>
        </div>
        <div className='contentContainer'>
          <ImageCard text='Wir erweitern unser Repertoire regelmäßig. Vielleicht sind ja auch ein paar Deiner Lieblingssongs dabei?' fontSize='medium' />
        </div>
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'large' }} >
            Eine Übersicht über unser Repertoire findest du {stickyLink('hier', '/repertoire', 'musik')}.
          </div>
        </div>
        <div className='sectionWrapper'>
          <div className='sectionContent'>
            <Header text='Angebot' id='angebot' fontSize={isDesktop ? '350%' : '200%'} paddingBottom={isDesktop ? "60px" : "10vw"} />
            <div className='contentContainer-3'>
              <ImageCard img='img/itsMyLife.PNG' text='Auf deinem Dorffest/Weinfest oder in deinem Bierzelt sorgen wir für die richtige Stimmung' fontSize='medium' backgroundColor={isDesktop ? 'black' : 'darkred'} />
              <ImageCard img='img/stimmung.JPG' text='Zu einer guten Hochzeit gehören Tanz, Stimmung und ein Hauch Romantik. Wir liefern die perfekte Kombi.' fontSize='medium' backgroundColor={isDesktop ? 'black' : 'darkred'} />
              <ImageCard img='img/liveBand.JPG' text='Musik vom Handy ist Dir für Deine Feier nicht mehr genug? Greife doch auf eine Live-Band zurück.' fontSize='medium' backgroundColor={isDesktop ? 'black' : 'darkred'} />
            </div>
            <div className='textBoxWrapper'>
              <div className='textBox' style={{ background: isDesktop ? 'rgba(0,0,0,0.5)' : 'darkred', fontsize: 'large' }} >
                Interesse? Kontaktiere uns gerne {stickyLink('hier', '/kontakt', 'angebot')}.
              </div>
            </div>
          </div>
          <div className='sectionImgContainer'>
            {
              isDesktop ? <></> : <img src={constants.staticBgBW} alt='background' />
            }
          </div>
        </div>
        <Header text='Über uns' id='wir' fontSize={isDesktop ? '350%' : '200%'} paddingBottom={isDesktop ? "60px" : "10vw"} />
        <div className='contentContainer'>
          <ImageCard img='img/friends.JPG' text='Auf der Bühne treten wir nicht nur als Band, sondern auch als Freundesgruppe auf. Seit 2019 sorgen wir auf diese Weise in und um München für die beste Unterhaltung. Mit fünfstimmigen Gesangssätzen, rockigen Gitarrensounds und abwechslungsreichen Arrangements haben wir uns zum Ziel gesetzt, einzigartige Erlebnisse für das Publikum zu schaffen.' fontSize='medium' padding='10px 20px'/>
        </div>
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'medium' }} >
            {stickyLink('Hier', '/wir', 'wir')} erfährst du mehr über unsere einzelnen Bandmitglieder.
          </div>
        </div>
        <Header text='Kontakt' id='kontakt' fontSize={isDesktop ? '350%' : '200%'} paddingBottom={isDesktop ? "60px" : "10vw"} />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'darkred', fontSize: 'large' }} >
            {stickyLink('Schreibe uns eine Nachricht!', '/kontakt', 'kontakt')}
          </div>
        </div>
        <Socials />
        <PageFooter />
      </div>
    </>
  )
}

export default MainPage