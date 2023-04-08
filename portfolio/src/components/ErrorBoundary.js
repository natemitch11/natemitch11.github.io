import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ErrorBoundary = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "3rem" }}>
          Oh no! Something went wrong
        </Typography>
        <Link to="/">Return Home</Link>
      </Box>
    </>
  );
};
