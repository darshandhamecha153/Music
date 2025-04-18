import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Player from "./Components/Player";
import Playlist from "./Components/Playlist";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Player />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/about" element={<h2>About This Music Player</h2>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
