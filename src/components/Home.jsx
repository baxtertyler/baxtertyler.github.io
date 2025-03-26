import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import CV from "../assets/tylerbaxter-resume-2025-1.pdf";
import pfp from "../assets/pfp.jpg";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section id="home">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 10,
                }}
            >
                <p style={{ marginTop: 100, marginBottom: 5, color: "white" }}>
                    Welcome! My name is
                </p>
                <p
                    style={{
                        margin: 5,
                        fontSize: 70,
                        fontWeight: "bold",
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    TYLER BAXTER
                </p>
                <p style={{ margin: 5, marginBottom: 50, color: "white" }}>
                    Computer Science Student @ Cal Poly SLO
                </p>
                <div style={{ display: "flex", marginBottom: 50, gap: 15 }}>
                    <a
                        href="https://www.linkedin.com/in/tylerbaxter/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsLinkedin style={{ fontSize: 30, color: "white" }} />
                    </a>
                    <a
                        href="https://github.com/baxtertyler"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub style={{ fontSize: 30, color: "white" }} />
                    </a>
                    <a href={CV} download className="btn">
                        <BsFileEarmarkMedical
                            style={{ fontSize: 30, color: "white" }}
                        />
                    </a>
                    <Link to="/gallery" className="btn">
                        <FaPhotoVideo
                            style={{ fontSize: 30, color: "white" }}
                        />
                    </Link>
                </div>
                <Box
                    sx={{
                        height: { xs: 300, sm: 400, md: 400 },
                        width: { xs: 300, sm: 400, md: 400 },
                        border: "5px solid white",
                        borderRadius: 1000,
                        backgroundImage: `url(${pfp})`,
                        backgroundSize: "cover", // Ensures the image fills the div
                        backgroundPosition: "center", // Centers the image
                        backgroundRepeat: "no-repeat",
                    }}
                ></Box>
            </Box>
        </section>
    );
};

export default Home;
