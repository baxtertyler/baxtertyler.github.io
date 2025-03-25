import { Box } from "@mui/material";
import "./projects.css";
import { BsGithub } from "react-icons/bs";

const Experience = () => {
    return (
        <section id="projects">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 5,
                    paddingBottom: 5,
                    backgroundColor: "rgb(37, 72, 55)",
                }}
            >
                <p
                    style={{
                        fontSize: 40,
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        paddingBottom: 30,
                    }}
                >
                    PROJECTS
                </p>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "column",
                            md: "row",
                        },
                        justifyContent: "center",
                        gap: 5,
                        marginBottom: 10,
                    }}
                >
                    <Box
                        className="project"
                        sx={{
                            fontSize: "100px",
                            width: { xs: "300px", sm: "380px" },
                            height: { xs: 200, sm: "280px" },
                        }}
                    >
                        <Box
                            className="overlay-text"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                fontSize: { xs: "12px", sm: "16px" },
                            }}
                        >
                            <p style={{ margin: 10 }}>
                                Welcome to Let’s Roll! – the ultimate test of
                                your reflexes, balance, and precision! In this
                                exciting Android app, you control a ball using
                                intuitive motion controls, guiding it along a
                                challenging, twisting path. The goal? See how
                                far you can go without falling off the edge or
                                crashing into barriers! With smooth, real-time
                                motion detection, the game responds to your
                                every tilt, turn, and shift, making every move
                                feel like a true test of your skills. Can you
                                master the twists and turns and reach the finish
                                line? Only time will tell – so get ready to
                                roll!
                            </p>
                            <a
                                href="https://github.com/baxtertyler/LetsRoll"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsGithub
                                    style={{ fontSize: 30, color: "white" }}
                                />
                            </a>
                        </Box>
                        <p
                            className="old-text"
                            style={{ margin: 0, fontSize: "80px" }}
                        >
                            LETS ROLL
                        </p>
                    </Box>
                    <Box
                        className="project"
                        sx={{
                            fontSize: "100px",
                            width: { xs: "300px", sm: "380px" },
                            height: { xs: 200, sm: "280px" },
                        }}
                    >
                        <Box
                            className="overlay-text"
                            sx={{ fontSize: { xs: "12px", sm: "16px" } }}
                        >
                            <p style={{ margin: 10 }}>
                                Introducing Fuse – your personal user space file
                                system vault! This sleek OS project lets you
                                easily encrypt any new files you create, keeping
                                them safe from prying eyes. But don’t worry,
                                accessing your files is a breeze: Fuse auto
                                decrypts them when you try to read, ensuring
                                seamless access. Old files? They stay untouched,
                                just the way you left them. With Fuse, your
                                files stay secure without the hassle. Perfect
                                for anyone who wants to safeguard their data
                                with ease!
                            </p>
                            <a
                                href="https://github.com/baxtertyler/FUSE-Encrypter"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsGithub
                                    style={{ fontSize: 30, color: "white" }}
                                />
                            </a>
                        </Box>
                        <p className="old-text" style={{ margin: 0 }}>
                            FUSE
                        </p>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "column",
                            md: "row",
                        },
                        justifyContent: "center",
                        gap: 5,
                        marginBottom: 10,
                    }}
                >
                    <Box
                        className="project"
                        sx={{
                            fontSize: { xs: "50px", sm: "60px" },
                            width: { xs: "300px", sm: "380px" },
                            height: { xs: 200, sm: "280px" },
                        }}
                    >
                        <Box
                            className="overlay-text"
                            sx={{ fontSize: { xs: "12px", sm: "16px" } }}
                        >
                            <p style={{ margin: 10 }}>
                                Introducing the PGA Golf Predictor – your
                                ultimate tool for predicting the winner of the
                                PGA Masters Tournament! Using cutting-edge
                                machine learning, this app analyzes user and
                                course data to predict the score of every golfer
                                in the tournament. Powered by a regression
                                model, it crunches the numbers to forecast the
                                performance of each player with impressive
                                accuracy. Whether you're a golf fan or just love
                                a good challenge, the PGA Predictor puts you in
                                the driver’s seat of the tournament's outcome!
                            </p>
                            <a
                                href="https://github.com/baxtertyler/Golf-Predictor"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsGithub
                                    style={{ fontSize: 30, color: "white" }}
                                />
                            </a>
                        </Box>
                        <p className="old-text" style={{ margin: 0 }}>
                            GOLF
                        </p>
                        <p className="old-text" style={{ margin: 0 }}>
                            PREDICTOR
                        </p>
                    </Box>
                    <Box
                        className="project"
                        sx={{
                            fontSize: { xs: "50px", sm: "70px" },
                            width: { xs: "300px", sm: "380px" },
                            height: { xs: 200, sm: "280px" },
                        }}
                    >
                        <Box
                            className="overlay-text"
                            sx={{ fontSize: { xs: "12px", sm: "16px" } }}
                        >
                            <p style={{ margin: 10 }}>
                                Introducing Spotify Platinum – your all-in-one
                                Spotify companion! This powerful wrapper lets
                                you take control of your music experience like
                                never before. Play, pause, skip – you’re in
                                charge of playback, and you can visualize your
                                music journey in real-time. Create and modify
                                playlists with ease, and get personalized,
                                top-tier recommendations tailored to your unique
                                taste. With Spotify Platinum, you’ll elevate
                                your music game to the next level!
                            </p>
                            <a
                                href="https://github.com/baxtertyler/Spotify-Platinum"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsGithub
                                    style={{ fontSize: 30, color: "white" }}
                                />
                            </a>
                        </Box>
                        <p className="old-text" style={{ margin: 0 }}>
                            SPOTIFY PLATINUM
                        </p>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

export default Experience;
