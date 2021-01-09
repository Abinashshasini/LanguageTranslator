import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import FeedbackIcon from "@material-ui/icons/Feedback";
import logo from "../../assets/logo/icon.png";
const useStyles = makeStyles({
  root: {
    height: "55px",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  buttonicon: {
    color: "#34435f",
  },
  links: {
    textDecoration: "none",
    color: " Black",
  },
  applogo: {
    margin: "auto",
    textAlign: "center",
  },
  applogoImg: {
    width: "45px",
    height: "40px",
    marginRight: "55px",
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Divider />
        <List component='nav' aria-label='main mailbox folders'>
          <Link to='/' className={classes.links}>
            <ListItem button key={1}>
              <ListItemIcon>
                <HomeIcon fontSize='small' className={classes.buttonicon} />
              </ListItemIcon>
              Home
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List component='nav' aria-label='main mailbox folders'>
          <Link to='/about' className={classes.links}>
            <ListItem button key={2}>
              <ListItemIcon>
                <InfoIcon fontSize='small' className={classes.buttonicon} />
              </ListItemIcon>
              About US
            </ListItem>
          </Link>

          <Link to='/feedback' className={classes.links}>
            <ListItem button key={4}>
              <ListItemIcon>
                <FeedbackIcon fontSize='small' className={classes.buttonicon} />
              </ListItemIcon>
              Feedback
            </ListItem>
          </Link>
        </List>
      </div>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <AppBar position='static' color='default'>
          <Toolbar className={classes.root} variant='dense'>
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
            <div className={classes.applogo}>
              <img src={logo} className={classes.applogoImg} />
            </div>
          </Toolbar>
        </AppBar>
      ))}
    </div>
  );
};
export default Navbar;
