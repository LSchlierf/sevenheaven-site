import { isBrowser, isTablet, } from 'react-device-detect'
import React from 'react';
import BandLogo from './BandLogo';

function MainPage() {
  return (
    <>
    { (isBrowser || isTablet) ?
      <div>
        <BandLogo/>
      </div>
      :
      <div>
        <BandLogo/>
      </div>
    }
    </>
  );
}

export default MainPage