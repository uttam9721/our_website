import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experence from './components/Experence';
import Contact from './components/Contact'
import Footer from './components/Footer'
import Journey from './components/Journey'
import MiniGame from './components/MiniGame'
// import Stats from './components/Stats'
function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
     <Portfolio />
     <Experence />
     <MiniGame/>
     <Journey/>
     {/* <Stats/> */}
     <Contact />
     <Footer />
    </div>
  )
}

export default App
