import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <About id="about" />
        <Experience id="experience" />
        <Skills id="skills" />
        <Contact id="contact" />
      </main>
    </div>
  )
}

export default App

