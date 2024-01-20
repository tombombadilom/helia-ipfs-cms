export function molten() {
var cid ='molten';
var c = document.getElementById(cid);
var $ = c.getContext('2d');
document.body.clientWidth;
var wh = 512;
var w2h = wh * wh;
c.width = c.height =  wh;
var img = $.createImageData(wh, wh);
var id = img.data;
var t = 0;
var inc = 1 / wh;
var arr = [];

for(var k = 0; k < w2h; ++k)
   arr[k] = Math.random() * 1.5 - 0.5;

/**
 * The draw function animates a visual using the requestAnimationFrame method.
 *
 */
function draw(){
  window.requestAnimationFrame(draw);
   t += inc;
   for(var x = 1; x >= 0; x -= inc) {
      for(var y = 1; y >= 0; y -= inc) {
         var idx = (y * wh + x) * wh * 4;
         var dx = x;
         var dy = y;
         var dist = Math.sqrt(dx * dx + dy * dy);
         var ax = oct(x, y);
         var ay = oct(x + 2, y + t / 3);
         var bx = oct(x + dist * .3 + ax / 22 + 0.7, y + ay / 5 + 2);
         var by = oct(x + ax / 3 + 4 * t, y + ay / 3 + 5);
         var n = oct(x + bx / 5, y + by / 2) * 0.7 + .15;
         var d = ax * by / 2;
         var e = ay * bx / 2;
        
         id[idx + 0] = hue(n + d / 5);
         id[idx + 1] = hue(n / 3 + e / 5 + d);
         id[idx + 2] = hue(d + e);
         id[idx + 3] = hue(1 - ease(dist) * (e + d) * 5)
      }
   }
   $.putImageData(img, 0, 0);
}
/**
 * Multiply the input value by 255, ensuring it is within the range of 0 to 1.
 *
 * @param {number} $ - The input value to be transformed
 * @return {number} The transformed value within the range of 0 to 255
 */
function hue($) {
   return 255 * Math.min(Math.max($, 0), 1);
}
/**
 * Calculate the ease of the given input.
 *
 * @param {number} x - the input value
 * @return {number} the ease value
 */
function ease(x) {
   return (x > 0.2) ? 0 : i(1, 0, x * 6);
}
var db = document.getElementById(cid);
/**
 * Calculate a value based on the input parameters using a specific formula.
 *
 * @param {type} $ - description of parameter
 * @param {type} db - description of parameter
 * @param {type} t - description of parameter
 * @return {type} the calculated value
 */
function i($, db, t) {
   t = t * t * t * (6 * t * t - 15 * t + 10);
   return $ + (db - $) * t;
}
/**
 * Calculate the index using the given x and y coordinates, and retrieve the 
 * corresponding element from the array.
 *
 * @param {number} x - The x coordinate
 * @param {number} y - The y coordinate
 * @return {any} The element from the array
 */
function n(x, y) {
   var i = Math.abs(x * wh + y) % w2h;
   return arr[i];
}
/**
 * Calculates the octagonal function value for the given input coordinates.
 *
 * @param {number} x - the x-coordinate
 * @param {number} y - the y-coordinate
 * @return {number} the octagonal function value
 */
function oct(x, y) {
   var o1 = p(x * 3.0, y * 4.0);
/**
 * Calculates the octagonal function value for the given input coordinates.
 *
 * @param {number} x - the x-coordinate
 * @param {number} y - the y-coordinate
 * @return {number} the octagonal function value
 */
   var o2 = p(x * 4.0, y * 5.0);
   return o1 + o2 * 0.5;
}
/**
 * Calculates the bilinear interpolation of a value.
 *
 * @param {number} x - the x-coordinate
 * @param {number} y - the y-coordinate
 * @return {type} the interpolated value
 */
function p(x, y) {
   var nx = Math.floor(x);
   var ny = Math.floor(y);   
   return i(i(n(nx, ny), n(nx + 1, ny), x - nx), i(n(nx, ny + 1), n(nx + 1, ny + 1), x - nx), y - ny);
}
draw();
}
