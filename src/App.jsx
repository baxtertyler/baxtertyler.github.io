import React from "react";
import Nav from "./components/nav/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Box from "@mui/material/Box";
import HomePage from "./HomePage";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    );
};

export default App;
