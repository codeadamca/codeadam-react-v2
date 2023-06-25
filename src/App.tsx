import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import {SvgIcon} from "@mui/material";
import {ReactComponent as Logo} from "./images/logo.svg";

import ProTip from "./ProTip";

import {
  AccessAlarm,
  PhotoCamera,
  ThreeDRotation,
  Delete,
} from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth={false}>
      <AppBar position="absolute">
        <Toolbar>
          <SvgIcon sx={{mr: 1}} color="secondary">
            <Logo />
          </SvgIcon>
          <Typography color="inherit" noWrap>
            Teaching | Research and Publishings | Speaking Engagements |
            Professional Development | About Me
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Box sx={{zIndex: 2}}>
          <Typography variant="h1" color="secondary">
            Adam Thomas
          </Typography>
          <Typography variant="h2" color="secondary">
            I Teach Code!
          </Typography>
          <Typography color="secondary">
            Self-taught full-stack developer.
            <br />
            Learning code and teaching code at Humber College, Toronto, Canada.
          </Typography>
        </Box>

        <video
          preload="auto"
          autoPlay={true}
          loop={true}
          className="ca-fullscreen-background"
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            zIndex: 1,
          }}
        >
          <source src="https://codeadam.ca/static/media/home-video.6057a6c8ab306b428d78.mp4" />
        </video>
      </Box>

      <Grid
        container
        component="main"
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          verticalAlign: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h1" color="secondary">
          Some Content
        </Typography>
      </Grid>

      <Container>
        <Box sx={{my: 4}}>
          <AccessAlarm />
          <ThreeDRotation />
          <Delete />
          <Delete color="primary" />
          <Delete color="secondary" />
          <Delete color="success" />
          <Delete color="action" />
          <Delete color="disabled" />
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Create React App example in TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Container>
  );
}
