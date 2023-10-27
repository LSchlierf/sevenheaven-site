import React from 'react';
import './legals.css'
import TitleBar from '../Components/TitleBar';
import constants from './Constants.json';
import PageFooter from '../Components/PageFooter';
import BackToMainPage from '../Components/BackToMainPage';

function DataProtectionPage() {
  return (
    <>
      <TitleBar />
      <div className='bgImgContainer'>
        <img srcSet={constants.imgSizes.map(size => '/img/' + size.toString() + '/' + constants.staticBg + ' ' + size.toString() + 'w').join(', ')} src={'/img/original/' + constants.staticBg} alt='background' />
      </div>
      <div className='subPageContent'>
        <div className='legalTextWrapper'>
          <div className='legalText'>
            <u>Datenschutzerklärung</u>
            <br /><br />
            Folgt in Kürze.
          </div>
        </div>
        <BackToMainPage />
        <div style={{ paddingBottom: '30px' }} />
        <PageFooter />
      </div>
    </>
  )
}

export default DataProtectionPage