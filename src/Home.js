import React from "react";
import web from "../src/images/img2.jpg";
import { NavLink } from "react-router-dom";
import Common from './Common';

const Home = () => {
  return (
    <div>
      <Common name="Grow you business with" imgsrc={web} visit="/service" btname="Get Started"/>
   </div>
  );
};

export default Home;
