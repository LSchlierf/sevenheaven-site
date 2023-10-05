import React, { useEffect, useState } from 'react';
import './ImageCard.css'
import { v4 as uuid } from 'uuid'

function ImageCard(props) {
  const img = props.img || 'placeholder.png'
  const text = props.text || 'placeholder text lorem ipsum dolor sit amet'
  const fontSize = props.fontSize || 'larger'
  const backgroundColor = props.backgroundColor || 'black'
  const height = '55%'
  const textAlign = 'center'
  const styleElement = {
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    textAlign: textAlign
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

function PortraitCard(props) {
  const img = props.img || 'placeholder.png'
  const text = props.text || 'placeholder text lorem ipsum dolor sit amet'
  const fontSize = props.fontSize || 'larger'
  const backgroundColor = props.backgroundColor || 'black'
  const height = '180%'
  const styleElement = {
    fontSize: fontSize,
    backgroundColor: backgroundColor
  }
  return (
    <div className='imageCardWrapper' style={{ paddingBottom: height }} >
      <div className='imageCard'>
        <div className='imageWrapper'>
          <img src={img} alt='card' />
          <div className='caption transparent'>
            <div className='textContainer' style={styleElement}>
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function VideoCard(props) {
  const vid = props.vid || 'https://www.youtube.com/embed/TApmI8YtYhc?si=xzFtA1pWDk0bj66u'
  const text = props.text || 'placeholder text lorem ipsum dolor sit amet'
  const fontSize = props.fontSize || 'larger'
  const backgroundColor = props.backgroundColor || 'black'
  const height = '55%'
  const textAlign = 'center'
  const thumbnail = props.thumbnail || ''
  const styleElement = {
    fontSize: fontSize,
    backgroundColor: backgroundColor,
    textAlign: textAlign
  }
  const id = uuid()
  const video = <div className='videoWrapper'><iframe width="100%" height="100%" src={vid} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen /></div>
  const disclaimer = <div className='disclaimerWrapper'><div className='thumbnail'><img src={thumbnail} alt='' /></div><div className='disclaimer'>Externer Inhalt von {props.domain}.</div><div className='showVideo' id={id}>Anzeigen</div></div>
  const [content, setContent] = useState(disclaimer)
  useEffect(() => {
    document.getElementById(id).onclick = () => setContent(video)
    // eslint-disable-next-line
  }, [])
  return (
    <div className='imageCardWrapperWrapper'>
      <div className='imageCardWrapper' style={{ paddingBottom: height }} >
        <div className='imageCard'>
          {content}
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

export { ImageCard, PortraitCard, VideoCard }