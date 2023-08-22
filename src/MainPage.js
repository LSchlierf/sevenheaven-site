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

let imagesM = ['bg/2.jpeg', 'bg/0.jpg', 'bg/1.JPG']

function desktopPage(img, setImg) {
  return mobilePage(img, setImg)
  return (
    <>
      <TitleBar />
    </>
  )
}

function mobilePage(img, setImg) {
  function getImages() {
    return img.map((src, index) => <img className='bg' id={'bg' + index} src={src} alt='background' key={index}/>)
  }

  function slideLeft() {
    const list = document.getElementsByClassName('bg')
    for(let item of list) {
      item.classList.add('animate-to-left')
    }
    const imagesMNew = [img[img.length - 1], ...img.slice(0, img.length - 1)]
    setImg(imagesMNew)

    setTimeout(() => {
      for(let item of list) {
        item.classList.remove('animate-to-left')
      }
    }, 400)
  }

  function slideRight() {
    const list = document.getElementsByClassName('bg')
    for(let item of list) {
      item.classList.add('animate-to-right')
    }
    const imagesMNew = [...img.slice(1, img.length), img[0]]
    setImg(imagesMNew)

    setTimeout(() => {
      for(let item of list) {
        item.classList.remove('animate-to-right')
      }
    }, 400)
  }

  return (
    <>
      <TitleBar />
      <div className='imgCyclerM'>
        {getImages()}
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
      </div>
      <div className='scrollContent' >
        <Header text='musik' />
        <ImageCard text='40-jähriges Westpark Jubiläum (Highlights)' />
        <ImageCard text='Musikalisches Weinfest 2023 (Highlights)' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'large' }} >
            Willst du noch mehr von uns sehen? <a href='/galerie'>Hier</a> sind weitere Videos und Fotos.
          </div>
        </div>
        <ImageCard text='Wir erweitern unser Repertoire regelmäßig. Vielleicht sind ja auch ein paar Deiner Lieblingssongs dabei?' fontSize='medium' />
        <Header text='Angebot' fontSize='7.5vw' />
        <ImageCard text='Auf deinem Dorffest/Weinfest oder in deinem Bierzelt sorgen wir für die richtige Stimmung' fontSize='medium' backgroundColor='darkred' />
        <ImageCard text='Zu einer guten Hochzeit gehört Tanz, Stimmung und ein Hauch Romantik. Wir liefern die perfekte Kombi.' fontSize='medium' backgroundColor='darkred' />
        <ImageCard text='Musik vom Handy ist Dir für Deine Feier nicht mehr genug? Greife doch auf eine Live-Band zurück.' fontSize='medium' backgroundColor='darkred' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'darkred', fontsize: 'large' }} >
            Interesse? Kontaktiere uns gerne <a href='/kontakt'>hier</a>.
          </div>
        </div>
        <Header text='Über uns' fontSize='7vw' />
        <ImageCard text='Auf der Bühne treten wir nicht nur als Band, sondern auch als Freundesgruppe auf. Seit 2019 sorgen wir auf diese Weise in und um München für die beste Unterhaltung. Mit fünfstimmigen Gesangssätzen, rockigen Gitarrensounds und abwechslungsreichen Arrangements haben wir uns zum Ziel gesetzt, einzigartige Erlebnisse für das Publikum zu schaffen.' fontSize='medium' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5)', fontSize: 'medium' }} >
            <a href='/wir'>Hier</a> erfährst du mehr über unsere einzelnen Bandmitglieder.
          </div>
        </div>
        <Header text='Kontakt' fontSize='7.5vw' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'darkred', fontSize: 'large' }} >
            Schreibe uns eine Nachricht!
          </div>
        </div>
        <div className='socials'>
          <span className='socialContainer'>
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
          <span className='socialContainer'>
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
  const [img, setImg] = useState(imagesM)
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopPage(img, setImg)
        :
        mobilePage(img, setImg)
      }
    </>
  );
}

export default MainPage