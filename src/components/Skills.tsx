import { Box, Chip, Divider, Stack, Typography } from '@mui/material'
import { Section } from './Section'

const Skills = ({ id }: { id: string }) => {
  const technologies = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'React', category: 'Framework' },
    { name: 'React Native', category: 'Framework' },
    { name: 'Redux / Redux Saga / Redux Toolkit', category: 'State Management' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Firebase', category: 'Services' },
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'Git / GitHub / GitLab', category: 'Tools' },
    { name: 'Figma', category: 'Design' },
  ]

  const categories = Array.from(new Set(technologies.map(t => t.category)))

  return (
    <Section id={id} title="Competenze Tecnologiche">
      <Stack spacing={3}>
        {categories.map((category, idx) => (
          <Box key={category} data-animate>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1.5}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              sx={{ mb: 1.5 }}
            >
              <Typography variant="h6">{category}</Typography>
              <Divider flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
            </Stack>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech) => (
                  <Chip
                    key={tech.name}
                    label={tech.name}
                    variant="outlined"
                    sx={{
                      borderRadius: 999,
                      transition: 'transform 150ms ease, box-shadow 150ms ease',
                      '&:hover': {
                        transform: 'translateY(-1px)',
                        boxShadow: 1,
                      },
                    }}
                  />
                ))}
            </Box>
            {idx < categories.length - 1 ? (
              <Divider sx={{ mt: 3, opacity: 0.8 }} />
            ) : null}
          </Box>
        ))}
      </Stack>
    </Section>
  )
}

export default Skills

