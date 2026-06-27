import { Button } from "@mui/material";

function TextLinkButton({
  children,
  href,
}) {
  return (
    <Button
      variant="text"
      href={href}
      target="_blank"
      sx={{
        p: 0,

        minWidth: "auto",

        color: "rgba(255,255,255,.75)",

        letterSpacing: ".18em",

        transition: "color .35s ease",

        "&:hover": {
          color: "#ff5500",
          backgroundColor: "transparent",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default TextLinkButton;