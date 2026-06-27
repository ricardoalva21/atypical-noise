import { Typography } from "@mui/material";

function SectionTitle({
  children,
  mb = 6,
}) {
  return (
    <Typography
      variant="h3"
      textAlign="center"
      mb={mb}
      sx={{
        fontSize: {
          xs: "2rem",
          md: "3rem",
        },

        letterSpacing: ".25em",

        fontWeight: 300,
      }}
    >
      {children}
    </Typography>
  );
}

export default SectionTitle;