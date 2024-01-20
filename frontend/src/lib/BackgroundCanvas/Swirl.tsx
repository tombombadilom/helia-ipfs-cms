// Swirl.js
import React, { useRef, useEffect } from 'react'
import {
  lerp,
  fadeInOut,
  randRange,
  TAU,
  renderToScreen,
  renderGlow,
  checkBounds,
  rand
} from './SwirlUtils'
import { useWindowSize } from '@react-hook/window-size'
import Worker from './Swirl.worker?worker'

interface SwirlPropTypes {
  particleCount?: number
  rangeY?: number
  baseTTL?: number
  rangeTTL?: number
  baseSpeed?: number
  rangeSpeed?: number
  baseRadius?: number
  rangeRadius?: number
  baseHue?: number
  rangeHue?: number
  noiseSteps?: number
  xOff?: number
  yOff?: number
  zOff?: number
  backgroundColor?: string
  loop?: boolean
}



const Swirl = ({
  particleCount = 700,
  rangeY = 100,
  baseTTL = 50,
  rangeTTL = 150,
  baseSpeed = 0.1,
  rangeSpeed = 2,
  baseRadius = 1,
  rangeRadius = 4,
  baseHue = 220,
  rangeHue = 100,
  noiseSteps = 8,
  xOff = 0.00125,
  yOff = 0.00125,
  zOff = 0.0005,
  backgroundColor = 'hsla(260,40%,5%,0)',
  loop = false,
}: SwirlPropTypes) => {
  const worker = useRef(new Worker())
  const canvasARef = useRef<HTMLCanvasElement>(null)
  const canvasBRef = useRef<HTMLCanvasElement>(null)
  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {

    worker.current.postMessage({
      particleCount: 700,
      rangeY: 100,
      baseTTL: 50,
      rangeTTL: 150,
      baseSpeed: 0.1,
      rangeSpeed: 2,
      baseRadius: 1,
      rangeRadius: 4,
      baseHue: 220,
      rangeHue: 100,
      noiseSteps: 8,
      xOff: 0.00125,
      yOff: 0.00125,
      zOff: 0.0005,
      backgroundColor: 'hsla(260,40%,5%,0)',
      loop: false
    })

    // Handle messages from the worker
    worker.current.addEventListener('message', (e {
      // Handle worker messages
    })

    return () => {
      // Clean up worker
      worker.current.terminate()
    }
  }, [])

  return (
    <div className="content--canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    >
      <canvas ref={canvasARef} />
      <canvas
        ref={canvasBRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}

export default Swirl
