// Canvas component and hook copped from Lucas Miranda - https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
import { useRef, useEffect } from 'react'

const useCanvas = draw => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    resizeCanvas(canvas)

    const context = canvas.getContext('2d')

    draw(context)
  }, [])

  return canvasRef
}

function resizeCanvas(canvas) {
  // width & height defined by CSS on canvas component instance
  const { width, height } = canvas.getBoundingClientRect()

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
    return true // here you can return some usefull information like delta width and delta height instead of just true
    // this information can be used in the next redraw...
  }

  return false
}

export default useCanvas
