import React from "react";
import Header from "./components/Header";
import { Button } from '@material-ui/core';

function HomePage(props) {
  return (
    <section className="home">
      <Header />
      <img src={"/assets/image (24).jpg"} alt="Home Page" className="home-img" />
    </section>
  );
}

export default HomePage;
