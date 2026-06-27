import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

import SectionTitle from "./ui/SectionTitle";
import TextLinkButton from "./ui/buttons/TextLinkButton";

function MusicSection({ currentSet }) {
  const [radioNotice, setRadioNotice] = useState(false);

  return (
    <>
      {/* MUSIC */}

      <Container
        maxWidth="md"
        sx={{
          py: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: 3,
          }}
        >
         <SectionTitle mb={2}>
  MUSIC
</SectionTitle>

          <Typography
            sx={{
              color: "rgba(255,255,255,.35)",
              fontSize: ".75rem",
              letterSpacing: ".25em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            Available On
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <TextLinkButton
  href="https://soundcloud.com/atypicalnoise"
>
  SoundCloud
</TextLinkButton>

            <Typography
              sx={{
                color: "rgba(255,255,255,.25)",
              }}
            >
              ·
            </Typography>

            <TextLinkButton
  href="https://www.youtube.com/@salasinestesia-recordstore"
>
  YouTube
</TextLinkButton>
          </Stack>
        </Box>

        <Card
          sx={{
            backgroundColor: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 2,
            overflow: "hidden",
            maxWidth: 900,
            mx: "auto",
          }}
        >
          <CardContent
            sx={{
              p: {
                xs: 2,
                md: 4,
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 1,
                letterSpacing: ".15em",
                fontWeight: 300,
              }}
            >
              THIS WEEK'S PICK
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,.55)",
                mb: 4,
                textTransform: "uppercase",
                letterSpacing: ".12em",
                fontSize: ".8rem",
              }}
            >
              Selected by Atypical Noise
            </Typography>

            <Box
              sx={{
                width: "100%",
                overflow: "hidden",
                borderRadius: 2,
              }}
            >
              <iframe
                title={currentSet.title}
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={currentSet.embed}
              />
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* RADIO */}

      <Container
        maxWidth="md"
        sx={{
          pb: {
            xs: 8,
            md: 12,
          },
        }}
      >
        <Card
          sx={{
            backgroundColor: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 2,
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          <CardContent
            sx={{
              py: {
                xs: 6,
                md: 8,
              },
              px: {
                xs: 3,
                md: 6,
              },
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255,.45)",
                textTransform: "uppercase",
                letterSpacing: ".25em",
                fontSize: ".75rem",
                mb: 2,
              }}
            >
              Transmission 001
            </Typography>

            <Typography
              sx={{
                color: "#ff5500",
                letterSpacing: ".15em",
                textTransform: "uppercase",
                fontSize: ".9rem",
                mb: 3,
                fontWeight: 500,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#ff5500",
                  position: "relative",

                  "&::after": {
                    content: '""',
                    display: "block",
                    pointerEvents: "none",
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    backgroundColor: "#ff5500",
                    animation: "radioPulse 2s infinite",
                  },
                }}
              />

              NOW TRANSMITTING
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mb: 3,
                letterSpacing: ".25em",
                fontWeight: 300,

                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
              }}
            >
              ATYPICAL RADIO
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,.65)",
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.9,
                mb: 5,
              }}
            >
              Curated underground electronic music,
              resident podcasts, guest mixes and
              broadcasts from Costa Rica.
            </Typography>

            <Button
              variant="outlined"
              onClick={() => setRadioNotice(true)}
              sx={{
                letterSpacing: ".15em",
                px: 4,

                transition:
                  "color 1s ease, border-color 1s ease",

                "&:hover": {
                  color: "#ff5500",
                  borderColor: "#ff5500",
                },
              }}
            >
              LISTEN NOW
            </Button>
          </CardContent>
        </Card>
      </Container>

      <Snackbar
        open={radioNotice}
        autoHideDuration={5000}
        onClose={() => setRadioNotice(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity="info"
          onClose={() => setRadioNotice(false)}
          sx={{
            backgroundColor: "#111",
            color: "#fff",

            border: "1px solid rgba(255,255,255,.08)",

            "& .MuiAlert-icon": {
              color: "#ff5500",
            },
          }}
        >
          Signal detected.

          <br />

          Broadcast channel currently under construction.
        </Alert>
      </Snackbar>
    </>
  );
}

export default MusicSection;