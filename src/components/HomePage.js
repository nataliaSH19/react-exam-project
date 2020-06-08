import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
};
export default HomePage;
