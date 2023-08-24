import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import BandLogo from './BandLogo';
import './Header.css'

function desktopPage(props) {
  return mobilePage(props)
  return (
    <>
    </>
  )
}

function mobilePage(props) {
  const paddingBottom = props.paddingBottom || '10vw'
  const styleElement = {
    paddingBottom: paddingBottom
  }
  return (
    <div className={'headerWrapper' + (props.sub ? ' sub' : '')} id={props.id} style={styleElement}>
      <span className='gradientL'/>
      <span className='titleWrapper'>
        <BandLogo text={props.text} fontSize={props.fontSize} backgroundColor='rgba(0,0,0,0)'/>
      </span>
      <span className='gradientR'/>
    </div>
  )
}

function Header(props) {
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopPage(props)
        :
        mobilePage(props)
      }
    </>
  )
}

export default Header