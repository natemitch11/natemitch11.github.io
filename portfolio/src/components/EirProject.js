import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  CircularProgress,
  Container,
  styled,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

const StyledBox = styled(Box)({
  padding: "none",
});

export const EirProject = () => {
  const [loading, setLoading] = useState(true);
  const fontSize = { fontSize: "0.5rem" };
  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", marginBottom: "1rem" }}
    >
      <Box>
        {loading && <CircularProgress />}
        <iframe
          src="https://www.loom.com/embed/454537073c5342dbbfc5709382c17d47"
          style={{ border: 0 }}
          allowFullScreen
          width={700}
          height={350}
          onLoad={() => {
            setLoading(false);
          }}
          title="Eir Health Demo"
        ></iframe>

        <Box>
          <Typography variant="h5">
            Back End: Node JS with Express{" "}
            <i className="devicon-nodejs-plain"></i>
          </Typography>
          <Typography variant="h5">
            Front End: JavaScript <i className="devicon-javascript-plain"></i>{" "}
            HTML <i className="devicon-html5-plain"></i>
            CSS <i className="devicon-css3-plain"></i>
          </Typography>
          <Link
            to="https://fullcalendar.io"
            target="_blank"
            color="inherit"
            style={{ textDecoration: "underline" }}
          >
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Fullcalendar.io
              <ArrowForwardIcon />
            </Typography>
          </Link>
          <Link
            to="https://github.com/natemitch11/eir-scheduling-app"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color="inherit"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              CODE
              <ArrowForwardIcon />
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box sx={{ maxWidth: 700, marginLeft: "1rem" }}>
        <Typography variant="body">
          Eir Scheduling Solutions: This project is a Full-Stack application.
          The server has API's that the front end can use to obtain the data
          that is populated on the calendar. The software is a simple scheduling
          application geared towards doctors offices. with it you can:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon color="primary" sx={fontSize} />
            </ListItemIcon>
            <Typography variant="body">Securely Register and login</Typography>
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
    </Container>
  );
};
