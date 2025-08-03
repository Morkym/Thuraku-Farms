import React from 'react'

const Hero = () => {
  return (
    <section className='relative hero-container flex flex-col items-center justify-center text-center p-8'>
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0"
         src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline/>
        <div className="hero-overlay absolute inset-0 bg-black opacity-70 z-10"></div>
        <div className="hero-title relative z-20">Thuraku Farms</div>
        <div
        style={{clipPath: 'polygon(0 0, 50% 0, 100% 100%, 0 100%)'}}
         className="hero-subtitle relative z-20 bg-soil-dark text-highlight-orange text-7xl rotate-[-5deg] border-sand-beige border-2">Fresh+Organic</div>
        <div className="hero-subtitle relative z-20">Home-Grown Goodness</div>
        <button className='hero-button relative z-20'>Explore The Farm</button>

    
    </section>
  )
}

export default Hero