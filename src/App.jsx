import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";

import Grid from "@mui/material/Grid";



import "@fontsource/inter";
import "@fontsource/sora";

import ResidentCard from "./components/ResidentCard";
import MusicSection from "./components/MusicSection";

import dj1 from "./assets/picArtro.png";
import dj2 from "./assets/picKimCou.png";
import dj3 from "./assets/picSubcons.png";

import { weeklySets } from "./data/music";
import Marquee from "./components/Marquee";
import background from "./assets/fondo.png";
import HeroSection from "./components/HeroSection";

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

    "@keyframes radioPulse": {
      "0%": {
        transform: "scale(1)",
        opacity: 0.8,
      },

      "70%": {
        transform: "scale(3)",
        opacity: 0,
      },

      "100%": {
        transform: "scale(3)",
        opacity: 0,
      },
    },
  }}
>
      <Marquee
  text={topTicker}
  speed={55}
/>
      <HeroSection />
<MusicSection
  currentSet={currentSet}
/>
      
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
    Music first. Always.
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