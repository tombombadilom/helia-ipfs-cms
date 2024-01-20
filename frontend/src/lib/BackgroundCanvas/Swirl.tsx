import React, { useEffect, useState } from 'react';
import { Swirl as OriginalSwirl } from 'react-ambient-canvas-backgrounds';
import { useTheme } from '../ThemeProvider';
//import { SwirlPropTypes } from './custom-types.d.ts';
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

const Swirl: React.FC<SwirlPropTypes> = (props) => {
    // Utiliser le composant OriginalSwirl avec les props passées.
    return <OriginalSwirl {...props} backgroundColor={props.backgroundColor as "hsla(260,40%,5%,1)"}/>;
};

const MyCanvas = () => {
  const [backgroundColor, setBackgroundColor] = useState('var(--background-canvas)');
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
  const { isDarkMode } = useTheme();
  useEffect(() => {
    setBackgroundColor(isDarkMode ? 'var(--background-canvas)' : 'var(--background-canvas)');
  }, [isDarkMode]);

  console.log();
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
        backgroundColor={backgroundColor}
        xOff={xOff}
        yOff={yOff}
        zOff={zOff}
      />
  )
}
export default MyCanvas;