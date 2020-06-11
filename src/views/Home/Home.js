import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// Style
import styles from "assets/jss/material-kit-react/views/homePage.js";


// Sections for this page
import ProductSection from "../../NotProject/LandingPage/Sections/ProductSection";
import TeamSection from "../../NotProject/LandingPage/Sections/TeamSection";
import WorkSection from "../../NotProject/LandingPage/Sections/WorkSection";
import CustomInput from "../../components/CustomInput/CustomInput";
import Pagination from "../../components/Pagination/Pagination";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
      <div>
        <Header
            color="transparent"
            routes={dashboardRoutes}
            brand={require ("assets/img/Layer3Logo.svg")}
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 100,
              color: "white"

            }}
            {...rest}
        />
        <Parallax filter image={require("assets/img/l3-header.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                  <h3>
                    Managed IT Services<br/>
                    Offsite Backup and Disaster Recovery<br/>
                    Network Security and Implementation<br/>
                    Web Design and Development
                </h3>
              </GridItem>

            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
  );
}
