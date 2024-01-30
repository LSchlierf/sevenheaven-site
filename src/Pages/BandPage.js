import React, { useEffect } from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './BandPage.css'
import TitleBar from '../Components/TitleBar';
import Header from '../Components/Header';
import { PortraitCard } from '../Components/ImageCard';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';
import constants from './Constants.json'
import { useLocation, useNavigate } from 'react-router-dom';
import BurgerMenu from '../Components/BurgerMenu';

function BandPage() {
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
  const bgColor = 'rgba(0,0,0,0.5)'
  return (
    <>
      <TitleBar />
      <BurgerMenu />
      <div className='bgImgContainer'>
        <img srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + constants.staticBg + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <div className='pageContentContainer'>
          <Header text='Die Band' fontSize={isDesktop ? '300%' : '200%'} paddingBottom='0' />
          <div className='portraits'>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Luisa Loher<div className='subText'>Leadgesang</div></>} img='band/Luisa.jpg' />
            </div>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Lucas Schlierf<div className='subText'>Leadgesang</div></>} img='band/Lucas.jpg' />
            </div>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Florian Döhr<div className='subText'>Leadgitarre</div></>} img='band/Florian.jpg' />
            </div>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Leo Hellerer<div className='subText'>Rhythmusgitarre + Bass</div></>} img='band/Leo.jpg' />
            </div>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Julian Höflmaier<div className='subText'>Bass + Gesang</div></>} img='band/Julian.jpg' />
            </div>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Daniel Bopp<div className='subText'>Schlagzeug + Gesang</div></>} img='band/Daniel.jpg' />
            </div>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Jakob Friederich<div className='subText'>Piano + Gesang</div></>} img='band/Jakob.jpg' />
            </div>
          </div>
          <Header text='Die Crew' fontSize={isDesktop ? '300%' : '200%'} paddingBottom='0' />
          <div className='portraits'>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Patrick Friemelt<div className='subText'>Tontechnik</div></>} img='band/Patrick.jpg' />
            </div>
            <div className='portraitWrapper'>
              <PortraitCard version='portrait' fontSize='smaller' noCenter backgroundColor={bgColor} text={<>Ylai Elsler<div className='subText'>Tontechnik</div></>} img='band/Ylai.jpg' />
            </div>
          </div>
          <div style={{ paddingBottom: 30 }} />
          <BackToMainPage backgroundColor='darkred' retLocation={location.state?.retLocation} />
          <div style={{ paddingBottom: '30px' }} />
        </div>
        <PageFooter />
      </div>
    </>
  )
}

export default BandPage