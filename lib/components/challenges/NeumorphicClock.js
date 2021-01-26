import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Canvas from '../common/Canvas'

const ClockFace = styled.div`
  position: relative;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  background-color: #E6E6FA;
  border-radius: 100%;
`

const ClockNumbers = styled(Canvas)`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`

const SecondsHand = styled.div`
  position: absolute;
  height: 150px;
  width: 3px;
  background-color: black;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(${props => props.angle}deg);
`

const MinutesHand = styled.div`
  position: absolute;
  height: 150px;
  width: 5px;
  background-color: black;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(${props => props.angle}deg);
`

const HoursHand = styled.div`
  position: absolute;
  height: 150px;
  width: 7px;
  background-color: black;
  left: 50%;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(${props => props.angle}deg);
`

export default function NeumorphicClock({ size = 500 }) {
  // hook source: https://productoptimist.com/start-using-react-hooks-a-clock-timer-example/
  function useNewTime(currentDate) {
    const [date, setDate] = useState(currentDate);
    
    useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    
    function tick() {
      setDate(new Date());
     }
    
    return date;
  }

  const date = useNewTime(new Date());

  const drawNumbers = ctx => {
    let radius = size / 2;
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
    <ClockFace size={size}>
      <SecondsHand angle={date.getSeconds() * 6} />
      <MinutesHand angle={date.getMinutes() * 6} />
      <HoursHand angle={date.getHours() * 30} />
      <ClockNumbers size={size} draw={drawNumbers} />
    </ClockFace>
  )
}
