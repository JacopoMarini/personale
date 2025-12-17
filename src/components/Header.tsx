import { useEffect, useLayoutEffect, useRef } from 'react'
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material'
import { gsap } from '../animations/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const reducedMotion = usePrefersReducedMotion()
  const headerRef = useRef<HTMLDivElement | null>(null)

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

  useLayoutEffect(() => {
    if (reducedMotion) return
    const el = headerRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      )
    }, el)
    return () => ctx.revert()
  }, [reducedMotion])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  const navItems: Array<{ id: string; label: string }> = [
    { id: 'about', label: 'Chi Sono' },
    { id: 'experience', label: 'Esperienza' },
    { id: 'skills', label: 'Competenze' },
    { id: 'contact', label: 'Contatti' },
  ]

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ py: 1.5, minHeight: { xs: 64, md: 72 } }}
        >
          <Box ref={headerRef} sx={{ width: '100%' }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={{ xs: 1.5, md: 2 }}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="space-between"
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                  Jacopo Marini
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Web Developer
                </Typography>
              </Box>

              <Stack direction="row" spacing={0.5} sx={{ flexWrap: 'wrap' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    size="small"
                    variant={activeSection === item.id ? 'contained' : 'text'}
                    color={activeSection === item.id ? 'primary' : 'inherit'}
                    sx={{
                      borderRadius: 999,
                      px: 1.5,
                      transition: 'transform 150ms ease, background-color 150ms ease',
                      '&:hover': { transform: 'translateY(-1px)' },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

