import { useState } from 'react'
import { Box, Container } from '@mui/material'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background:
          'radial-gradient(1200px 600px at 10% 0%, rgba(66,153,225,0.12) 0%, rgba(66,153,225,0) 60%), radial-gradient(900px 500px at 90% 10%, rgba(44,82,130,0.10) 0%, rgba(44,82,130,0) 55%)',
      }}
    >
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Box component="main" sx={{ flex: 1 }}>
        <Container maxWidth="lg" sx={{ py: { xs: 2, md: 3 } }}>
          <About id="about" />
          <Experience id="experience" />
          <Skills id="skills" />
          <Contact id="contact" />
        </Container>
      </Box>
    </Box>
  )
}

export default App

