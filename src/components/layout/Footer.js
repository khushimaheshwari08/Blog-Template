import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        py: 1,
      }}
    >
      <Typography sx={{ color: "white" }}>&#169; Blog App</Typography>
    </Grid>
  );
};

export default Footer;
