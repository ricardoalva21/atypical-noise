import {
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";

function ResidentCard({
  image,
  name,
  subtitle,
  instagram,
  soundcloud,
}) {
  return (
    <Card
      sx={{
        height: "100%",

        backgroundColor: "rgba(10,10,10,.70)",

        backdropFilter: "blur(20px)",

        border: "1px solid rgba(255,255,255,0.08)",

        borderRadius: 2,

        transition: "all .3s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          border: "1px solid rgba(255,255,255,0.2)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",

          aspectRatio: {
            xs: "4 / 3",
            md: "1 / 1",
          },

          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",

            transition: "transform .5s ease",

            "&:hover": {
              transform: "scale(1.03)",
            },
          }}
        />
      </Box>

      <CardContent
        sx={{
          textAlign: "center",

          p: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,

            mb: 1,

            fontSize: {
              xs: "1.8rem",
              md: "1.5rem",
            },
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,.55)",

            mb: 2,

            fontSize: {
              xs: ".9rem",
              md: ".95rem",
            },

            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </Typography>

        <Stack
          direction={{
            xs: "row",
            md: "column",
          }}
          spacing={1}
        >
          <Button
            variant="contained"
            href={instagram}
            target="_blank"
            fullWidth
            sx={{
              minHeight: 42,
            }}
          >
            Instagram
          </Button>

          <Button
            variant="outlined"
            href={soundcloud}
            target="_blank"
            fullWidth
            sx={{
              minHeight: 42,
            }}
          >
            SoundCloud
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ResidentCard;