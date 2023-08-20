import React from 'react';
import { isBrowser, isTablet, } from 'react-device-detect'

function desktopPage() {
  return (
    <>
    </>
  )
}

function mobilePage() {
  return (
    <>
    </>
  )
}

function RepertoirePage() {
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

export default RepertoirePage