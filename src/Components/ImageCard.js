import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './ImageCard.css'

function desktopPage(props) {
  return mobilePage(props)
  return (
    <>
    </>
  )
}

function mobilePage(props) {
  const img = props.img || 'placeholder.png'
  const text = props.text || 'placeholder text lorem ipsum dolor sit amet'
  const fontSize = props.fontSize || 'larger'
  const backgroundColor = props.backgroundColor || 'black'
  const styleElement = {
    fontSize: fontSize,
    backgroundColor: backgroundColor
  }
  return (
    <div className='imageCardWrapper' >
      <div className='imageCard'>
        <img src={img} alt='card' />
      </div>
      <div className='caption'>
        <div className='textContainer' style={styleElement}>
          {text}
        </div>
      </div>
    </div>
  )
}

function ImageCard(props) {
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

export default ImageCard