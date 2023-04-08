import React from "react";
import { Link } from "react-router-dom";
import headshot from "../assets/professional-pic.jpg";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  const fontSize = { fontSize: "0.5rem" };
  return (
    <>
      <Container>
        <SectionHeader headerTitle={"About Me"} />
        <Box display="flex">
          <img id="headshot" src={headshot} alt="me pic" height={350} />
          <Box sx={{ marginLeft: "0.5rem", maxWidth: "1150px" }}>
            <Typography variant="h5">TLDR:</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  Team Lead over the rewrite creating the application that will
                  create Birth Certificates for the State of Utah
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  Prior to this I was an EMT who provided patient care in
                  medical emergencies. I have worked in remote wilderness as
                  well as a premier Level 1 Trauma Center's Emergency Room
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  Accomplished Medical Researcher with publications in various
                  Medical Journals such as{" "}
                  <Link
                    to="https://www.mdpi.com/2077-0383/10/2/251"
                    target="_blank"
                    className="link-hover"
                  >
                    Journal of Clinical Medicine
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="https://journals.lww.com/ccejournal/FListltext/2021/02000/Observations_of_Acoustic_Interruptions_Versus.3.aspx"
                    target="_blank"
                    className="link-hover"
                  >
                    Critical Care Explorations
                  </Link>
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  Highly Skilled Team Player and Collaborator who keeps a cool
                  head in extremely stressful environments
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box sx={{ marginTop: "0.5rem", maxWidth: "1150px" }}>
          <Typography variant="h5">PROFESSIONAL BIO:</Typography>
          <Typography variant="body">
            I am currently the Lead Architect for the application responsible
            for creating Birth Certificates within the State of Utah. I've been
            able to learn a great deal about the necessary formats and
            information required to interface with many Federal Systems as a
            result such as NCHS, STEVE, SSA, and the Census Bereau as a result.{" "}
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" sx={fontSize} />
              </ListItemIcon>
              <Typography variant="body">
                Lead Architect for the application that creates, registers, and
                exports of Birth Certificates for the State of Utah to residents
                and the Federal Government
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" sx={fontSize} />
              </ListItemIcon>
              <Typography variant="body">
                Participated in the creation of various other applications for
                the Department of Vital Records and Statistics within the State
                of Utah
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" sx={fontSize} />
              </ListItemIcon>
              <Typography variant="body">
                Architected Search functionality for Death Records within Utah
                for both Funeral Home Users and the Office of the Medical
                Examiner
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon color="primary" sx={fontSize} />
              </ListItemIcon>
              <Typography variant="body">
                Architected a more efficient Data Export for researchers needing
                access to Death Record data that led to over a 400% decrease in
                the amount of time needed to export. This improvement also
                reduced the resulting file's size
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Container>
    </>
  );
};
