import { Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { Section } from './Section'

const Experience = ({ id }: { id: string }) => {
  return (
    <Section id={id} title="Esperienza">
      <Stack spacing={2.5}>
        <Card data-animate>
          <CardContent>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1.5}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography variant="h6">Sviluppatore Web e Mobile</Typography>
              <Chip label="2022 - oggi" color="primary" variant="outlined" />
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              Stackhouse, Cagliari
            </Typography>
            <Stack spacing={1.25}>
              <Typography color="text.secondary">
                Utilizzo principalmente React con TypeScript per la creazione di applicazioni
                web, con esperienza nella gestione dello stato tramite Redux Saga, Redux
                Toolkit e Context. Competenza nello sviluppo di architetture a Micro Frontend e
                nell'integrazione di API GraphQL.
              </Typography>
              <Typography color="text.secondary">
                Esperienza nell'uso dei servizi Firebase (Remote Config, Analytics, Cloud
                Messaging con Topics) e Google Analytics. Abile nell'uso di Git e piattaforme
                di collaborazione come GitHub e GitLab, con esperienza in pull request, processi
                di revisione del codice e risoluzione di conflitti.
              </Typography>
              <Typography color="text.secondary">
                Esperienza nella creazione di design di applicazioni utilizzando Figma, quindi
                anche un occhio alla UI.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Card data-animate>
          <CardContent>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1.5}
              alignItems={{ xs: 'flex-start', md: 'center' }}
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography variant="h6">Sviluppo Web Autonomo</Typography>
              <Chip label="2017 - 2022" color="secondary" variant="outlined" />
            </Stack>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
              Freelance
            </Typography>
            <Typography color="text.secondary">
              Ho creato dei piccoli siti web per attività commerciali locali e un'applicazione
              per tenere traccia delle ore lavorate dai dipendenti.
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Section>
  )
}

export default Experience

