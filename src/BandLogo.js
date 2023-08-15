import './BandLogo.css'

function BandLogo(props) {
  const fontsize = props.fontsize || 35
  const styleElement = {
    fontSize: fontsize + 'px',
  }
  return (
    <div className='BandLogoWrapper'>
      <div className='BandLogoNormal' style={styleElement}>SEVEN HE</div>
      <div className='BandLogoV' style={styleElement}>V</div>
      <div className='BandLogoNormal' style={styleElement}>VEN</div>
    </div>
  )
}

export default BandLogo