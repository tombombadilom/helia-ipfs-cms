self.onmessage = (e: MessageEvent<{ width: number, height: number }>) => {
  const width = e.data.width;
  const height = e.data.height;
  const w2h = width * height;
  const inc = 1 / width;
  const arr: number[] = [];

  for (let k = 0; k < w2h; ++k) {
    arr[k] = Math.random() * 1.5 - 0.5;
  }

  function hue(value: number): number {
    return 255 * Math.min(Math.max(value, 0), 1);
  }

  function ease(x: number): number {
    return (x > 0.2) ? 0 : interpolate(1, 0, x * 6);
  }

  function interpolate(start: number, end: number, t: number): number {
    t = t * t * t * (t * (t * 6 - 15) + 10);
    return start + (end - start) * t;
  }

  function noise(x: number, y: number): number {
    const i = Math.abs(Math.floor(x * width + y)) % w2h;
    return arr[i];
  }

  function oct(x: number, y: number): number {
    const o1 = pattern(x * 3.0, y * 4.0);
    const o2 = pattern(x * 4.0, y * 5.0);
    return o1 + o2 * 0.5;
  }

  function pattern(x: number, y: number): number {
    const nx = Math.floor(x);
    const ny = Math.floor(y);
    return interpolate(
      interpolate(noise(nx, ny), noise(nx + 1, ny), x - nx),
      interpolate(noise(nx, ny + 1), noise(nx + 1, ny + 1), x - nx),
      y - ny
    );
  }

  let t = 0;

  function draw() {
    t += inc;
    const imgData = new ImageData(width, height);
    const id = imgData.data;

    for (let x = 1; x >= 0; x -= inc) {
      for (let y = 1; y >= 0; y -= inc) {
        const idx = Math.floor((y * width + x) * width * 4);
        const dist = Math.sqrt(x * x + y * y);
        const ax = oct(x, y);
        const ay = oct(x + 2, y + t / 3);
        const bx = oct(x + dist * 0.3 + ax / 22 + 0.7, y + ay / 5 + 2);
        const by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
        const n = oct(x + bx / 5, y + by / 2) * 0.7 + 0.15;
        const d = ax * by / 2;
        const e = ay * bx / 2;

        id[idx + 0] = hue(n + d / 5);
        id[idx + 1] = hue(n / 3 + e / 5 + d);
        id[idx + 2] = hue(d + e);
        id[idx + 3] = hue(1 - ease(dist) * (e + d) * 5);
      }
    }

    // Post the ImageData back to the main thread
    self.postMessage(imgData);
  }

  // Start the drawing loop
  function animate() {
    draw();
    setTimeout(animate, 0); // Continue the loop
  }

  animate();
};