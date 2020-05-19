import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../logo.svg";
// import Menu from '@material-ui/core/Menu'
// import MenuItem from '@material-ui/core/MenuItem'

export const Header = () => {
  return (
    <AppBar position="sticky" style={{ borderBottom: "3px solid blue" }}>
      <Toolbar>
        <img src={logo} className="App-logo" alt="logo" width="56px" />
        <Typography variant="h6" noWrap color="inherit">
          Pixabay Image Finder
        </Typography>
      </Toolbar>
      <Toolbar>
        <a href="https://pixabay.com/">
          <img
            src="https://pixabay.com/static/img/public/leaderboard_b.png"
            alt="Pixabay"
            width="100%"
          />
        </a>
      </Toolbar>
    </AppBar>
  );
};
