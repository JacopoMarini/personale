import { Box, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Section } from './Section'

const Contact = ({ id }: { id: string }) => {
  return (
    <Section id={id} title="Contatti">
      <Stack spacing={2.5}>
        <Typography data-animate color="text.secondary" sx={{ fontSize: 18 }}>
          Sono sempre aperto a nuove opportunità e collaborazioni. Non esitare a contattarmi!
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 2.5,
          }}
        >
          <Box>
            <Card data-animate>
              <CardActionArea
                href="tel:+393403549010"
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <PhoneIphoneRoundedIcon color="primary" />
                    <Stack>
                      <Typography variant="subtitle2" color="text.secondary">
                        Telefono
                      </Typography>
                      <Typography variant="body1" fontWeight={800}>
                        +39 340 354 9010
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>

          <Box>
            <Card data-animate>
              <CardActionArea
                href="mailto:jacopomariniwd@gmail.com"
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <EmailRoundedIcon color="primary" />
                    <Stack>
                      <Typography variant="subtitle2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body1" fontWeight={800}>
                        jacopomariniwd@gmail.com
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>

          <Box>
            <Card data-animate>
              <CardActionArea
                href="https://github.com/JacopoMarini"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <GitHubIcon color="primary" />
                    <Stack>
                      <Typography variant="subtitle2" color="text.secondary">
                        GitHub
                      </Typography>
                      <Typography variant="body1" fontWeight={800}>
                        JacopoMarini
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Stack>
    </Section>
  )
}

export default Contact

