import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap'


const Hero = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('.hero-title', { type: 'chars' });
    const subtitleSplit = SplitText.create('.hero-subtitle', { type: ' chars' });

    const tl = gsap.timeline({
    delay: 0.5,
    })
    tl.from('.text-container', {
      scale: 0.3,
      opacity: 0,
      duration: 0.5,
      ease: 'power1.inOut',
    }).to('.hero-subtitle', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'circ.inOut',
      duration: 1, // Slower animation
    },'-=0.1').from(titleSplit.chars, {
      y: 100,
      stagger: 0.03,
      ease: 'power2.out',
      duration: 0.8,
      opacity: 0,
    }, '-=0.1')
    .from('.hero-button', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
    }, '-=0.5')
    .from('.text-container > div:nth-child(3)', {
      opacity: 0,
      y: 10,
      duration: 0.6,
    }, '-=0.6');
  });
     return (
    <section className='relative hero-container flex flex-col items-center justify-center text-center p-8'>
        <video className="absolute top-0 left-0 w-full h-full object-cover z-0"
         src="/hero.mp4"
        autoPlay
        muted
        
        playsInline/>
        <div className="hero-overlay absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="text-container relative col-center z-20">
           <div className="hero-title relative z-20">Thuraku Farms</div>
        <div
        style={{clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)'}}
         className="hero-subtitle relative z-20 bg-soil-dark text-highlight-orange text-7xl rotate-[-5deg] border-sand-beige border-2">Fresh+Organic</div>
        <div className=" relative z-20 col-center">
          <p  className="text-sand-beige text-xl text-center max-w-xl mx-auto px-4 py-2 leading-relaxed">
              
                Straight from our farm to your fork — Thuraku Farms brings you the freshest, tastiest produce around. No fuss, just good vibes and great veggies!
            </p>
         </div>
        <button className='hero-button relative z-20'>Explore The Farm</button>

        </div>
       
    
    </section>
  )
}

export default Hero