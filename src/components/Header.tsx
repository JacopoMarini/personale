import { useEffect } from 'react'
import './Header.css'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Jacopo Marini</h1>
          <span className="subtitle">Web Developer</span>
        </div>
        <nav className="nav">
          <button
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            Chi Sono
          </button>
          <button
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={() => scrollToSection('experience')}
          >
            Esperienza
          </button>
          <button
            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            Competenze
          </button>
          <button
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contatti
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

