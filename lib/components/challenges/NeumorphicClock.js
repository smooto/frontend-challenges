import styled from 'styled-components'
import Canvas from '../common/Canvas'

const ClockFace = styled.div`
  height: 500px;
  width: 500px;
  background-color: #E6E6FA;
  border-radius: 100%;
`

const ClockNumbers = styled(Canvas)`
  height: 500px;
  width: 500px;
`

export default function NeumorphicClock() {
  const draw = ctx => {
    let radius = 250;
    ctx.translate(radius, radius);
    radius = radius * 0.90

    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  return (
    <ClockFace>
      <ClockNumbers draw={draw} />
    </ClockFace>
  )
}
