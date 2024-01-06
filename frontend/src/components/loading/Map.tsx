import React, { useState, useEffect, useRef, useCallback } from 'react';
import { generateColorRange } from '../../lib/colors';

interface Circle {
  x: number;
  y: number;
}
const originalWidth = 1200; // Original SVG width
const originalHeight = 840; // Original SVG height
const originalAspectRatio = originalWidth / originalHeight;

const uniqueColors: string[] = generateColorRange('#007FDD', '#B2D17C', 33);

// Assume originalCircles contains the original positions of the circles
const originalCircles: Circle[] = [
  { x: 972, y: 573.7 },
  { x: 1025.6, y: 654.8 },
  { x: 998.8, y: 654.8 },
  { x: 972, y: 654.8 },
  { x: 945.2, y: 654.8 },
  { x: 918.4, y: 654.8 },
  { x: 945.2, y: 546.6 },
  { x: 650.5, y: 546.6 },
  { x: 623.7, y: 654.8 },
  { x: 596.9, y: 573.7 },
  { x: 677.3, y: 573.7 },
  { x: 650.5, y: 573.7 },
  { x: 623.7, y: 573.7 },
  { x: 596.9, y: 573.7 },
  { x: 436.2, y: 573.7 },
  { x: 409.4, y: 573.7 },
  { x: 382.6, y: 573.7 },
  { x: 355.8, y: 573.7 },
  { x: 329, y: 573.7 },
  { x: 998.8, y: 546.6 },
  { x: 677.3, y: 546.6 },
  { x: 623.7, y: 546.6 },
  { x: 596.9, y: 546.6 },
  { x: 436.2, y: 546.6 },
  { x: 409.4, y: 546.6 },
  { x: 382.6, y: 546.6 },
  { x: 355.8, y: 546.6 },
  { x: 329, y: 546.6 },
  { x: 918.4, y: 519.6 },
  { x: 891.6, y: 519.6 },
  { x: 677.3, y: 519.6 },
  { x: 650.5, y: 519.6 },
  { x: 623.7, y: 519.6 },
  { x: 596.9, y: 519.6 },
  { x: 382.6, y: 519.6 },
  { x: 355.8, y: 519.6 },
  { x: 329, y: 519.6 }
];

const MapLoading = (): React.ReactElement => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [animated, setAnimated] = useState(false);
  const [w, setW] = useState(originalWidth);
  const [h, setH] = useState(originalHeight);
  const [circles, setCircles] = useState<Circle[]>([...originalCircles]);
  const amp: number = 1.8;
  const chaos: number = 50;

  useEffect(() => {
    const svgElement = svgRef.current;
    if (svgElement) {
      const { width, height } = svgElement.getBoundingClientRect();
      setW(width);
      setH(height);
    }
  }, []);


  const recalibrateCircles = useCallback(() => {
    const recalibratedCircles = circles.map(circle => {
      return {
        x: (circle.x / 1200) * w, // Assuming 1200 is the original width
        y: (circle.y / 840) * h,  // Assuming 840 is the original height
      };
    });
    setCircles(recalibratedCircles);
  }, [w, h, circles]); // Dependencies array for useCallback

  useEffect(() => {
    recalibrateCircles();
  }, [recalibrateCircles]); // Dependency array for useEffect


  const toggleAnimate = () => {
    setAnimated(!animated);
  };

  return (
      <svg
        ref={svgRef}
        id="svg"
        className="dotmap"
        version="1.1"
        onClick={() => toggleAnimate()}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`} // Maintain the original aspect ratio
        style={{ width: 'inherit', height: 'inherit' }} // Ensure the SVG itself maintains the aspect ratio
        enableBackground={`new 0 0 ${w} ${h}`}
        xmlSpace="preserve"
      >
        {circles.map((c, i) => {
          const x = animated ? ((c.x - w / 2 + Math.random() * chaos) * amp) : (c.x - w / 2);
          const y = animated ? ((c.y - h / 2 + Math.random() * chaos) * amp) : (c.y - h / 2);
          const style = {
            transform: `translate(${x}px, ${y}px)`,
            WebkitTransform: `translate(${x}px, ${y}px)`,
            MsTransform: `translate(${x}px, ${y}px)`,
          };
          return (
            <circle key={'c' + i} fill={uniqueColors[i]} cx={c.x} cy={c.y} r={11.9} style={style} />
          );
        })}
      </svg>
  );
};

export default MapLoading;