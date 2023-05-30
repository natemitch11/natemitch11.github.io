import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { SectionHeader } from "../SectionHeader";

export const Tableau = () => {
  return (
    <Container>
      <SectionHeader headerTitle="Tableau Demo" />
      <Box sx={{ height: 675 }}>
        <tableau-viz
          id="tableau-viz"
          src="https://10ax.online.tableau.com/t/natemitch11/views/Superstore/Overview"
          toolbar="bottom"
          hide-edit-button
        />
      </Box>
      <Typography>
        The Dashboard above was implemented via Tableau's embed functionality
        for a workbook. If the views have already been created then it can
        easily be embedded via their API
      </Typography>
    </Container>
  );
};
