import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './GalleryPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import ImageCard from '../Components/ImageCard';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';

function desktopPage() {
  return mobilePage()
  return (
    <>
    </>
  )
}

function mobilePage() {
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src='bg/0.jpg' alt='background' />
      </div>
      <div className='subPageContent'>
        <Header text='Galerie' fontSize='9vw' paddingBottom='0'/>
        <Header text='Videos' fontSize='6vw' sub paddingBottom='5vw'/>
        <ImageCard text={<>Major Tom<br/>JuHa Neuried - März 2023</>} fontSize='medium'/>
        <ImageCard text={<>Disney Medley<br/>40 Jahre Westpark - Juli 2023</>} fontSize='medium'/>
        <ImageCard text={<>Irgendwie, Irgendwo, Irgendwann<br/>Musikalisches Weinfest - Mai 2023</>} fontSize='medium'/>
        <ImageCard text={<>Alles Neu<br/>40 Jahre westpark - Juli 2023</>} fontSize='medium'/>
        <ImageCard text={<>Timewarp<br/>Musikalisches Weinfest - Mai 2023</>} fontSize='medium'/>
        <Header text='Fotos' fontSize='6vw' sub paddingBottom='5vw'/>
        <ImageCard text='40 Jahre Westpark' backgroundColor='darkred' fontSize='medium'/>
        <ImageCard text='Musikalisches Weinfest 2023' backgroundColor='darkred' fontSize='medium'/>
        <ImageCard text='JuHa Neuried 2023' backgroundColor='darkred' fontSize='medium'/>
        <Header text='Studio' fontSize='6vw' sub paddingBottom='5vw'/>
        Todo: Studioaufnahmen einfügen
        <BackToMainPage/>
        <div style={{paddingBottom: '10vh'}}/>
        <PageFooter />
      </div>
    </>
  )
}

function GalleryPage() {
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopPage()
        :
        mobilePage()
      }
    </>
  )
}

export default GalleryPage