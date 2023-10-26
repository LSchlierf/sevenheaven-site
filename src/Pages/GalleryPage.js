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

  document.onkeydown = (e) => {
    if (e.code === "Escape") {
      setLargeImg(<></>)
    }
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
          <div className='contentContainer'>
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
  function galleryPreview(concert, index) {
    return (
      <div className='imageCardWrapperWrapper' onClick={() => navigate('/galerie/' + concert[0])} key={index}>
        <div className='imageCardWrapper' style={{ paddingBottom: '55%', cursor: 'pointer' }} >
          <div className='imageCard'>
            <div className='imageWrapper'>
              <img src={concert[1].thumbnail} alt='card' />
            </div>
            <div className='galleryOverlay' >
              <img src='/img/photo-gallery-icon.svg' />
            </div>
          </div>
        </div>
        <div className='caption' style={{ cursor: 'pointer' }}>
          <div className='textContainer' style={{ backgroundColor: 'black', textAlign: 'center' }}>
            {concert[1].preview}
          </div>
        </div>
      </div>
    )
  }

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
              {/* <div style={{ padding: '30px' }} /> */}
              <div className='contentContainer-3'>
                {Object.entries(concerts).map(galleryPreview)}
              </div>
            </div>
            {/* <div className='sectionImgContainer'>
              {
                isDesktop ? <></> : <img src={constants.staticBgBW} alt='background' />
              }
            </div> */}
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