/*eslint-disable*/
import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
// @material-ui/core components
import {
  Collapse,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import {
  ExpandMore,
  ExpandLess,
  SettingsApplications,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.js";

import styles from "assets/jss/material-dashboard-react/components/sidebarStyle.js";

const useStyles = makeStyles(styles);

export default function Sidebar(props) {
  const classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.endsWith(routeName) ? true : false;
  }

  const { color, logo, image, logoText, routes } = props;

  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = (menu) => {
    setOpen((prevState) => ({ ...prevState, [menu]: !prevState[menu] }));
  };

  const handleListItemClick = (key) => {
    setSelectedIndex(key);
    console.log(key);
  };

  const createSubMenu = (items) => {
    return items.map((prop, key) => {
      var activePro = " ";
      var listItemClasses;

      listItemClasses = classNames({
        [" " + classes[color]]: activeRoute(prop.layout + prop.path),
      });

      const whiteFontClasses = classNames({
        [" " + classes.whiteFont]: activeRoute(prop.layout + prop.path),
      });
      return (
        <React.Fragment key={key}>
          {!prop.children ? (
            // <NavLink
            //   to={{ pathname: prop.layout + prop.path, state: prop.name }}
            //   className={activePro + classes.item}
            //   activeClassName="active"
            // >
            <ListItem
              button
              className={classes.itemLink + listItemClasses}
              component={Link}
              to={{ pathname: prop.layout + prop.path, state: prop.name }}
              key={key}
              selected={selectedIndex === key}
              onClick={() => handleListItemClick(key)}
            >
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          ) : (
            // </NavLink>
            <>
              <ListItem
                button
                className={classes.itemLink + listItemClasses}
                component={Link}
                to={{ pathname: prop.layout + prop.path, state: prop.name }}
                onClick={() => {
                  handleClick(prop.name);
                  handleListItemClick(key);
                }}
                key={key}
              >
                {open[prop.name] ? (
                  <ExpandMore className={classNames(classes.itemIcon)} />
                ) : (
                  <ExpandLess className={classNames(classes.itemIcon)} />
                )}
                <ListItemText
                  primary={prop.name}
                  className={classNames(classes.itemText, whiteFontClasses)}
                  disableTypography={true}
                />
              </ListItem>
              <Collapse in={open[prop.name]} timeout="auto" unmountOnExit>
                <Divider classes={{ root: classes.divider }} />
                <List
                  component="div"
                  disablePadding
                  className={classNames(classes.nested)}
                  key={key}
                >
                  {createSubMenu(prop.children)}
                </List>
              </Collapse>
            </>
          )}
          {prop.name === "Travaux" ? <Divider /> : null}
        </React.Fragment>
      );
    });
  };

  var brand = (
    <div className={classes.logo}>
      <a
        href="https://ville.terrebonne.qc.ca"
        className={classNames(classes.logoLink)}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks />
            <List className={classes.list}>{createSubMenu(routes)}</List>
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          ) : (
            <div
              className={classes.background}
              style={{ backgroundColor: "#000" }}
            />
          )}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper),
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <List className={classes.list}>{createSubMenu(routes)}</List>
          </div>
          <div className={classes.background} />
        </Drawer>
      </Hidden>
    </div>
  );
}

Sidebar.propTypes = {
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: PropTypes.string,
  image: PropTypes.string,
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
};
