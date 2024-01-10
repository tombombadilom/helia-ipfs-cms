import React, { useCallback, useEffect, useRef } from 'react';

interface CircleProps {
  radius: number;
  speed: number;
  size: number;
  xPos: number;
  yPos: number;
  opacity: number;
  color: string;
}

class Circle {
  radius: number;
  speed: number;
  size: number;
  xPos: number;
  yPos: number;
  opacity: number;
  color: string;
  counter: number;
  sign: number;

  constructor({ radius, speed, size, xPos, yPos, opacity, color }: CircleProps) {
    this.radius = radius;
    this.speed = speed;
    this.size = size;
    this.xPos = xPos;
    this.yPos = yPos;
    this.opacity = opacity;
    this.color = color;

    this.counter = 0;

    const signHelper = Math.floor(Math.random() * 2);
    this.sign = signHelper === 1 ? -1 : 1;
  }

  update(context: CanvasRenderingContext2D) {
    this.counter += (this.sign * this.speed) / 20;

    context.beginPath();
    context.arc(
      this.xPos + Math.cos(this.counter / 100) * this.radius,
      this.yPos + Math.sin(this.counter / 100) * this.radius,
      this.size,
      0,
      Math.PI * 2,
      false
    );

    context.closePath();
    context.fillStyle = this.color + this.opacity + ")";
    context.fill();
  }
}

function setupCircles(circlesRef: React.MutableRefObject<Circle[]>, width: number, height: number) {
  const numberOfCircles = 40;
  circlesRef.current = [];

  for (let i = 0; i < numberOfCircles; i++) {
    let opacity = 0.25 + Math.random() * 0.4;
    const speed = 1 + Math.random() * 8;
    let size = (1.6 - opacity) * (130 + Math.random() * 200);
    let radius = 100 + Math.random() * 100;
    const randomX = Math.round(Math.random() * (width + size)) - size / 2;
    const randomY = Math.round(Math.random() * (height + size)) - size / 2;

    let color: string;
    const colorRandomizer = (i / numberOfCircles) * 100;

    if (colorRandomizer <= 40) {
      color = "rgba(26, 99, 142,";
    } else if (colorRandomizer <= 80) {
      color = "rgba(0, 125, 105,";
    } else {
      color = "rgba(21, 216, 223,";
      size /= 2;
      radius /= 2;
      opacity /= 2;
    }

    const circle = new Circle({ radius, speed, size, xPos: randomX, yPos: randomY, opacity, color });
    circlesRef.current.push(circle);
  }
}



const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<Circle[]>([]);

  const drawAndUpdate = useCallback((width: number, height: number) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const circlesRef = useRef<Circle[]>([]);
    const canvas = canvasRef.current as HTMLCanvasElement;
    const circles = circlesRef.current as Circle[];

    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, width, height);
        for (const circle of circles) {
          circle.update(context);
        }
      }
    }
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawAndUpdate(window.innerWidth, window.innerHeight);
    }
  }, [drawAndUpdate]);

  const handleResize = useCallback(() => {
    resizeCanvas();
  }, [resizeCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext('2d');
      if (context) {
        setupCircles(circlesRef, width, height);
        drawAndUpdate(width, height);

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }
  }, [handleResize, resizeCanvas]);

  return <canvas ref={canvasRef} id="bg" />;
};

export default BackgroundCanvas;