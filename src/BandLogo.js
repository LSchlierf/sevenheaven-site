import './BandLogo.css'

function renderText(inputText, fontSize, color) {
  const styleElement = {
    fontSize: fontSize,
    color: color
  }
  let output = []
  let inputRest = inputText
  let nextIndex = 0
  while(inputRest) {
    if (inputRest.charAt(0) === 'A') {
      nextIndex = inputRest.search("[^A]")
      if(nextIndex === -1) {
        output.push(<div className='BandLogoV' style={styleElement} key={output.length.toString()}>{"V".repeat(inputRest.length)}</div>)
        inputRest = ""
      } else {
        output.push(<div className='BandLogoV' style={styleElement} key={output.length.toString()}>{"V".repeat(nextIndex)}</div>)
        inputRest = inputRest.substring(nextIndex)
      }
    } else {
      nextIndex = inputRest.search("A")
      if (nextIndex === -1) {
        output.push(<div className='BandLogoNormal' style={styleElement} key={output.length.toString()}>{inputRest}</div>)
        inputRest = ""
      } else {
        output.push(<div className='BandLogoNormal' style={styleElement} key={output.length.toString()}>{inputRest.substring(0, nextIndex)}</div>)
        inputRest = inputRest.substring(nextIndex)
      }
    }
  }

  return output
}

function BandLogo(props) {
  const inputText = props.text?.toUpperCase() || "SEVEN HEAVEN"
  const fontSize = props.fontSize || "11vw"
  const color = props.color || 'white'
  const backgroundColor = props.backgroundColor || 'black'
  const wrapperStyleElement = {
    backgroundColor: backgroundColor
  }

  return (
    <div className='BandLogoWrapper' style={wrapperStyleElement}>
      {renderText(inputText, fontSize, color)}
    </div>
  )
}

export default BandLogo