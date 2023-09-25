import React, { useEffect } from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './GalleryPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import { ImageCard, VideoCard } from '../Components/ImageCard';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';
import AudioPlayer from '../Components/AudioPlayer';
import constants from './Constants.json'
import { useLocation, useNavigate } from 'react-router-dom';

function GalleryPage() {
  const isDesktop = isBrowser || isTablet
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.state?.location) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      navigate(location.pathname, { replace: true, state: { retLocation: location.state.location } })
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src={constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <div className='pageContentContainer'>
          <Header text='Galerie' fontSize={isDesktop ? '350%' : '200%'} paddingBottom='0' />
          <Header text='Videos' fontSize={isDesktop ? '200%' : '150%'} sub paddingBottom='5vw' />
          <div className='contentContainer-3'>
            <VideoCard text={<>Major Tom<br />JuHa Neuried - März 2023</>} thumbnail='bg/bw.jpg' fontSize='medium' domain='YouTube' vid='https://www.youtube.com/embed/dQw4w9WgXcQ?si=xWIxTEDuoBNsi3nL' />
            <VideoCard text={<>Disney Medley<br />40 Jahre Westpark - Juli 2023</>} thumbnail='bg/bw.jpg' fontSize='medium' domain='YouTube' vid='https://www.youtube.com/embed/wpV-gGA4PSk?si=9QYx_u2Yh5CwOTVh' />
            <VideoCard text={<>Irgendwie, Irgendwo, Irgendwann<br />Musikalisches Weinfest - Mai 2023</>} thumbnail='bg/bw.jpg' fontSize='medium' domain='YouTube' />
            <VideoCard text={<>Alles Neu<br />40 Jahre westpark - Juli 2023</>} thumbnail='bg/bw.jpg' fontSize='medium' domain='YouTube' />
            <VideoCard text={<>Timewarp<br />Musikalisches Weinfest - Mai 2023</>} thumbnail='bg/bw.jpg' fontSize='medium' domain='YouTube' />
          </div>
          <div className='sectionWrapper'>
            <div className='sectionContent'>
              <Header text='Fotos' fontSize={isDesktop ? '200%' : '150%'} sub paddingBottom='5vw' />
              <div className='contentContainer-3'>
                <ImageCard text='40 Jahre Westpark' backgroundColor='darkred' fontSize='medium' />
                <ImageCard text='Musikalisches Weinfest 2023' backgroundColor='darkred' fontSize='medium' />
                <ImageCard text='JuHa Neuried 2023' backgroundColor='darkred' fontSize='medium' />
              </div>
            </div>
            <div className='sectionImgContainer'>
              <img src={constants.staticBgBW} alt='background' />
            </div>
          </div>
          <Header text='Studio' fontSize={isDesktop ? '200%' : '150%'} sub paddingBottom='5vw' />
          <div className='audioWrapper'>
            <AudioPlayer title="Don't stop believing" src='audio/dontstopbelieving.mp3' />
          </div>
          <BackToMainPage retLocation={location.state?.retLocation} />
          <div style={{ paddingBottom: '30px' }} />
        </div>
        <PageFooter />
      </div>
    </>
  )
}

export default GalleryPage