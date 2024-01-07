import React from 'react'
const Home = () => {
  return (
    <div
      className="w-screen h-screen rounded-lg bg-cover bg-no-repeat p-12 text-center"
      style={{
        backgroundImage: `url('https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg')`
      }}
    >
      <div
        className="bg-fixed p-1 rounded-lg"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}
      >
        <div className="flex m-10 h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-semibold">Helia IPFS CMS</h2>
            <h4 className="mb-6 text-xl font-semibold">Playing with P2P Storage</h4>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light">
              Let's Begin !
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;