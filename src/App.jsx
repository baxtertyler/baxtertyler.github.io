import React from "react";
import Nav from "./components/nav/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Box from "@mui/material/Box";

const App = () => {
    return (
        <Box sx={{ overflowX: "hidden" }}>
            <Nav />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contacts />
        </Box>
    );
};

export default App;
