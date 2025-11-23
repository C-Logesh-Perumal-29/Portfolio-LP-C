import Navigation from './components/Navigation'
import Landing3D from './components/Landing3D'
import About from './components/About'
import Internships from './components/Internships'
import Skills from './components/Skills'
import Projects from './components/Projects'
import UIDesigns from './components/UIDesigns'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Landing3D />
      <About />
      <Internships />
      <Skills />
      <Projects />
      <UIDesigns />
      <Contact />
    </div>
  )
}

export default App

