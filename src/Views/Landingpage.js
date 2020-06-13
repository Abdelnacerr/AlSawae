import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import Header from "../components/Header/Header.js";
import Card from "../components/Card/Card.js";
import Footer from "../components/Footer/Footer.js";
import Parallax from "../components/Parallax/Parallax.js";
import Links from "./Links.js";
import index from "../index.js";


import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

const Landingpage = (props) => {
  const classes = useStyles();
  return (
    <>
      <Header
        brand="SAWAE BRANDS"
        rightLinks={<Links />}
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
<Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>SAWAE BRANDS.</h1>
                <h3 className={classes.subtitle}>
                  A wholesale perfumes distributor based in Kenya and Dubai.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>   
      <div className={classNames(classes.main, classes.mainRaised)}>
        This is some text within a card body.
        This is some text within a card bodyThis is some text within a card body
        This is some text within a card body
        This is some text within a card body
        This is some text within a card body
        This is some text within a card body
        This is some text within a card body
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.
        This is some text within a card body.

        </div>
      <Card>
        <Footer>
          
        </Footer>
      </Card>
    </>
  );
};

export default Landingpage;
