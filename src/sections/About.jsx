import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all";
import gsap from "gsap"
import { useRef } from "react";


const About = () => {
  const containerRef=useRef(null);
useGSAP(() => {
const firstmsgSplit = SplitText.create('.first-message', { type: 'words' });
const secondmsgSplit = SplitText.create('.second-message', { type: 'words' });
const paragraphSplit = SplitText.create('.about-container p', { type: 'words,lines',linesClass: 'line' });
gsap.fromTo(firstmsgSplit.words, 
  {
    color: '#1D1D1D',
    opacity: 0.2,
  }, 
  {
  color: '#fff',
  opacity: 1,
  ease: 'power1.in',
  stagger: 1,
  scrollTrigger: {
    trigger: containerRef.current,
    start: 'top center',
    end: '30% center',
    scrub: true,
  }
});
gsap.fromTo(secondmsgSplit.words, 
  {
    color: '#1D1D1D',
    opacity: 0.2,
  }, 
  {
    color: '#fff',
    ease: 'power1.in',
    opacity: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: '.second-message',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
    }
  }
);
const revealTl = gsap.timeline({
  delay: 1,
  scrollTrigger: {
    trigger: '.msg-text-scroll',
    start: 'top 60%',
  }
});
revealTl.to('.msg-text-scroll', {
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  duration: 1,
  ease: 'circ.inOut',
});


gsap.from(paragraphSplit.lines, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger:paragraphSplit.lines,
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      }
});
return () => {
  firstmsgSplit.revert();
  secondmsgSplit.revert();
  paragraphSplit.revert();
  revealTl.revert();
};
}, ); 
return (
    <section  className='about-section bg-soil-dark   w-full h-full flex-center' ref={containerRef}>
      <div className='about-container '>
        <div className="w-full h-full">
        <div className="msg-wrapper ">
          <h1 className='first-message text-text-light text-2xl md:text-7xl  font-subheading tracking-wide  '>Started with a sprinkle, </h1>
          <div style={{clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
            className="msg-text-scroll w-max relative -translate-y-8 z-20 bg-farm-green text-highlight-orange text-3xl md:text-7xl rotate-[-7deg] border-sand-beige border-2 font-subheading">
              Rooted in Tradition
            </div>
          <h1 className='second-message text-text-light text-2xl md:text-7xl font-subheading tracking-wide'>Picked with a Smile</h1>

          </div>
          
        </div>
          <div className="flex-center   mb-0 md:mb-3 ">
            <div className='max-w-md  px-4  overflow-hidden'>
              <p className= 'text-2xl font-paragraph text-sand-beige text-center  w-full -tracking-wide '>
                From our sunny fields to your happy plate, every bite begins with a sprinkle of love, 
                grows on tradition, and arrives hand-picked with a smile.
                 We're not just delivering food,<br /> we're sharing stories, sunshine, and a whole lot of goodness.
              </p>

            </div>
          </div>
        </div>
        
      

    </section>
  )
}

export default About