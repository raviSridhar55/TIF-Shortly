import React, { useState } from "react";
import Navbar from "../Layout/Navbar";
import Hamburger from "../Layout/Hamburger";

const Home = () => {
  const [isOpen, setIsOpen] = useState("");
  const mytoggleHandler = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar mytoggleHandler={mytoggleHandler} />
      <Hamburger isOpen={isOpen} />
    </>
  );
};

export default Home;
