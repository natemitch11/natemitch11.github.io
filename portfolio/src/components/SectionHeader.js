import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export const SectionHeader = ({ headerTitle }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "baseline" }}>
      <Typography variant="h1">{headerTitle}</Typography>
      <Link to="/">
        <Typography variant="h5" color="inherit" marginLeft="0.5rem">
          ᚱᛖᛏᚢᚱᚾ ᚺᛟᛗᛖ
        </Typography>
      </Link>
    </Box>
  );
};
