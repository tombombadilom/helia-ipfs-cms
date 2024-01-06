import React from "react";

/**
 * Generates a range of colors between the given start and end colors.
 *
 * @param {string} colorStart - The starting color in hexadecimal format.
 * @param {string} colorEnd - The ending color in hexadecimal format.
 * @param {number} count - The number of colors to generate in the range.
 * @return {string[]} An array of colors in hexadecimal format representing the color range.
 */
function generateColorRange(colorStart, colorEnd, count) {
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }

  /**
   * Converts an RGB color object to a hexadecimal color string.
   *
   * @param {Object} color - The RGB color object with properties r, g, and b.
   * @return {string} The hexadecimal color string representation of the RGB color.
   */
  function rgbToHex({ r, g, b }) {
    return `#${[r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')}`;
  }

/**
 * Interpolates between two colors based on a factor.
 *
 * @param {Array<number>} color1 - The first color to interpolate from.
 * @param {Array<number>} color2 - The second color to interpolate to.
 * @param {number} factor - The interpolation factor. Defaults to 0.5 if not provided.
 * @return {Array<number>} - The interpolated color as an array of RGB values.
 */
  function interpolateColor(color1, color2, factor) {
    if (arguments.length < 3) { 
      factor = 0.5; 
    }
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }

  const startRGB = hexToRgb(colorStart);
  const endRGB = hexToRgb(colorEnd);
  const colorRange = [];

  for (let i = 0; i < count; i++) {
    const factor = i / (count - 1);
    const interpolatedColor = interpolateColor([startRGB.r, startRGB.g, startRGB.b], [endRGB.r, endRGB.g, endRGB.b], factor);
    colorRange.push(rgbToHex({ r: interpolatedColor[0], g: interpolatedColor[1], b: interpolatedColor[2] }));
  }

  return colorRange;
}
export { generateColorRange }