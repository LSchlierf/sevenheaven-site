import { isBrowser, isTablet, } from 'react-device-detect'
import React, { useState } from 'react';
import TitleBar from './TitleBar';
import './MainPage.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IconContext } from 'react-icons/lib';
import Header from './Header';
import ImageCard from './ImageCard';

let imagesM = ['bg/0.jpg', 'bg/1.JPG', 'bg/2.jpeg']

function desktopPage(img, setImg) {
  return mobilePage(img, setImg)
  return (
    <>
      <TitleBar />
    </>
  )
}

function mobilePage(img, setImg) {
  return (
    <>
      <TitleBar />
      <div className='imgCyclerM'>
        <img src={imagesM[img]} alt='bg' />
      </div>
      <div className='landingContent'>
        <IconContext.Provider value={{ color: 'white', size: 30 }}>
          <div className='goLeft'>
            <FaChevronLeft onClick={() => setImg((img - 1 + imagesM.length) % imagesM.length)} />
          </div>
          <div className='goRight'>
            <FaChevronRight onClick={() => setImg((img + 1) % imagesM.length)} />
          </div>
        </IconContext.Provider>
      </div>
      <div className='scrollContent' >
        <Header text='musik' />
        <ImageCard text='40-jähriges Westpark Jubiläum (Highlights)' />
        <ImageCard text='Musikalisches Weinfest 2023 (Highlights)' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'rgba(0,0,0,0.5', fontSize: 'large' }} >
            Willst du noch mehr von uns sehen? <a href='/galerie'>Hier</a> sind weitere Videos und Fotos.
          </div>
        </div>
        <ImageCard text='Wir erweitern unser Repertoire regelmäßig. Vielleicht sind ja auch ein paar Deiner Lieblingssongs dabei?' fontSize='medium'/>
        <Header text='Angebot' fontSize='8vw' />
        <ImageCard text='Auf deinem Dorffest/Weinfest oder in deinem Bierzelt sorgen wir für die richtige Stimmung' fontSize='medium' backgroundColor='darkred' />
        <ImageCard text='Zu einer guten Hochzeit gehört Tanz, Stimmung und ein Hauch Romantik. Wir liefern die perfekte Kombi.' fontSize='medium' backgroundColor='darkred' />
        <ImageCard text='Musik vom Handy ist Dir für Deine Feier nicht mehr genug? Greife doch auf eine Live-Band zurück.' fontSize='medium' backgroundColor='darkred' />
        <div className='textBoxWrapper'>
          <div className='textBox' style={{ background: 'darkred', fontsize: 'large' }} >
            Interesse? Kontaktiere uns gerne <a href='/kontakt'>hier</a>.
          </div>
        </div>
      </div>
    </>
  )
}

function MainPage() {
  const [img, setImg] = useState(0)
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