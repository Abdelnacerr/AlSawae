import React from "react";

import Parallax from "components/Parallax/Parallax.js";
import Header from "../components/Header/Header.js";
import Hlinks from "./Hlinks";

function Contact() {
  return (
    <>
      <Header
        brand="SAWAE BRANDS"
        rightLinks={<Hlinks />}
        color="transparent"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax image={require("assets/img/bg4.jpg")}> </Parallax>
    </>
  );
}

export default Contact;
