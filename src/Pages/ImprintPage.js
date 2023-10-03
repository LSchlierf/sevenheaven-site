import React from 'react';
import './legals.css'
import TitleBar from '../Components/TitleBar';
import constants from './Constants.json';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';

function ImprintPage() {
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img src={constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <div className='legalTextWrapper'>
          <div className='legalText'>
            Verantwortlich für den Inhalt dieser Seite:
            <br />
            Lucas Schlierf
            <br />
            Klingerstraße 31
            <br />
            81369 München
            <br />
            <br />
            Bei Fragen oder Hinweisen zum Inhalt wenden Sie sich bitte an <a href='mailto:sevenheaven.partyband@gmail.com'>
              sevenheaven.partyband@gmail.com
            </a>.
          </div>
        </div>
        <BackToMainPage />
        <div style={{ paddingBottom: '30px' }} />
        <PageFooter />
      </div>
    </>
  )
}

export default ImprintPage