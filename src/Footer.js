import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: '50%',
transform: 'translateX(-50%)'
      }}
    >
      <Typography variant="caption" display="block" gutterBottom >
        Copyright &copy; {new Date().getFullYear()} <a href="https://www.edafter.com">Edafter</a>
      </Typography>
    </Box>
  );
}

export default Footer;
