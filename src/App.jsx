
import './index.css'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollTrigger,ScrollSmoother } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import About from './sections/About';
/*gsap.registerPlugin(scrollTrigger,scrollTrigger);*/

function App() {
  

  return (
    <main>
      <Hero />
      <About />

      
    </main>
      
  )
}

export default App
