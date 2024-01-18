import React from 'react'
import { Button }  from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
// import Globe from 'react-globe.gl';
// import chroma from 'chroma-js';

// const N = 20;
// const arcsData = Array.from({ length: N }, () => {
//   const randomColor = chroma.random(); // Generate a random color
//   return {
//     startLat: (Math.random() - 0.5) * 180,
//     startLng: (Math.random() - 0.5) * 360,
//     endLat: (Math.random() - 0.5) * 180,
//     endLng: (Math.random() - 0.5) * 360,
//     color: randomColor.css('hsl') // Convert the color to HSLA format
//   };
// });
const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-2/3 rounded-md p-12 text-center"
    >
      {/* <Globe 
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        arcsData={arcsData}
        arcColor={"color"}
        backgroundColor="var(--background-canvas)"
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
        animateIn={true}
      /> */}
      <div
        className="bg-fixed p-1 rounded-lg"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="flex m-10 h-80 items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Helia IPFS CMS</h2>
            <h4 className="mb-6 text-xl font-semibold">Playing with P2P Storage</h4>
            <Button
              onClick={() => navigate("/About")}
              type="button"
              className="primary-background rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal primary-foreground transition duration-150 ease-in-out hover:border-neutral-100 hover:background-secondary hover:bg-opacity-10 hover:secondary-foreground focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
              Let's Begin !
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;