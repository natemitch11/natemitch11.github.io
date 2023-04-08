import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";
import { SectionHeader } from "./SectionHeader";

export const Projects = () => {
  const fontSize = { fontSize: "0.5rem" };
  return (
    <>
      <Container>
        <SectionHeader headerTitle={"Projects"} />
        <Box sx={{ display: "flex" }}>
          <Box>
            <iframe
              src="https://www.loom.com/embed/454537073c5342dbbfc5709382c17d47"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              width={700}
              height={350}
              title="Eir Health Demo"
            ></iframe>
            <Box>
              <Typography variant="h5">
                Back End: Node JS <i class="devicon-nodejs-plain"></i> |
                Packages: Express, Cors, BCrypt
              </Typography>
              <Typography variant="h5">
                Front End: JavaScript <i class="devicon-javascript-plain"></i>{" "}
                HTML <i class="devicon-html5-plain"></i>
                CSS <i class="devicon-css3-plain"></i> | Packages: Axios,
                <Link to="https://fullcalendar.io" target="_blank">
                  <h4>Fullcalendar.io</h4>
                </Link>
              </Typography>
              <Box class="github-container">
                <Link
                  to="https://github.com/natemitch11/eir-scheduling-app"
                  target="_blank"
                >
                  <Typography variant="h5" fontWeight="bold" color="inherit">
                    CODE
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ maxWidth: 700, margin: "1rem" }}>
            <Typography variant="body">
              Eir Scheduling Solutions: This project is a Full-Stack
              application. The server has API's that the front end can use to
              obtain the data that is populated on the calendar. The software is
              a simple scheduling application geared towards doctors offices.
              with it you can:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  Securely Register and login
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">Create a New Patient</Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  Create New Appointments that are linked to patients
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  All Calendar events are clickable and draggable
                </Typography>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon color="primary" sx={fontSize} />
                </ListItemIcon>
                <Typography variant="body">
                  Data persists and is stored securely in a database
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </>
  );
};
