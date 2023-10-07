import React, { useEffect, useState } from 'react';
import { isBrowser, isTablet } from 'react-device-detect'
import './GalleryPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import { ImageCard } from '../Components/ImageCard';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';
import constants from './Constants.json'
import concerts from './Gallery.json'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const isDesktop = isBrowser || isTablet

function ConcertGallery() {
  let [largeImg, setLargeImg] = useState(<></>)

  function makeLargeImg(img) {
    setLargeImg(
      <div className='largeImg' onClick={() => setLargeImg(<></>)}>
        <img src={img} alt='' />
      </div>
    )
  }

  function galleryCard(img, index) {
    return (
      <div className='galleryWrapper' key={index}>
        <img src={img} alt='' onClick={isDesktop ? () => makeLargeImg(img) : () => { }} />
      </div>
    )
  }

  let params = useParams()
  if (!params.concert || !concerts[params.concert]) {
    return
  }
  const concert = concerts[params.concert]

  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src={constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        {largeImg}
        <div className='pageContentContainer'>
          <Header text={concert.title} fontSize={isDesktop ? '200%' : '100%'} paddingBottom='0' />
          <div className='contentContainer-3'>
            {concert.images.map(galleryCard)}
          </div>
          <BackToMainPage to='/galerie' text='Zurück zur Galerie' />
          <div style={{ paddingBottom: '30px' }} />
        </div>
        <PageFooter />
      </div>
    </>
  )
}

function GalleryPage() {
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
          <div className='sectionWrapper'>
            <div className='sectionContent'>
              <div style={{ padding: '30px' }} />
              <div className='contentContainer-3'>
                <ImageCard onClick={() => navigate('/galerie/juha')} cursor='pointer' text='JuHa Neuried 2023' backgroundColor={isDesktop ? 'black' : 'darkred'} fontSize='medium' />
                <ImageCard onClick={() => navigate('/galerie/interim')} cursor='pointer' text='Interim Laim 2023' backgroundColor={isDesktop ? 'black' : 'darkred'} fontSize='medium' />
                <ImageCard text='40 Jahre Westpark' backgroundColor={isDesktop ? 'black' : 'darkred'} fontSize='medium' />
                <ImageCard text='Musikalisches Weinfest 2023' backgroundColor={isDesktop ? 'black' : 'darkred'} fontSize='medium' />
              </div>
            </div>
            <div className='sectionImgContainer'>
              {
                isDesktop ? <></> : <img src={constants.staticBgBW} alt='background' />
              }
            </div>
          </div>
          <BackToMainPage retLocation={location.state?.retLocation} />
          <div style={{ paddingBottom: '30px' }} />
        </div>
        <PageFooter />
      </div>
    </>
  )
}

export { GalleryPage, ConcertGallery }