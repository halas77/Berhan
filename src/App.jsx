import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./commons/Navbar";
import Footer from "./commons/Footer";
import { Home, About, Contact } from "./components";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
