import styled from 'styled-components'
import Canvas from '../common/Canvas'

const ClockFace = styled(Canvas)`
  height: 500px;
  width: 500px;
`

export default function NeumorphicClock () {
  const draw = ctx => {
    let radius = 250;
    ctx.translate(radius, radius);
    radius = radius * 0.90
    ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
  }

  return (
    <ClockFace draw={draw} />
  )
}
