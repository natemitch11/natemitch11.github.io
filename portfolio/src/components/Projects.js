import { Box, Container } from "@mui/material";
import React from "react";
import { SectionHeader } from "./SectionHeader";
import { EirProject } from "./EirProject";
import { FindMyPhoneProject } from "./FindMyPhoneProject";

export const Projects = () => {
  return (
    <>
      <Container>
        <SectionHeader headerTitle={"Projects"} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <EirProject />
          <FindMyPhoneProject />
        </Box>
      </Container>
    </>
  );
};
