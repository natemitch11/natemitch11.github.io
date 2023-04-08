import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Alert } from "@mui/material";
import { SectionHeader } from "./SectionHeader";
import {
  Email,
  Drafts,
  FileOpen,
  ContentCopy,
  CheckCircleOutline,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Contact = () => {
  const [emailOpen, setEmailOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  }, [showAlert]);

  const fontSize = { fontSize: "200px" };
  return (
    <>
      <Container>
        <SectionHeader headerTitle="Contact Me" />
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          {emailOpen ? (
            <Box>
              <Drafts
                sx={fontSize}
                color="secondary"
                onClick={() => setEmailOpen(!emailOpen)}
              />
              <Typography
                variant="h6"
                onClick={() => {
                  setShowAlert(true);
                  navigator.clipboard.writeText("nate.mitch11@gmail.com");
                }}
                sx={{ cursor: "pointer" }}
              >
                nate.mitch11@gmail.com
                <ContentCopy sx={{ marginLeft: "0.5rem" }} />
              </Typography>
              {showAlert && (
                <Alert
                  icon={<CheckCircleOutline fontSize="inherit" />}
                  severity="success"
                  sx={{ height: 50, maxWidth: 400 }}
                >
                  copied to clipboard!
                </Alert>
              )}
            </Box>
          ) : (
            <Link
              to="#"
              onClick={(e) => {
                setEmailOpen(!emailOpen);
                window.location = "mailto:nate.mitch11@gmail.com";
                e.preventDefault();
              }}
            >
              <Email sx={fontSize} />
            </Link>
          )}

          <Link to="https://www.linkedin.com/in/natemitch11/" target="_blank">
            <svg
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="200"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Link>
          <Link
            to="https://docs.google.com/document/d/1ow1F7XKS0zoz2Ik5ZyLfoqol5IgCioU3nfwlLQpydw4/edit?usp=sharing"
            target="_blank"
          >
            <FileOpen sx={fontSize} />
          </Link>
        </Box>
      </Container>
    </>
  );
};
