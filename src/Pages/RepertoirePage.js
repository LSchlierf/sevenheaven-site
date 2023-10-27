import React, { useEffect } from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './RepertoirePage.css'
import TitleBar from '../Components/TitleBar';
import Headliners from './repertoire/RepertoireHeadliners.json'
import Repertoire from './repertoire/Repertoire.json'
import Header from '../Components/Header';
import BackToMainPage from '../Components/BackToMainPage';
import PageFooter from '../Components/PageFooter';
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from 'react-icons';
import constants from './Constants.json'
import { useLocation, useNavigate } from 'react-router-dom';
import BurgerMenu from '../Components/BurgerMenu';
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
  if (item.songs.length === 0) {
    return (<></>)
  }
  return (
    <div className='repertoireItem' key={index}>
      <div className='repertoireLetter'>
        {item.letter}
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
      <BurgerMenu />
      <div className='bgImgContainer'>
        <img srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + constants.staticBg + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <div className='pageContentContainer'>
          <Header text='Repertoire' fontSize={isDesktop ? '250%' : '150%'} paddingBottom='0' />
          <div className='repertoireHeadliners'>
            {
              Headliners.map((item, index) => RepertoireCard(item.title, item.songs, index))
            }
          </div>
          <div className='moreRepertoire' onClick={gotoRepertoire}>
            <IconContext.Provider value={{ color: 'white', size: 40 }}>
              <BsChevronDown />
              <div className='moreRepertoireText'>
                Hier findest Du unsere gesame Songliste
              </div>
              <BsChevronDown />
            </IconContext.Provider>
          </div>
          <div style={{ padding: '25px' }} />
          <BackToMainPage backgroundColor='darkred' retLocation={location.state?.retLocation} />
          <div className='repertoire'>
            {
              Repertoire.map(RepertoireItem)
            }
          </div>
          <div style={{ padding: '3vw' }} />
          <BackToMainPage retLocation={location.state?.retLocation} />
          <div style={{ padding: '30px' }} />
        </div>
        <PageFooter />
      </div>
    </>
  )
}

export default RepertoirePage