import { useEffect, useRef } from 'react'
import Fluid from 'webgl-fluid'
import './App.css'
import logo from "./assets/MotionArtEffect-logo.png" 
import { Footer } from './components/footer'
import { NavButton, Navigation } from './components/navigation'
import { Application } from './sections/application'
import { Features } from './sections/features'
import { Hero } from './sections/hero'
import { Purchase } from './sections/purchase'
import { Reviews } from './sections/reviews'
import { Support } from './sections/support'

function App() {

  const canvas = useRef<HTMLCanvasElement>(null)
  useEffect(function () {
    const c = canvas.current
    Fluid(c, {
      TRANSPARENT: true,
      BLOOM: false,
      INTERVAL: 9000,
      SPLAT_RADIUS: 0.05,
      SPLAT_COUNT: (Math.random() * 0.00001) + 5,
    })
  }, [])

  return (
    <div className=''>
      <canvas ref={canvas} className='fixed top-0 left-0 pointer-events-auto' style={{width: '100%', height: '100%'}}></canvas>
      <main className='relative z-[1] pointer-events-none'>
        <Navigation logo={logo}>
          <NavButton>Purchase Now</NavButton>
        </Navigation>
        <Hero />
        <Reviews />
        <Purchase />
        <Application />
        <Support />
        <Features />
        <Footer />
      </main>
    </div>
  )
}

export default App
