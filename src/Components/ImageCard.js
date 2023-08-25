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
  const vid = props.vid || 'https://www.youtube.com/embed/TApmI8YtYhc?si=xzFtA1pWDk0bj66u'
  const text = props.text || 'placeholder text lorem ipsum dolor sit amet'
  const fontSize = props.fontSize || 'larger'
  const backgroundColor = props.backgroundColor || 'black'
  const version = props.version || 'normal'
  const height = { 'normal': '55%', 'portrait': '180%', 'video': '55%' }[version]
  const textAlign = { 'normal': 'center', 'portrait': '', 'video': 'center' }[version]
  const styleElement = {
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    textAlign: textAlign
  }
  if (version === 'portrait') {
    return (
      <div className='imageCardWrapperWrapper'>
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
      </div>
    )
  }
  if (version === 'video') {
    return (
      <div className='imageCardWrapperWrapper'>
        <div className='imageCardWrapper' style={{ paddingBottom: height }} >
          <div className='imageCard'>
            <iframe width="100%" height="100%" src={vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          </div>
        </div>
        <div className='caption'>
          <div className='textContainer' style={styleElement}>
            {text}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='imageCardWrapperWrapper'>
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