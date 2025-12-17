import { Box, Card, CardContent, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { Section } from './Section'

const About = ({ id }: { id: string }) => {
  return (
    <Section id={id} title="Chi Sono">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
          gap: 3,
          alignItems: 'stretch',
        }}
      >
        <Box>
          <Card data-animate>
            <CardContent>
              <Stack spacing={1.5}>
                <Typography variant="body1" sx={{ fontSize: 18, fontWeight: 600 }}>
                  Con un livello di inglese B2 e oltre tre anni di esperienza nello sviluppo
                  di applicazioni web e mobile (React e React Native), ho affinato competenze
                  pratiche e una forte passione per il design della UI.
                </Typography>
                <Typography color="text.secondary">
                  Ho inoltre svolto studi in ambito informatico presso l'Università di
                  Cagliari. Ho completato percorsi di formazione professionale nello sviluppo
                  web e nel design dell'interfaccia utente, con particolare utilizzo di
                  Figma.
                </Typography>
                <Typography color="text.secondary">
                  La formazione sul lavoro mi ha permesso di consolidare competenze
                  front-end, ottimizzazione delle performance e collaborazione con team di
                  design e sviluppo.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Stack spacing={3}>
            <Card data-animate>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Formazione
                </Typography>
                <Typography color="text.secondary">
                  Ho seguito studi in Informatica presso l'Università degli Studi di
                  Cagliari. Ho inoltre completato percorsi di formazione professionale nello
                  sviluppo web e nel design dell'interfaccia utente, con particolare utilizzo
                  di Figma.
                </Typography>
              </CardContent>
            </Card>

            <Card data-animate>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Lingue
                </Typography>
                <List dense disablePadding>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Italiano"
                      secondary="Madrelingua"
                      primaryTypographyProps={{ fontWeight: 700 }}
                    />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemText
                      primary="Inglese"
                      secondary="Livello B2"
                      primaryTypographyProps={{ fontWeight: 700 }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Section>
  )
}

export default About

