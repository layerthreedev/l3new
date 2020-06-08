/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps, Business, Home, Phone} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>

            <ListItem className={classes.listItem}>
                <Link to={"/"} color="transparent" className={classes.routeLink} >
                    <Button
                        color="transparent"
                        // target="_blank"
                        className={classes.navLink}
                    >
                        <Home className={classes.icons} />
                        Home
                    </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <Link to={"/about-us"} color="transparent" className={classes.routeLink} >
                    <Button
                        // href="/about-us"
                        color="transparent"
                        // target="_blank"
                        className={classes.navLink}
                    >
                        <Business className={classes.icons} />
                        About Us
                    </Button>
                </Link>
            </ListItem>

            <ListItem className={classes.listItem}>
                <div color="transparent" className={classes.routeLink} >
                    <CustomDropdown
                        noLiPadding
                        buttonText="Services"
                        buttonProps={{
                            className: classes.navLink,
                            color: "transparent"
                        }}
                        buttonIcon={Apps}
                        dropdownList={[
                            <Link to="/" className={classes.dropdownLink}>
                                Managed IT Services
                            </Link>,
                            <Link to="/" className={classes.dropdownLink}>
                                Cloud Solutions
                            </Link>,
                            <Link to="/" className={classes.dropdownLink}>
                                Voip Solutions
                            </Link>,
                            <Link to="/" className={classes.dropdownLink}>
                                Network Security
                            </Link>,
                            <Link to="/" className={classes.dropdownLink}>
                                Network Implementation
                            </Link>,
                            <Link to="/" className={classes.dropdownLink}>
                                IT Contracting
                            </Link>,
                            <Link to="/" className={classes.dropdownLink}>
                                IT Helpdesk
                            </Link>,
                            <Link to="/" className={classes.dropdownLink}>
                                Web Development
                            </Link>,
                        ]}
                    />
                </div>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={"/contact-us"} color="transparent" className={classes.routeLink}>
                    <Button
                        color="transparent"
                        // target="_blank"
                        className={classes.navLink}
                    >

                        <Phone className={classes.icons} />
                        Contact Us

                    </Button>
                    <span className={classes.phoneNumber}>(306)808-0202</span>
                </Link>
            </ListItem>


            <ListItem className={classes.listItem}>
                {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
                <Tooltip
                    id="instagram-twitter"
                    title="Follow us on twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        href="https://twitter.com/CreativeTim?ref=creativetim"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Follow us on facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/CreativeTim?ref=creativetim"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>
        </List>

    );
}
