import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import LoginForm from "./pages/login/LoginForm";
import Contact from "./pages/contact/Contact";
import Faq from "./pages/faq/Faq";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home />}  />
          <Route path="/login" element={<LoginForm />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/faq" element={<Faq />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
