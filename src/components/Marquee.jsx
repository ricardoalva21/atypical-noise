import { Box, Typography } from "@mui/material";

function Marquee({ text, speed = 40 }) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        py: 1.2,

        borderTop: "1px solid rgba(255,255,255,.06)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <Typography
        sx={{
          display: "inline-block",

          color: "#ff5500",

          fontSize: {
            xs: ".7rem",
            md: ".8rem",
          },

          letterSpacing: ".15em",

          whiteSpace: "nowrap",

          animation: `marquee ${speed}s linear infinite`,

          "@keyframes marquee": {
            from: {
              transform: "translateX(0%)",
            },

            to: {
              transform: "translateX(-50%)",
            },
          },
        }}
      >
        {text}
        {" • "}
        {text}
        {" • "}
        {text}
      </Typography>
    </Box>
  );
}

export default Marquee;