// https://codepen.io/tmrDevelops/pen/JGvyra

import React, { useEffect, useRef } from 'react';

// speed: A float representing the speed at which the animation updates. 
// Acceptable range is typically from 0.1 for slower motion to 1.0 for faster motion.
// Default value is set to 0.5 for moderate speed.
const Molten = ({ speed = 0.1 }: { speed?: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const draw = () => {
      const c = canvasRef.current;
      if (c) {
        const $ = c.getContext('2d');
        if ($) {
          const wh = 128;
          const w2h = wh * wh;
          c.width = c.height = wh;
          const img = $.createImageData(wh, wh);
          const id = img.data;
          let t = 0;
          // Adjust 'inc' as a function of 'speed' to control the evolution speed of the animation.
          const inc = speed / wh;
          const arr: number[] = [];

          for (let k = 0; k < w2h; ++k)
            arr[k] = Math.random() * 1.5 - 0.5;

          const drawFrame = () => {
            window.requestAnimationFrame(drawFrame);
            t += inc;
            for (let x = 1; x >= 0; x -= inc) {
              for (let y = 1; y >= 0; y -= inc) {
                const idx = (y * wh + x) * wh * 4;
                const dx = x;
                const dy = y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const ax = oct(x, y);
                const ay = oct(x + 2, y + t / 3);
                const bx = oct(x + dist * .3 + ax / 22 + 0.7, y + ay / 5 + 2);
                const by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
                const n = oct(x + bx / 5, y + by / 2) * 0.7 + .15;
                const d = ax * by / 2;
                const e = ay * bx / 2;

                id[idx + 0] = hue(n + d / 5);
                id[idx + 1] = hue(n / 3 + e / 5 + d);
                id[idx + 2] = hue(d + e);
                id[idx + 3] = hue(1 - ease(dist) * (e + d) * 5)
              }
            }
            $.putImageData(img, 0, 0);
          }
          const hue = ($: number) => {
            return 255 * Math.min(Math.max($, 0), 1);
          }
          const ease = (x: number) => {
            return (x > 0.2) ? 0 : i(1, 0, x * 6);
          }
          const i = ($: number, db: number, t: number) => {
            t = t * t * t * (6 * t * t - 15 * t + 10);
            return $ + (db - $) * t;
          }
          const n = (x: number, y: number) => {
            const i = Math.abs(x * wh + y) % w2h;
            return arr[i];
          }
          const oct = (x: number, y: number) => {
            const o1 = p(x * 3.0, y * 4.0);
            const o2 = p(x * 4.0, y * 5.0);
            return o1 + o2 * 0.5;
          }
          const p = (x: number, y: number) => {
            const nx = Math.floor(x);
            const ny = Math.floor(y);
            return i(i(n(nx, ny), n(nx + 1, ny), x - nx), i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx), y - ny);
          }

          drawFrame();
        }
      }
    };
    draw();
  }, [speed]);

  return (
    <canvas
      style={{
        position: 'fixed',
        width: 'inherit',
        height: 'inherit',
        opacity: .25,
        top: 0,
        left: 0,
        zIndex: 0,
      }}  
      ref={canvasRef}
    />
  );
}

export default Molten;