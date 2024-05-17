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

  return (
    <main>
      <Navigation logo={logo}>
        <NavButton>Purchase Now</NavButton>
      </Navigation>
      <Hero/>
      <Reviews/>
      <Purchase/>
      <Application/>
      <Support/>
      <Features/>
      <Footer/>
    </main>
  )
}

export default App
