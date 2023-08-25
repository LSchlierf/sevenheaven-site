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
  const version = props.version || 'normal'
  const height = { 'normal': '55%', 'portrait': '180%' }[version]
  const textAlign = { 'normal': 'center', 'portrait': '' }[version]
  const styleElement = {
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    textAlign: textAlign
  }
  return (
    <div className='imageCardWrapperWrapper'>
      {
        version === 'portrait' ?
          (
            <div className='imageCardWrapper' style={{ paddingBottom: height }} >
              <div className='imageCard'>
                <div className='imageWrapper'>
                  <img src={img} alt='card' />
                </div>
                <div className='caption'>
                  <div className='textContainer' style={styleElement}>
                    {text}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className='imageCardWrapper' style={{ paddingBottom: height }} >
                <div className='imageCard'>
                  <div className='imageWrapper'>
                    <img src={img} alt='card' />
                  </div>
                </div>
              </div>
              <div className='caption'>
                <div className='textContainer' style={styleElement}>
                  {text}
                </div>
              </div>
            </>
          )
      }
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