import React, { useEffect, useState } from 'react';
import { isBrowser, isTablet } from 'react-device-detect'
import './GalleryPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';
import constants from './Constants.json'
import concerts from './Gallery.json'
import { useLocation, useNavigate, useParams, Link } from 'react-router-dom';
import BurgerMenu from '../Components/BurgerMenu';
import { BsArrowLeft } from "react-icons/bs";
import { IconContext } from 'react-icons';
import { VideoCard } from '../Components/ImageCard';
const isDesktop = isBrowser || isTablet

function ConcertGallery() {
  let [largeImg, setLargeImg] = useState(<></>)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  function makeLargeImg(img) {
    setLargeImg(
      <div className='largeImg' onClick={() => setLargeImg(<></>)}>
        <img srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + img + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + img} alt='' />
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
        <img sizes='(min-width: 768px) 400px, 90vw' srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + img + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + img} alt='' onClick={isDesktop ? () => makeLargeImg(img) : () => { }} />
      </div>
    )
  }

  let params = useParams()
  if (!params?.concert || !concerts[params.concert]) {
    window.location = '/galerie'
    return
  }
  const concert = concerts[params.concert]

  return (
    <>
      <TitleBar />
      <BurgerMenu />
      <div className='bgImgContainer'>
        <img srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + constants.staticBgBW + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + constants.staticBgBW} alt='background' />
      </div>
      <div className='subPageContent'>
        {largeImg}
        <div className='pageContentContainer'>
          <Header text={concert.title} fontSize={isDesktop ? '200%' : '100%'} paddingBottom='0' />
          <div className='galleryContent'>
            {concert.images.map(galleryCard)}
          </div>
          <Link className='backWrapper' style={{ backgroundColor: 'darkred', fontSize: isDesktop ? '30px' : '5vw', textDecoration: 'none' }} to={'/galerie'} state={{ location: location.state?.location }}>
            <div className='backIcon'>
              <IconContext.Provider value={{ color: 'white', size: (isDesktop ? 50 : 30) }}>
                <BsArrowLeft />
              </IconContext.Provider>
            </div>
            <div className='backText'>
              Zurück zur Galerie
            </div>
            {
              isDesktop ? (
                <div style={{ width: '50px' }} />
              ) : (<></>)
            }
          </Link>
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
      <div className='imageCardWrapperWrapper' onClick={() => navigate('/galerie/' + concert[0], { state: { location: location.state?.location } })} key={index}>
        <div className='imageCardWrapper' style={{ paddingBottom: '55%', cursor: 'pointer' }} >
          <div className='imageCard'>
            <div className='imageWrapper'>
              <img sizes='(min-width: 768px) 25vw, 90vw' srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + concert[1].thumbnail + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + concert[1].thumbnail} alt='card' />
            </div>
            <div className='galleryOverlay' >
              <img src='/img/photo-gallery-icon.svg' alt='' />
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
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <TitleBar />
      <BurgerMenu />
      <div className='bgImgContainer'>
        <img srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + constants.staticBg + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <div className='pageContentContainer'>
          <Header text='Galerie' fontSize={isDesktop ? '350%' : '200%'} paddingBottom='0' />
          <div className='contentContainer-3'>
            <Header sub text='Fotos' fontSize={isDesktop ? '40px' : '150%'} paddingBottom={isDesktop ? "40px" : "30px"} />
            {Object.entries(concerts).map(galleryPreview)}
            <Header sub text='Videos' fontSize={isDesktop ? '40px' : '150%'} paddingBottom={isDesktop ? "40px" : "30px"} />
            <VideoCard vid='https://www.youtube.com/embed/qWwdPrLqDso?si=fCnIT9igCO999ylX' text={<>Inside Seven Heaven<br />(Part 1)</>} thumbnail='thumbnails/inside1.jpg' domain='YouTube' />
            <VideoCard vid='https://www.youtube.com/embed/fqxEIZ4eg38?si=SgePP1OxdlPuEnjp' text={<>Inside Seven Heaven<br />(Part 2)</>} thumbnail='thumbnails/inside2.jpg' domain='YouTube' />
            <VideoCard vid='https://www.youtube.com/embed/9AU7nnl1-mk?si=QQ-UNfkHshuFIaMr' text={<>Inside Seven Heaven<br />(Part 3)</>} thumbnail='thumbnails/inside3.jpg' domain='YouTube' />
          </div>
          <BackToMainPage retLocation={location.state?.location} />
          <div style={{ paddingBottom: '30px' }} />
        </div>
        <PageFooter />
      </div>
    </>
  )
}

export { GalleryPage, ConcertGallery }