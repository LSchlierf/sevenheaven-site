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
import BurgerMenu from '../Components/BurgerMenu';

function getImages(input, className) {
  return input.map((src, index) => <img className={className} id={'bg' + index} srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + src + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + src} alt='background' key={index} />)
}

function MainPage() {
  const isDesktop = isBrowser || isTablet
  const [img, setImg] = useState(getImages(isDesktop ? constants.cyclerD : constants.cyclerM, 'bg'))
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

  function stickyClick(href, id) {
    return () => navigate(href, { state: { location: id } })
  }

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
      <BurgerMenu />
      <div className='cyclerBgImgContainer'>
        <img className='cyclerBgImg' srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + constants.staticBg + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + constants.staticBg} alt='background' />
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
        <div className='contactWrapper'>
          <div className='contact'>
            <a href='/kontakt' style={{ textDecoration: 'none' }}>
              <BandLogo text='Anfragen' fontSize={isDesktop ? '35px' : '120%'} backgroundColor='rgba(0,0,0,0)' cursor='pointer' />
            </a>
          </div>
        </div>
      </div >
      <div className='scrollContent' >
        <Header text='aktuelles' id='aktuelles' fontSize={isDesktop ? '60px' : '200%'} paddingBottom={isDesktop ? "40px" : "30px"} />
        <div className='contentContainer-3'>
          <ImageCard img='posters/juha.jpg' text='Im Januar ist es endlich so weit! Ihr könnt uns im Juha wieder live erleben. Wir freuen uns auf die Party!' vertical />
        </div>
        <Header text='musik' id='musik' fontSize={isDesktop ? '60px' : '200%'} paddingBottom={isDesktop ? "40px" : "30px"} />
        <div className='contentContainer'>
          <VideoCard vid='https://www.youtube.com/embed/j6pDTYMMN7o?si=mEWEJK5ZGlRIHqyF' text={<>40-jähriges Westpark Jubiläum 2023<br />(Highlights)</>} thumbnail='thumbnails/westpark.jpg' domain='YouTube' />
          <VideoCard vid='https://www.youtube.com/embed/urSar1gnXOQ?si=DQh8lAVymiEx-CFJ' text={<>Konzert Jugendhaus Neuried 2023<br />(Highlights)</>} thumbnail='thumbnails/juha.jpg' domain='YouTube' />
        </div>
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'large' }} onClick={stickyClick('/galerie', 'musik')}>
            Willst du noch mehr von uns sehen? {stickyLink('Hier', '/galerie', 'musik')} sind weitere Fotos.
          </div>
        </div>
        <div className='contentContainer'>
          <ImageCard img='repertoire.jpg' text='Wir erweitern unser Repertoire regelmäßig. Vielleicht sind ja auch ein paar Deiner Lieblingssongs dabei?' fontSize='medium' />
        </div>
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'large' }} onClick={stickyClick('/repertoire', 'musik')}>
            Eine Übersicht über unser Repertoire findest du {stickyLink('hier', '/repertoire', 'musik')}.
          </div>
        </div>
        <div className='sectionWrapper'>
          <div className='sectionContent'>
            <Header text='Angebot' id='angebot' fontSize={isDesktop ? '60px' : '200%'} paddingBottom={isDesktop ? "40px" : "30px"} />
            <div className='contentContainer-3'>
              <ImageCard img='itsMyLife.jpg' text='Auf deinem Dorffest/Weinfest oder in deinem Bierzelt sorgen wir für die richtige Stimmung.' fontSize='medium' backgroundColor={isDesktop ? 'black' : 'darkred'} />
              <ImageCard img='stimmung.jpg' text='Zu einer guten Hochzeit gehören Tanz, Stimmung und ein Hauch Romantik. Wir liefern die perfekte Kombi.' fontSize='medium' backgroundColor={isDesktop ? 'black' : 'darkred'} />
              <ImageCard img='liveBand.jpg' text='Musik vom Handy ist Dir für Deine Feier nicht mehr genug? Greife doch auf eine Live-Band zurück.' fontSize='medium' backgroundColor={isDesktop ? 'black' : 'darkred'} />
              <div className='textBoxWrapper'>
                <div className='textBox' style={{ background: isDesktop ? 'rgba(0,0,0,0.5)' : 'darkred', fontSize: 'large' }} onClick={stickyClick('/kontakt', 'angebot')}>
                  Interesse? Kontaktiere uns gerne {stickyLink('hier', '/kontakt', 'angebot')}.
                </div>
              </div>
            </div>
          </div>
          <div className='sectionImgContainer'>
            {
              isDesktop ? <></> : <img srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + constants.staticBgBW + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + constants.staticBgBw} alt='background' />
            }
          </div>
        </div>
        <Header text='Über uns' id='wir' fontSize={isDesktop ? '60px' : '200%'} paddingBottom={isDesktop ? "40px" : "30px"} />
        <div className='contentContainer'>
          <ImageCard img='friends.jpg' text='Auf der Bühne treten wir nicht nur als Band, sondern auch als Freundesgruppe auf. Seit 2019 sorgen wir als Coverband auf diese Weise in und um München für die beste Unterhaltung. Mit fünfstimmigen Gesangssätzen, rockigen Gitarrensounds und abwechslungsreichen Arrangements haben wir uns zum Ziel gesetzt, einzigartige Erlebnisse für das Publikum zu schaffen.' fontSize='medium' padding='10px 20px' />
        </div>
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'medium' }} onClick={stickyClick('/wir', 'wir')}>
            {stickyLink('Hier', '/wir', 'wir')} erfährst du mehr über unsere einzelnen Bandmitglieder.
          </div>
        </div>
        <Header text='Kontakt' id='kontakt' fontSize={isDesktop ? '60px' : '200%'} paddingBottom={isDesktop ? "40px" : "30px"} />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'darkred', fontSize: 'large' }} onClick={stickyClick('/kontakt', 'kontakt')}>
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