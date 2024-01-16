import React from 'react'
import {Swirl} from 'react-ambient-canvas-backgrounds'

function MyDropzone() {
  const particleCount = 700;
  const rangeY = 100;
  const baseTTL = 150;
  // const rangeTTL = 150;
  // const baseSpeed = 0.1;
  const rangeSpeed = 2;
  const baseRadius = 1;
  const rangeRadius = 4;
  const baseHue = 500;
  const rangeHue = 100;
  const noiseSteps = 8;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.00125;

  return (
    <Swirl
        particleCount={particleCount}
        rangeY={rangeY}
        baseTTL={baseTTL}
        baseSpeed={rangeSpeed}
        rangeSpeed={rangeSpeed}
        baseRadius={baseRadius}
        rangeRadius={rangeRadius}
        baseHue={baseHue}
        rangeHue={rangeHue}
        noiseSteps={noiseSteps}
        xOff={xOff}
        yOff={yOff}
        zOff={zOff}
      />
  )
}
export default MyDropzone;