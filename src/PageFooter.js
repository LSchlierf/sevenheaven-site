import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'
import './PageFooter.css'

function desktopPage() {
  return mobilePage()
  return (
    <>
    </>
  )
}

function mobilePage() {
  return (
    <div className='footer'>
      <div className='footerGradient' />
      <div className='legalWrapper'>
        <div className='legalContainer'>
          <a href='/impressum' className='legal'>
            Impressum
          </a>
        </div>
        <div className='legalContainer'>
          <a href='/datenschutz' className='legal'>
            Datenschutz
          </a>
        </div>
      </div>
    </div>
  )
}

function PageFooter() {
  return (
    <>
      {(isBrowser || isTablet) ?
        desktopPage()
        :
        mobilePage()
      }
    </>
  )
}

export default PageFooter