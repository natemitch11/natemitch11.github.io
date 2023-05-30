import React from "react";
import { SectionHeader } from "./SectionHeader";
import { Box, Container, Icon, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Skills = () => {
  const boxStyles = {
    display: "flex",
    justifyContent: "space-evenly",
    color: "primary",
    maxWidth: 650,
    flexWrap: "wrap",
    margin: "auto",
  };

  const iconBoxStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const iconStyles = { fontSize: "60px" };

  return (
    <Container>
      <SectionHeader headerTitle="Skills" />
      <Box sx={boxStyles}>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-html5-plain"></i>
          </Icon>
          <Typography variant="body">HTML5</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-css3-plain"></i>
          </Icon>
          <Typography variant="body">CSS</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-javascript-plain"></i>
          </Icon>
          <Typography variant="body">JavaScript</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-typescript-plain"></i>
          </Icon>
          <Typography variant="body">Typescript</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-nodejs-plain"></i>
          </Icon>
          <Typography variant="body">NodeJS</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-react-original"></i>
          </Icon>
          <Typography variant="body">React</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-java-plain"></i>
          </Icon>
          <Typography variant="body">Java</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-spring-plain"></i>
          </Icon>
          <Typography variant="body">Spring Framework</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-npm-original-wordmark"></i>
          </Icon>
          <Typography variant="body">NPM</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-git-plain"></i>
          </Icon>
          <Typography variant="body">Git</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-github-original"></i>
          </Icon>
          <Typography variant="body">GitHub</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-amazonwebservices-original"></i>
          </Icon>
          <Typography variant="body">AWS</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-mysql-plain"></i>
          </Icon>
          <Typography variant="body">MySQL</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-postgresql-plain"></i>
          </Icon>
          <Typography variant="body">PostgreSQL</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-docker-plain"></i>
          </Icon>
          <Typography variant="body">Docker</Typography>
        </Box>
        <Box sx={iconBoxStyles}>
          <Icon color="primary" sx={iconStyles}>
            <i className="devicon-jira-plain"></i>
          </Icon>
          <Typography variant="body">Jira</Typography>
        </Box>
      </Box>
      <Box sx={iconBoxStyles}>
        <Link to={"/tableau"} style={iconBoxStyles}>
          <Icon color="inherit" sx={iconStyles}>
            <i className="devicon-salesforce-plain"></i>
          </Icon>
          <Typography color="inherit">Tableau Demo</Typography>
        </Link>
      </Box>
    </Container>
  );
};
