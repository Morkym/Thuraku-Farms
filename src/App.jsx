
import './index.css'
import Hero from './sections/Hero'
import gsap from 'gsap'
import { ScrollTrigger,ScrollSmoother } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import About from './sections/About';
import Farm from './sections/Farm';
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

function App() {
  

  return (
    <main>
      <Hero />
      <About />
      <Farm />

      
    </main>
      
  )
}

export default App
