import React, { useRef } from 'react';
// import Worker from './molten.worker?worker';
// import {molten} from './molten.js';
type MoltenProps = {
  speed?: number; // Optional speed prop
}
// document.addEventListener('DOMContentLoaded', function () {
//   // Check if the canvas with id "molten" is present
//   const c = document.getElementById('molten');
//   if (c) {
//     // If the canvas is present, execute the molten function
//     molten();
//   } else {
//     // Log an error or handle the absence of the canvas element appropriately
//     console.error('Canvas element with id "molten" not found.');
//   }
// });
/**
 * Molten component with strongly typed props
 * @param {MoltenProps} props - The props for the Molten component
 * @returns {JSX.Element} - The rendered Molten component
 */
const Molten: React.FC<MoltenProps> = (props: MoltenProps): JSX.Element => {
  // Create a reference to the canvas element
  props.speed ? console.log(props.speed) : ''
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // // Create a reference to the worker instance
  // const workerRef = useRef<Worker>(); // Utilise useRef pour retenir l'instance du worker
  
  // // Function to resize the canvas based on its parent element's size
  // const resizeCanvas = useCallback((): void => {
  //   const canvas = canvasRef.current;
  //   if (canvas && canvas.parentElement) {
  //     canvas.width = canvas.parentElement.offsetWidth;
  //     canvas.height = canvas.parentElement.offsetHeight;

  //     // Get the worker instance from the reference
  //     const worker = workerRef?.current;
  //     if (worker) {
  //       // Send a message to the worker with the speed, width, and height
  //       worker.postMessage({
  //         speed: props.speed,
  //         width: canvas.width,  
  //         height: canvas.height,
  //       });
  //     }
  //   }
  // }, [props.speed, workerRef]);

  // // Effect to initialize the worker and set up event listeners
  // useEffect(() => {
  //   // Create a new worker instance and store it in the workerRef
  //   const worker = new Worker();
  //   workerRef.current = worker;
   
  //   // Check if the browser supports web workers
  //   if (window.Worker) {
  //     // Configurer un écouteur d'événement pour les messages du worker
  //     worker.addEventListener('message', (e) => {
  //       const imgData = e.data;
  //       const canvas = canvasRef.current;
  //       if (canvas) {
  //         const context = canvas.getContext('2d');
  //         if (context) {
  //           // Dessiner le cadre reçu sur le canvas
  //           //console.log('imgData', imgData);
  //           context.putImageData(imgData, 0, 0);
  //         }
  //       }
  //     });
  //     // Call the resizeCanvas function to initially resize the canvas
  //     resizeCanvas();
  //   } else {
  //     // Log an error if web workers are not supported in the browser
  //     console.error('Web workers are not supported in this browser.');
  //   }

  //   // Add a resize event listener to call resizeCanvas on window resize
  //   window.addEventListener('resize', resizeCanvas);

  //   // Cleanup function to terminate the worker and remove event listeners
  //   return () => {
  //     if (window.Worker) {
  //       workerRef.current?.terminate();
  //     }
  //     window.removeEventListener('resize', resizeCanvas);
  //   };
  // }, [props.speed, resizeCanvas]);

  // Render the canvas element with inline styles
  return (
    <canvas
      id="molten"
      ref={canvasRef}
      style={{
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
        width: '100vw',
        height: '100dvh',
      //   opacity: .3,
        backgroundColor: 'hsla(0, 0%, 0%, .5)',
      //   zIndex: 1,
      }}
    />
  );
}

export default Molten;