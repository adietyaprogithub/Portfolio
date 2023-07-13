import MainNavbar from "./components/NavbarPage/MainNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./components/Work/Work";
import Main from "./components/Main/Main";
import Skills from "./components/Tools & Skills/ToolsLibraries";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mainnavbar" element={<MainNavbar />} />
        <Route path="/Skill" element={<Skills />} />
        <Route path="/Word" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
