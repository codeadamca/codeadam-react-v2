import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import {SvgIcon} from "@mui/material";
import {ReactComponent as Logo} from "./../images/logo.svg";

const pages = [
  "Teaching",
  "Research and Publishings",
  "Speaking Engagements",
  "Professional Development",
  "About Me",
];

function Header() {
  return (
    <AppBar position="absolute">
      <Toolbar
        sx={{bgcolor: "text.secondary", borderBottom: "3px solid #ffffff"}}
      >
        <SvgIcon sx={{mr: 1}} color="secondary">
          <Logo />
        </SvgIcon>

        <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                my: 1,
                color: "white",
                display: "block",
                textTransform: "none",
              }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box>Social Icons</Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
