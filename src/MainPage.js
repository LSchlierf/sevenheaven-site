import { isBrowser, isTablet, } from 'react-device-detect'
import React from 'react';
import TitleBar from './TitleBar';

function desktopPage() {
  return (
    <>
      <TitleBar/>
    </>
  )
}

function mobilePage() {
  return (
    <>
      <TitleBar/>
    </>
  )
}

function MainPage() {
  return (
    <>
    { (isBrowser || isTablet) ?
      desktopPage()
      :
      mobilePage()
    }
    </>
  );
}

export default MainPage