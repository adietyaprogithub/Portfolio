import React from "react";
import Skills from "../Tools & Skills/ToolsLibraries";
import Contact from "../Contact/Contact";
import Navbar from "../NavbarPage/Navbar";
import MainNavbar from "../NavbarPage/MainNavbar";
import Work from "../Work/Work";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <Navbar />
      <MainNavbar />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}
