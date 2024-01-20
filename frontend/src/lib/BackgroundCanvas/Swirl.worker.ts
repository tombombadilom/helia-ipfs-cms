// Fix the import statement
import React, { RefObject } from 'react';
import { makeNoise3D } from 'open-simplex-noise';
import { rand, randRange, fadeInOut, TAU, lerp, checkBounds } from './SwirlUtils';

type Noise3D = (x: number, y: number, z: number) => number;


function initParticle(
  canvasA: HTMLCanvasElement,
  i: number,
  rangeY: RefObject<number>,
  baseTTL: number,
  rangeTTL: number,
  baseSpeed: number,
  rangeSpeed: number,
  baseRadius: RefObject<number>,
  rangeRadius: RefObject<number>,
  baseHue: RefObject<number>,
  rangeHue: RefObject<number>
) {
  if (
    !baseHue.current ||
    !rangeHue.current ||
    !baseRadius.current ||
    !rangeRadius.current
  ) {
    return;
  }
  const x = rand(canvasA.width);
  const y = center[1] + randRange(rangeY.current || 0);
  const vx = 0;
  const vy = 0;
  const life = 0;
  const ttl = baseTTL + rand(rangeTTL);
  const speed = baseSpeed + rand(rangeSpeed);
  const radius = baseRadius.current + rand(rangeRadius.current);
  const hue = baseHue.current + rand(rangeHue.current);

  particleProps.current?.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
}

function drawParticles(
  canvasA: HTMLCanvasElement,
  contextA: CanvasRenderingContext2D,
  particleProps: RefObject<Float32Array>,
  center: number[],
  simplex: RefObject<Noise3D>,
  tick: RefObject<number>,
  //particlePropsLength: number,
  particlePropCount: number,
  xOff: RefObject<number>,
  yOff: RefObject<number>,
  zOff: RefObject<number>,
  noiseSteps: number,
  rangeY: RefObject<number>,
  baseTTL: number,
  rangeTTL: number,
  baseSpeed: number,
  rangeSpeed: number,
  baseRadius: RefObject<number>,
  rangeRadius: RefObject<number>,
  baseHue: RefObject<number>,
  rangeHue: RefObject<number>
) {
  let i;
  if (!particleProps.current) return;

  for (i = 0; i < particleProps.current?.length; i += particlePropCount) {
    updateParticle(
      canvasA,
      contextA,
      particleProps,
      center,
      simplex,
      tick,
      i,
      xOff,
      yOff,
      zOff,
      noiseSteps,
      rangeY,
      baseTTL,
      rangeTTL,
      baseSpeed,
      rangeSpeed,
      baseRadius,
      rangeRadius,
      baseHue,
      rangeHue
    );
  }
}

function updateParticle(
  canvasA: HTMLCanvasElement,
  contextA: CanvasRenderingContext2D,
  particleProps: RefObject<Float32Array>,
  center: number[],
  simplex: RefObject<Noise3D>,
  tick: RefObject<number>,
  i: number,
  xOff: RefObject<number>,
  yOff: RefObject<number>,
  zOff: RefObject<number>,
  noiseSteps: number,
  rangeY: RefObject<number>,
  baseTTL: number,
  rangeTTL: number,
  baseSpeed: number,
  rangeSpeed: number,
  baseRadius: RefObject<number>,
  rangeRadius: RefObject<number>,
  baseHue: RefObject<number>,
  rangeHue: RefObject<number>
) {
  if (
    !particleProps.current ||
    !simplex.current ||
    !xOff.current ||
    !yOff.current ||
    !zOff.current ||
    !tick.current
  )
    return;
  const i2 = 1 + i,
    i3 = 2 + i,
    i4 = 3 + i,
    i5 = 4 + i,
    i6 = 5 + i,
    i7 = 6 + i,
    i8 = 7 + i,
    i9 = 8 + i;

  const x: number = particleProps.current[i];
  const y: number = particleProps.current[i2];
  const tickCurrent: number = tick.current;
  const noiseFunction: Noise3D = makeNoise3D(i9);
  const n: number = noiseFunction(
    x * xOff.current,
    y * yOff.current,
    tickCurrent * zOff.current
  ) * noiseSteps * TAU;

  const vx = lerp(particleProps.current[i3], cos(n), 0.5);
  const vy = lerp(particleProps.current[i4], sin(n), 0.5);
  let life = particleProps.current[i5];
  const ttl = particleProps.current[i6];
  const speed = particleProps.current[i7];
  const x2 = x + vx * speed;
  const y2 = y + vy * speed;
  const radius = particleProps.current[i8];
  const hue = particleProps.current[i9];

  drawParticle(contextA, x, y, x2, y2, life, ttl, radius, hue);

  life++;

  particleProps.current[i] = x2;
  particleProps.current[i2] = y2;
  particleProps.current[i3] = vx;
  particleProps.current[i4] = vy;
  particleProps.current[i5] = life;
  (checkBounds(canvasA, x, y) || life > ttl) &&
    initParticle(
      canvasA,
      particleProps,
      center,
      i,
      rangeY,
      baseTTL,
      rangeTTL,
      baseSpeed,
      rangeSpeed,
      baseRadius,
      rangeRadius,
      baseHue,
      rangeHue
    );
}

function drawParticle(
  contextA: CanvasRenderingContext2D,
  x: number,
  y: number,
  x2: number,
  y2: number,
  life: number,
  ttl: number,
  radius: number,
  hue: number
) {
  contextA.save();
  contextA.lineCap = 'round';
  contextA.lineWidth = radius;
  contextA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
  contextA.beginPath();
  contextA.moveTo(x, y);
  contextA.lineTo(x2, y2);
  contextA.stroke();
  contextA.closePath();
  contextA.restore();
}
self.onmessage = function (e) {
  const {
    particleCount,
    Y,
    baseTTL,
    rangeTTL,
    rangeY,
    baseSpeed,
    rangeSpeed,
    baseRadius,
    baseTTL,
    rangeRadius,
    i,
    baseHue,
    rangeHue,
    noiseSteps,
    xOff,
    yOff,
    zOff,
    backgroundColor,
    loop,
    windowWidth,
    windowHeight,
    center,
  } = e.data;

  // Initialize particles
  const particleProps = initParticle(
    canvasA,
    i,
    rangeY,
    baseTTL,
    rangeTTL,
    baseSpeed,
    rangeSpeed,
    baseRadius,
    rangeRadius,
    baseHue,
    rangeHue
  );

  // Draw and update particles
  setInterval(() => {
    drawParticles(
      canvasA,
      contextA,
      particleProps,
      center,
      simplex,
      tick,
      particleCount,
      xOff,
      yOff,
      zOff,
      noiseSteps,
      rangeY,
      baseTTL,
      rangeTTL,
      baseSpeed,
      rangeSpeed,
      baseRadius,
      rangeRadius,
      baseHue,
      rangeHue
    );
    updateParticle(
      canvasA,
      contextA,
      particleProps,
      center,
      simplex,
      tick,
      xOff,
      yOff,
      zOff,
      noiseSteps,
      rangeY,
      baseTTL,
      rangeTTL,
      baseSpeed,
      rangeSpeed,
      baseRadius,
    );
  });
};
