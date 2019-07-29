import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "green"
  },
  bg: {
    background: "white"
  },
  btn: {
    background: "#333",
    color: "white",
    marginRight: "10px"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            KidsFly
          </Typography>
          <Button className={classes.btn}>Home</Button>
          <Button className={classes.btn}>About Us</Button>
          <Button className={classes.btn}>Sign Up</Button>
          <Button className={classes.btn}>Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
