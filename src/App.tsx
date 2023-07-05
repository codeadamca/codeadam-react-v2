import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import {SvgIcon} from "@mui/material";
import {ReactComponent as Logo} from "./images/logo.svg";
import {palette} from "@mui/system";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ProTip from "./ProTip";
import Header from "./components/header";

import {AccessAlarm, ThreeDRotation, Delete} from "@mui/icons-material";

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
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            noWrap
            sx={{
              color: "secondary.main",
              fontSize: "2.5rem",
              fontWeight: 400,
              marginBottom: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                paddingLeft: 1,
                paddingRight: 1,
                bgcolor: "text.primary",
              }}
            >
              Adam Thomas
            </Box>
          </Typography>
          <Typography
            variant="h2"
            noWrap
            sx={{
              color: "error.main",
              fontSize: "3.5rem",
              fontWeight: 400,
              marginBottom: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                paddingLeft: 1,
                paddingRight: 1,
                bgcolor: "text.primary",
              }}
            >
              I Teach Code!
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "secondary.main",
              lineHeight: 2,
            }}
          >
            <Box
              component="span"
              sx={{
                padding: 0.5,
                bgcolor: "text.primary",
              }}
            >
              Self-taught full-stack developer.
            </Box>
            <br />
            <Box
              component="span"
              sx={{
                padding: 0.5,
                bgcolor: "text.primary",
              }}
            >
              Learning code and teaching code at Humber College, Toronto,
              Canada.
            </Box>
          </Typography>
        </Box>

        <video
          preload="auto"
          autoPlay={true}
          loop={true}
          muted={true}
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
