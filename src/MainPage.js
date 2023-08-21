import { isBrowser, isTablet, } from 'react-device-detect'
import React, { useState } from 'react';
import TitleBar from './TitleBar';
import './MainPage.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IconContext } from 'react-icons/lib';

let imagesM = ['bg/0.jpg', 'bg/1.JPG', 'bg/2.jpg']

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

/*
Layers:

burger                4
nav overlay           3
title bar             2
left right anfragen   1
Main content          0
bg img                -1
*/