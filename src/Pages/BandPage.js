import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './BandPage.css'
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
        <Header text='Die Band' fontSize='8vw' paddingBottom='0' />
        <div className='portraits'>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter text={<>Lucas Schlierf<div className='subText'>Leadgesang</div></>} />
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter text={<>Luisa Loher<div className='subText'>Leadgesang</div></>} />
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter text={<>Florian Döhr<div className='subText'>Leadgitarre</div></>} />
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter text={<>Leo Hellerer<div className='subText'>Rhythmusgitarre + Bass</div></>} />
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter text={<>Julian Höflmaier<div className='subText'>Bass + Gesang</div></>} />
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter text={<>Daniel Bopp<div className='subText'>Schlagzeug + Gesang</div></>} />
          </div>
          <div className='portraitWrapper'>
            <ImageCard version='portrait' fontSize='smaller' noCenter text={<>Jakob Friederich<div className='subText'>Piano + Gesang</div></>} />
          </div>
        </div>
        <div style={{paddingBottom: 30}} />
        <BackToMainPage backgroundColor='darkred'/>
        <div style={{ paddingBottom: '10vh' }} />
        <PageFooter />
      </div>
    </>
  )
}

function BandPage() {
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

export default BandPage