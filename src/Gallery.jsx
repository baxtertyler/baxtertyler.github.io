import React from "react";
import Box from "@mui/material/Box";

import albert from "./assets/gallery-jpg/albert.jpg";
import bishops1 from "./assets/gallery-jpg/bishops1.jpg";
import bishops2 from "./assets/gallery-jpg/bishops2.jpg";
import chalkmountain from "./assets/gallery-jpg/chalkmountain.jpg";
import dog from "./assets/gallery-jpg/dog.jpg";
import dublinranch from "./assets/gallery-jpg/dublinranch.jpg";
import fhs from "./assets/gallery-jpg/fhs.jpg";
import halfdome from "./assets/gallery-jpg/halfdome.jpg";
import halloween from "./assets/gallery-jpg/halloween.jpg";
import japanesegarden from "./assets/gallery-jpg/japanesegarden.jpg";
import kenya1 from "./assets/gallery-jpg/kenya1.jpg";
import kenya2 from "./assets/gallery-jpg/kenya2.jpg";
import kenya3 from "./assets/gallery-jpg/kenya3.jpg";
import madonna from "./assets/gallery-jpg/madonna.jpg";
import magic from "./assets/gallery-jpg/magic.jpg";
import monterey from "./assets/gallery-jpg/monterey.jpg";
import morro from "./assets/gallery-jpg/morro.jpg";
import morrogolf from "./assets/gallery-jpg/morrogolf.jpg";
import p from "./assets/gallery-jpg/p.jpg";
import pcv from "./assets/gallery-jpg/pcv.jpg";
import pismo1 from "./assets/gallery-jpg/pismo1.jpg";
import pismo2 from "./assets/gallery-jpg/pismo2.jpg";
import sb from "./assets/gallery-jpg/sb.jpg";
import sd from "./assets/gallery-jpg/sd.jpg";
import soccer from "./assets/gallery-jpg/soccer.jpg";
import surf from "./assets/gallery-jpg/surf.jpg";
import tough from "./assets/gallery-jpg/tough.jpg";
import yosemite from "./assets/gallery-jpg/yosemite.jpg";

const config = [
    {
        src: monterey,
        caption: "Skydive Monterey Bay",
        date: "August, 2021",
    },
    {
        src: tough,
        caption: "Tough Mudder, Sonoma",
        date: "August, 2023",
    },
    {
        src: kenya2,
        caption: "Tsavo East National Park",
        date: "July, 2021",
    },
    {
        src: morro,
        caption: "Morro Bay Beach",
        date: "December, 2023",
    },
    {
        src: halfdome,
        caption: "Half Dome",
        date: "June, 2022",
    },
    {
        src: soccer,
        caption: "Intramural Soccer Champions",
        date: "May, 2022",
    },
    {
        src: surf,
        caption: "Pismo Beach Surf",
        date: "March, 2022",
    },
    {
        src: yosemite,
        caption: "Vernal Falls, Yosemite",
        date: "June, 2022",
    },
    {
        src: sb,
        caption: "The Club at Montecito, Santa Barbara",
        date: "November, 2023",
    },
    {
        src: dublinranch,
        caption: "Dublin Ranch Golf Course",
        date: "August, 2024",
    },
    {
        src: p,
        caption: "The P at Cal Poly",
        date: "January, 2022",
    },
    {
        src: kenya1,
        caption: "Meru National Park",
        date: "July, 2021",
    },
    {
        src: kenya3,
        caption: "Kenya",
        date: "July, 2021",
    },
    {
        src: magic,
        caption: "Six Flags Magic Mountain",
        date: "February, 2022",
    },
    {
        src: bishops1,
        caption: "Bishops Peak",
        date: "January, 2022",
    },
    {
        src: sd,
        caption: "UCSD Graduation",
        date: "June, 2023",
    },
    {
        src: madonna,
        caption: "Madonna Peak",
        date: "March, 2024",
    },
    {
        src: chalkmountain,
        caption: "Chalk Mountain Golf Course",
        date: "December, 2023",
    },
    {
        src: halloween,
        caption: "Halloween, San Luis Obispo",
        date: "October, 2023",
    },
    {
        src: bishops2,
        caption: "Bishops Peak",
        date: "March, 2024",
    },
    {
        src: albert,
        caption: "Albert Sunset",
        date: "October, 2024",
    },
    {
        src: pismo2,
        caption: "Pismo Beach",
        date: "April, 2024",
    },
    {
        src: morrogolf,
        caption: "Morro Bay Golf Course",
        date: "November, 2023",
    },
    {
        src: fhs,
        caption: "FHS Varsity Swim Grad Night",
        date: "May, 2021",
    },
    {
        src: pcv,
        caption: "Poly Canyon Village",
        date: "March, 2023",
    },
    {
        src: pismo1,
        caption: "Pismo Beach Campsite",
        date: "March, 2023",
    },
    {
        src: dog,
        caption: "Sadie, Pleasanton",
        date: "December, 2022",
    },
    {
        src: japanesegarden,
        caption: "Japanese Tea Garden, SF",
        date: "September, 2021",
    },
];

const Gallery = () => {
    return (
        <section id="home">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 1,
                    marginTop: 8,
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginBottom: 1,
                        marginTop: 10,
                    }}
                >
                    <p
                        style={{
                            margin: 5,
                            fontSize: 70,
                            fontWeight: "bold",
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        PHOTO GALLERY
                    </p>
                    <p style={{ margin: 5, marginBottom: 50, color: "white" }}>
                        What I've been up to lately
                    </p>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly", // Ensures even spacing
                        width: "80%",
                        gap: 2, // Adjusts based on available space
                    }}
                >
                    {config.map((item) => {
                        return (
                            <Box
                                sx={{
                                    flex: "1 1 auto", // Allows flexible resizing
                                    maxWidth: "350px", // Prevents items from getting too large
                                    minWidth: "350px", // Ensures responsiveness
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "white",
                                    fontSize: 20,
                                }}
                            >
                                <div
                                    style={{
                                        height: 300,
                                        width: "100%", // Adjust width dynamically
                                        border: "2px solid white",
                                        borderRadius: 10,
                                        backgroundImage: `url(${item.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></div>
                                <p style={{ margin: 0, marginTop: 20 }}>
                                    <b>{item.caption}</b>
                                </p>
                                <p style={{ margin: 0, marginBottom: 50 }}>
                                    <i>{item.date}</i>
                                </p>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </section>
    );
};

export default Gallery;
