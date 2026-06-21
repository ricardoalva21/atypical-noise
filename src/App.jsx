import {
  Box,
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import logo from "./assets/logo.png";

import "@fontsource/inter";
import "@fontsource/sora";

import ResidentCard from "./components/ResidentCard";

import dj1 from "./assets/picArtro.png";
import dj2 from "./assets/picKimCou.png";
import dj3 from "./assets/picSubcons.png";

import { weeklySets } from "./data/music";
import Marquee from "./components/Marquee";
import background from "./assets/fondo.png";

import mobileBackground from "./assets/fondo_movil.png";

const currentSet = weeklySets.at(-1);
const topTicker =
  "SOMETHING FOR YOUR MIND, YOUR BODY, AND YOUR SOUL • IT'S THE POWER TO AROUSE CURIOSITY • THE PURPOSE • THE GOAL WHICH ONE ACTS ON • A JOURNEY OF FORCE";

const bottomTicker =
  "ETERNITY IS PAST • WRONG IS RIGHT • IT'S THE POINT OF GREATEST INTENSITY • PLEASURES OF THE HIGHEST SENSE • FEELINGS OF WARMTH AND SECURITY • THE ULTIMATE SEDUCTION • THE REALM";
function App() 

{
  return (
    <>
   <Box
  component="img"
  src={mobileBackground}
  alt=""
  sx={{
    display: {
      xs: "block",
      md: "none",
    },

    position: "fixed",

    inset: 0,

    width: "100vw",

    height: "100vh",

    objectFit: "cover",

    objectPosition: "center",

    zIndex: -2,
  }}
/>

<Box
  component="img"
  src={background}
  alt=""
  sx={{
    display: {
      xs: "none",
      md: "block",
    },

    position: "fixed",

    inset: 0,

    width: "100vw",

    height: "100vh",

    objectFit: "cover",

    objectPosition: "center",

    zIndex: -2,
  }}
/>

<Box
  sx={{
    position: "fixed",

    inset: 0,

    backgroundColor: "rgba(0,0,0,.35)",

    zIndex: -1,
  }}
/>
<Box
  sx={{
    position: "relative",
    zIndex: 1,
  }}
>
      <Marquee
  text={topTicker}
  speed={55}
/>
      {/* HERO */}

      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 2,
          }}
        >
        <Box
  component="img"
  src={logo}
  alt="Logo"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  sx={{
    width: {
      xs: "80%",
      sm: "65%",
      md: 500,
    },

    maxWidth: 500,

    height: "auto",

    mb: 4,

    cursor: "pointer",

    transition: "transform .3s ease",

    "&:hover": {
      transform: "scale(1.02)",
    },
  }}
/>

          <Typography
            sx={{
              color: "grey.400",
              maxWidth: 600,
              mb: 6,
            }}
          >
            Underground electronic music collective.
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mb: 4,
              fontSize: {
                xs: "2rem",
                md: "3rem",
              },
              letterSpacing: ".25em",
              fontWeight: 300,
            }}
          >
            RESIDENTS
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
          >
            <Button variant="outlined" href="#dj1">
              ARTRO
            </Button>

            <Button variant="outlined" href="#dj2">
              KIM COU
            </Button>

            <Button variant="outlined" href="#dj3">
              SUBCONS
            </Button>
          </Stack>
        </Box>
      </Container>

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
    mb: 6,
  }}
