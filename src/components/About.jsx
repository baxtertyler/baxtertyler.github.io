import Box from "@mui/material/Box";
import tm from "../assets/tm.jpg";
import hd from "../assets/hd.jpg";

const About = () => {
    return (
        <section id="about">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 5,
                    paddingBottom: 10,
                    backgroundColor: "rgb(37, 72, 55)",
                }}
            >
                <p
                    style={{
                        fontSize: 40,
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    ABOUT ME
                </p>
                <Box
                    sx={{
                        width: { xs: "90%", sm: "80%", md: "70%" },
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            sm: "column",
                            md: "row",
                        },
                    }}
                >
                    <Box
                        sx={{
                            flex: 2,
                            display: "flex",
                            flexDirection: {
                                xs: "row",
                                sm: "row",
                                md: "column",
                            },
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <div
                            style={{
                                height: 200,
                                width: 250,
                                border: "2px solid white",
                                borderRadius: 10,
                                backgroundImage: `url(${hd})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                        <div
                            style={{
                                height: 200,
                                width: 250,
                                border: "2px solid white",
                                borderRadius: 10,
                                backgroundImage: `url(${tm})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    </Box>
                    <div
                        style={{
                            flex: 3,
                            color: "white",
                            padding: 10,
                            fontSize: 18,
                        }}
                    >
                        <p>
                            I am a Computer Science major at the California
                            Polytechnic State University, San Luis Obispo,
                            graduating cum laude in Spring 2025. My passion lies
                            in building technology that drives meaningful
                            change—I’m eager to contribute to impactful projects
                            that have the power to improve lives of many.
                        </p>
                        <p>
                            I specialize in full stack web development, where I
                            enjoy architecting scalable systems, optimizing
                            performance, and working with databases. That said,
                            I appreciate the full development lifecycle—from
                            brainstorming and designing solutions to deployment,
                            testing, and continuous improvement. I love seeing a
                            project come to life from the ground up and ensuring
                            every piece works seamlessly.
                        </p>
                        <p>
                            Beyond coding, I value collaboration and strong
                            interpersonal relationships. Whether it's working on
                            a team, mentoring others, or simply exchanging
                            ideas, I thrive in environments that encourage
                            teamwork and innovation.
                        </p>
                        <p>
                            When I'm not working on tech projects, you'll find
                            me out on the golf course, riding waves, or
                            exploring the mountains. I am always up for a new
                            challenge-let's build something great together!
                        </p>
                    </div>
                </Box>
            </Box>
        </section>
    );
};

export default About;
