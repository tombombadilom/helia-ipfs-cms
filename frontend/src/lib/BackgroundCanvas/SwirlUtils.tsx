import React from 'react'

function checkBounds(canvasA: HTMLCanvasElement, x: number, y: number) {
  return x > canvasA.width || x < 0 || y > canvasA.height || y < 0
}

function renderGlow(
  canvasA: HTMLCanvasElement,
  contexB: CanvasRenderingContext2D
) {
  contexB.save()
  contexB.filter = 'blur(8px) brightness(200%)'
  contexB.globalCompositeOperation = 'lighter'
  contexB.drawImage(canvasA, 0, 0)
  contexB.restore()

  contexB.save()
  contexB.filter = 'blur(4px) brightness(200%)'
  contexB.globalCompositeOperation = 'lighter'
  contexB.drawImage(canvasA, 0, 0)
  contexB.restore()
}

function renderToScreen(
  canvasA: HTMLCanvasElement,
  contexB: CanvasRenderingContext2D
) {
  contexB.save()
  contexB.globalCompositeOperation = 'lighter'
  contexB.drawImage(canvasA, 0, 0)
  contexB.restore()
}

// utils
const { PI, cos, sin, abs, random } = Math
const TAU = 2 * PI
const rand = (n: number) => n * random()
const randRange = (n: number) => n - rand(2 * n)
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m
  return abs(((t + hm) % m) - hm) / hm
}
const lerp = (n1: number, n2: number, speed: number) =>
  (1 - speed) * n1 + speed * n2


export {lerp, fadeInOut, randRange, TAU, renderToScreen, renderGlow, checkBounds, rand}


