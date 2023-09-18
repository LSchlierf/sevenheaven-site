import React, { useEffect } from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './RepertoirePage.css'
import TitleBar from '../Components/TitleBar';
import Headliners from './repertoire/RepertoireHeadliners.json'
import Repertoire from './repertoire/Repertoire.json'
import Header from '../Components/Header';
import BandLogo from '../Components/BandLogo';
import BackToMainPage from '../Components/BackToMainPage';
import PageFooter from '../Components/PageFooter';
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from 'react-icons';
import constants from './Constants.json'
import { useLocation, useNavigate } from 'react-router-dom';
const isDesktop = isBrowser || isTablet

function RepertoireCard(title, songs, index) {
  return (
    <div className='repertoireCard' key={index}>
      <div className='repertoireTitle'>
        {title}
      </div>
      <div className='repertoireContent'>
        {
          songs.map((item, index) => {
            return (
              <div className='repertoireSong' key={index}>
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function RepertoireItem(item, index) {
  const noCenter = isDesktop ? false : true
  if (item.songs.length === 0) {
    return (<></>)
  }
  return (
    <div className='repertoireItem' key={index}>
      <div className='repertoireLetter'>
        <BandLogo noCenter={noCenter} text={item.letter} backgroundColor='rgba(0,0,0,0)' padding='0' fontSize={isDesktop ? '500%' : '300%'} />
      </div>
      <div className='repertoireSongs'>
        {item.songs.map((item, index) => {
          return (
            <div className='repertoireSong' key={index}>
              {item.title} - {item.artist}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function gotoRepertoire() {
  const element = document.getElementsByClassName('repertoire')[0]
  let offset = 0
  if (!isDesktop) {
    const titleBar = document.getElementsByClassName('mobileBar')[0]
    offset = 30 - titleBar.getBoundingClientRect().bottom
  }
  const y = element.getBoundingClientRect().top + window.scrollY + offset
  window.scrollTo({ top: y, behavior: 'smooth' })
}

function RepertoirePage() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.state?.location) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      navigate(location.pathname, { replace: true, state: { retLocation: location.state.location } })
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src={constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <Header text='Repertoire' fontSize={isDesktop ? '250%' : '150%'} paddingBottom='0' />
        <div className='repertoireHeadliners'>
          {
            Headliners.map((item, index) => RepertoireCard(item.title, item.songs, index))
          }
        </div>
        <div style={{ padding: '0px' }} />
        <div className='moreRepertoire' onClick={gotoRepertoire}>
          <IconContext.Provider value={{ color: 'white', size: 40 }}>
            <BsChevronDown />
            <div className='moreRepertoireText'>
              Hier findest Du unsere gesame Songliste
            </div>
            <BsChevronDown />
          </IconContext.Provider>
        </div>
        <div style={{ padding: '3vw' }} />
        <BackToMainPage backgroundColor='darkred' retLocation={location.state?.retLocation} />
        <div className='repertoire'>
          {
            Repertoire.map(RepertoireItem)
          }
        </div>
        <div style={{ padding: '3vw' }} />
        <BackToMainPage retLocation={location.state?.retLocation} />
        <div style={{ padding: '3vw' }} />
        <PageFooter />
      </div>
    </>
  )
}

export default RepertoirePage