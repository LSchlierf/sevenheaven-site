import './BandLogo.css'

function BandLogo(props) {
  const inputText = props.text?.toUpperCase() || "SEVEN HEAVEN"
  const fontsize = props.fontsize || "11vw"
  const styleElement = {
    fontSize: fontsize,
  }
  let outputText = []
  let inputRest = inputText
  let nextIndex = 0
  while(inputRest) {
    if (inputRest.charAt(0) === 'A') {
      nextIndex = inputRest.search("[^A]")
      if(nextIndex === -1) {
        outputText.push(<div className='BandLogoV' style={styleElement}>{"V".repeat(inputRest.length)}</div>)
        inputRest = ""
      } else {
        outputText.push(<div className='BandLogoV' style={styleElement}>{"V".repeat(nextIndex)}</div>)
        inputRest = inputRest.substring(nextIndex)
      }
    } else {
      nextIndex = inputRest.search("A")
      if (nextIndex === -1) {
        outputText.push(<div className='BandLogoNormal' style={styleElement}>{inputRest}</div>)
        inputRest = ""
      } else {
        outputText.push(<div className='BandLogoNormal' style={styleElement}>{inputRest.substring(0, nextIndex)}</div>)
        inputRest = inputRest.substring(nextIndex)
      }
    }
  }

  return (
    <div className='BandLogoWrapper'>
      {outputText}
    </div>
  )
}

export default BandLogo