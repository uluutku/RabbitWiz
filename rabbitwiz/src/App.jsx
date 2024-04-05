import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
