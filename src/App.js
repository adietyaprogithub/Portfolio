import MainNavbar from "./components/NavbarPage/MainNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
