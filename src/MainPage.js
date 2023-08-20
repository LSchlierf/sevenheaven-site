import { isBrowser, isTablet, } from 'react-device-detect'
import React from 'react';
import BandLogo from './BandLogo';

function MainPage() {
  return (
    <>
    { (isBrowser || isTablet) ?
      <div>
        <BandLogo text='Hallo desktop' fontsize='10vw'/>
      </div>
      :
      <div>
        <BandLogo text='Hallo mobile'/>
      </div>
    }
    </>
  );
}

export default MainPage