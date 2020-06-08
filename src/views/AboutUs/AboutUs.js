import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import Parallax from "../../components/Parallax/Parallax";

const useStyles = makeStyles(styles);

export default function AboutUs(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="white"
        brand={require ("assets/img/Layer3Logo.svg")}
        rightLinks={<HeaderLinks />}
        {...rest}
      />

      <Parallax filter image={require("assets/img/l3-header.png")}>
      </Parallax>

        <Footer  />
    </div>
  );
}