>
  <Typography
    variant="h3"
    sx={{
      mb: 3,
      fontSize: {
        xs: "2rem",
        md: "3rem",
      },
      letterSpacing: ".25em",
      fontWeight: 300,
    }}
  >
    MUSIC
  </Typography>

  <Stack
    direction="row"
    spacing={3}
    justifyContent="center"
    sx={{
      mb: 6,
    }}
  >
    <Button
      variant="text"
      href="https://soundcloud.com/atypicalnoise"
      target="_blank"
      sx={{
        color: "rgba(255,255,255,.75)",
        letterSpacing: ".12em",

        "&:hover": {
          color: "#ff5500",
          backgroundColor: "transparent",
        },
      }}
    >
      SoundCloud
    </Button>

    <Button
      variant="text"
      href="https://www.youtube.com/@salasinestesia-recordstore"
      target="_blank"
      sx={{
        color: "rgba(255,255,255,.75)",
        letterSpacing: ".12em",

        "&:hover": {
          color: "#ff5500",
          backgroundColor: "transparent",
        },
      }}
    >
      YouTube
    </Button>
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

      {/* RESIDENTS */}

      <Container
        maxWidth="lg"
        sx={{
          pb: 10,
        }}
      >
        <Typography
          variant="h3"
          textAlign="center"
          mb={6}
          sx={{
            fontSize: {
              xs: "2rem",
              md: "3rem",
            },
            letterSpacing: ".25em",
            fontWeight: 300,
          }}
        >
          OUR RESIDENTS
        </Typography>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }} id="dj1">
            <ResidentCard
              image={dj1}
              name="Artro"
              subtitle="Producer/DJ · Sinestesia Record Store"
              instagram="https://www.instagram.com/artroone/"
              soundcloud="https://soundcloud.com/artromusic"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }} id="dj2">
            <ResidentCard
              image={dj2}
              name="Kim Cou"
              subtitle="Producer/DJ· Aviary Recordings "
              instagram="https://www.instagram.com/kimcou_/"
              soundcloud="https://soundcloud.com/kimcou"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }} id="dj3">
            <ResidentCard
              image={dj3}
              name="Subcons"
              subtitle="Producer/DJ · Co-Founder"
              instagram="https://www.instagram.com/ricardoalvarado.subcons/"
              soundcloud="https://soundcloud.com/djsubcons"
            />
          </Grid>
        </Grid>
      </Container>
      <Container
  maxWidth="md"
  sx={{
    py: {
      xs: 10,
      md: 14,
    },
    textAlign: "center",
  }}
>
  <Typography
    variant="h3"
    sx={{
      mb: 4,
      letterSpacing: ".25em",
      fontWeight: 300,

      fontSize: {
        xs: "2rem",
        md: "3rem",
      },
    }}
  >
    IT'S ALL ABOUT MUSIC
  </Typography>

  <Typography
    sx={{
      color: "rgba(255,255,255,.65)",
      lineHeight: 1.9,
      fontSize: {
        xs: "1rem",
        md: "1.1rem",
      },
      maxWidth: 700,
      mx: "auto",
    }}
  >
    Atypical Noise is a collective focused on underground electronic music,
    connecting artists, ideas and sounds through carefully curated DJ sets,
    events and collaborations.
  </Typography>

  <Typography
    sx={{
      mt: 4,
      letterSpacing: ".15em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.45)",
    }}
  >
    Music first. Forever.
  </Typography>
</Container>
<Box
  component="footer"
  sx={{
    borderTop: "1px solid rgba(255,255,255,.08)",
    py: 5,
    mt: 4,
  }}
>
  <Container maxWidth="lg">
    <Stack spacing={3}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 4 }}
        sx={{
          justifyContent: {
            xs: "center",
            sm: "flex-start",
          },

          alignItems: {
            xs: "center",
            sm: "flex-start",
          },
        }}
      >
        <Button
          variant="text"
          href="https://www.instagram.com/atypicalnoise/"
          target="_blank"
          sx={{
            fontSize: ".8rem",
            letterSpacing: ".12em",
            color: "rgba(255,255,255,.65)",

            "&:hover": {
              color: "#ff5500",
              backgroundColor: "transparent",
            },
          }}
        >
          INSTAGRAM
        </Button>

        <Button
          variant="text"
          href="https://soundcloud.com/atypicalnoise"
          target="_blank"
          sx={{
            fontSize: ".8rem",
            letterSpacing: ".12em",
            color: "rgba(255,255,255,.65)",

            "&:hover": {
              color: "#ff5500",
              backgroundColor: "transparent",
            },
          }}
        >
          SOUNDCLOUD
        </Button>

        <Button
          variant="text"
          href="https://www.youtube.com/@salasinestesia-recordstore"
          target="_blank"
          sx={{
            fontSize: ".8rem",
            letterSpacing: ".12em",
            color: "rgba(255,255,255,.65)",

            "&:hover": {
              color: "#ff5500",
              backgroundColor: "transparent",
            },
          }}
        >
          YOUTUBE
        </Button>
      </Stack>

      <Typography
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  sx={{
    cursor: "pointer",

    color: "rgba(255,255,255,.35)",

    fontSize: ".75rem",

    letterSpacing: ".08em",

    textAlign: {
      xs: "center",
      sm: "left",
    },

    "&:hover": {
      color: "#ff5500",
    },
  }}
>
  © 2026 ATYPICAL NOISE
</Typography>
    </Stack>
  </Container>
</Box>
<Marquee
  text={bottomTicker}
  speed={45}
/>
    </Box>
    </>
  );
}

export default App;