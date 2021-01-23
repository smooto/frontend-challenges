// Canvas component and hook copped from Lucas Miranda - https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
import useCanvas from '../../hooks/useCanvas'

const Canvas = props => {
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)

  return <canvas ref={canvasRef} {...rest} />
}

export default Canvas
