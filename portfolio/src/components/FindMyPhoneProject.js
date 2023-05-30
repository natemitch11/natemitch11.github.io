import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  CircularProgress,
  Container,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircleIcon from "@mui/icons-material/Circle";

export const FindMyPhoneProject = () => {
  const [loading, setLoading] = useState(true);
  const fontSize = { fontSize: "0.5rem" };
  return (
    <Container
      sx={{ display: "flex", flexDirection: "row", marginBottom: "1rem" }}
    >
      <Box>
        {loading && <CircularProgress />}
        <iframe
          src="https://www.loom.com/embed/2923460e73ce4a5d8fd4b73dd15ef68e"
          style={{ border: 0 }}
          allowFullScreen
          width={700}
          height={350}
          onLoad={() => {
            setLoading(false);
          }}
          title="Find My Phone Demo"
        ></iframe>

        <Box>
          <Typography variant="h5">
            Database: PostgreSQL <i className="devicon-postgresql-plain"></i>
          </Typography>
          <Typography variant="h5">
            Back End: Java/Spring Framework{" "}
            <i className="devicon-spring-plain"></i>
          </Typography>
          <Typography variant="h5">
            Front End: React <i className="devicon-react-plain"></i>
          </Typography>
          <Typography variant="h5">
            Technologies: JWT, Spring Security, Spring Data JPA, Hibernate
          </Typography>
          <Link
            to="https://www.openstreetmap.org/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            <Typography
              variant="h5"
              color="inherit"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              OpenStreetMaps
              <ArrowForwardIcon />
            </Typography>
          </Link>
          <Link
            to="https://github.com/natemitch11/location-sharing-capstone"
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
          Find My Phone: This project is a clone of the Google and Apple's
          variations of "Find my Device". The software is a Java/Spring API with
          a Dockerized Postgres database image. It interfaces with a React UI
          that utilizes JWT Authentication to lock down data access at the
          request level. Some highlights are:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CircleIcon color="primary" sx={fontSize} />
            </ListItemIcon>
            <Typography variant="body">
              Securely Register and Login with Spring Security
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon color="primary" sx={fontSize} />
            </ListItemIcon>
            <Typography variant="body">
              Store a Location for a device
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon color="primary" sx={fontSize} />
            </ListItemIcon>
            <Typography variant="body">
              View previous locations by device
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CircleIcon color="primary" sx={fontSize} />
            </ListItemIcon>
            <Typography variant="body">
              Interactive map that is filterable
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};
