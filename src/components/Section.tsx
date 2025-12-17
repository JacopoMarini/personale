import { Box, Stack, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { useLayoutEffect, useRef } from 'react'
import { gsap, registerGsapPlugins } from '../animations/gsap'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  const rootRef = useRef<HTMLElement | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    if (reducedMotion) return
    registerGsapPlugins()
    const root = rootRef.current
    if (!root) return

    const ctx = gsap.context(() => {
      const titleEl = root.querySelector('[data-section-title]')
      const items = root.querySelectorAll('[data-animate]')

      gsap.set([titleEl, items], { autoAlpha: 0, y: 14 })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        })
        .to(titleEl, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' })
        .to(
          items,
          { autoAlpha: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.08 },
          '-=0.35',
        )
    }, root)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <Box
      id={id}
      component="section"
      ref={rootRef}
      sx={{
        py: { xs: 5, md: 7 },
        scrollMarginTop: '96px',
      }}
    >
      <Stack spacing={2} sx={{ mb: 3 }}>
        <Typography
          variant="h3"
          data-section-title
          sx={{ color: 'primary.main' }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: 96,
            height: 4,
            borderRadius: 999,
            background:
              'linear-gradient(90deg, rgba(66,153,225,1) 0%, rgba(44,82,130,1) 100%)',
          }}
        />
      </Stack>

      <Box>{children}</Box>
    </Box>
  )
}


