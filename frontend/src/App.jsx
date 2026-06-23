import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";

import CursorGlow from "./components/CursorGlow/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <CursorGlow />
      <ScrollProgress />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}