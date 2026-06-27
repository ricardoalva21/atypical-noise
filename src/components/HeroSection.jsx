import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import logo from "../assets/logo.png";

function HeroSection() {
  return (
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
  );
}

export default HeroSection;