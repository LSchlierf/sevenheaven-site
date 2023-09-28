import './BandLogo.css'

function BandLogo(props) {
  const inputText = props.text?.toUpperCase() || "SEVEN HEAVEN"
  const fontSize = props.fontSize || "11vw"
  const color = props.color || 'white'
  const backgroundColor = props.backgroundColor || 'black'
  const padding = props.padding || '20px'
  const onClick = props.onClick
  const cursor = props.cursor || 'auto'
  const styleElement = {
    backgroundColor: backgroundColor,
    padding: padding,
    fontSize: fontSize,
    color: color,
    cursor: cursor,
  }
  return (
    <div className={'bandLogo'} style={styleElement} onClick={onClick}>
      {inputText}
    </div>
  )
}

export default BandLogo