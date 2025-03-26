import gs from "../assets/gs.jpg";
import ongawa from "../assets/ongawa.jpg";
import cp from "../assets/cp.png";
import Box from "@mui/material/Box";

const config = [
    {
        image: gs,
        company: "GreenSight Tech",
        title: "Fullstack Software Developer",
        type: "Summer Internship",
        timeline: "May 2024 – September 2024",
        role: [
            "Vite, TypeScript, React, React Native, Material UI, AWS, Git",
            "Contributed to the development of the device quote pricing tool",
            "Engineered core TypeScript components allowing users to store, create, organize, and price electronic devices",
            "Emphasized accessability by implementing Material UI components and ensuring WCAG compliance",
            "Maximized pricing eﬀiciency by parallelizing API logic, providing 10x more item pricing data to clients, resulting in significantly improved pricing recommendations",
            "Generated tests to ensure correct front-end component rendering and backend API logic",
        ],
    },
    {
        image: ongawa,
        company: "Ongawa",
        title: "Backend Engineer",
        type: "Senior Project",
        timeline: "September 2024 - March 2025",
        role: [
            "Vite, TypeScript, React, AWS Amplify, Cognito, DynamoDB",
            "Assisted with building the backend for Ongawa’s web application as a part of my senior project",
            "Streamlined user authentication by converting from Firebase to AWS Cognito, emphasizing scalability and security",
            "Debugged and optimized Amplify configurations to ensure seamless deployment and integration with DynamoDB",
            "Designed, implemented, and tested a Reddit-like community page for users to interact with artists. Users are able to create and delete posts, reply to posts, and create nested subreplies.",
            "Agile environment with weekly standups and biweekly sprint reviews to communicate progress and challenges",
        ],
    },
    {
        image: cp,
        company: "Californa Polytechnic State University",
        title: "Student Assistant",
        type: "Teaching apprenticeship",
        timeline: "January 2024 - March 2025",
        role: [
            "Project-Based Object-Oriented Programming (Java), Introduction to Computing (Python)",
            "Mentor to over 200 students, guiding complex solutions to both computer-science and a variety of non-technical majors",
            "Coordinated lab periods, answered technical questions, led debugging sessions, and graded student projects to ensure understanding of course material",
            "Held resume workshops and course planning sessions to enhance students’ academic and career success",
            "Conducted optional 1 on 1 meetings for students needing additional support",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience">
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 100,
                    paddingTop: 50,
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
                    EXPERIENCE
                </p>
                <Box
                    sx={{
                        minWidth: { xs: "90%", sm: "90%", md: "60%" },
                        maxWidth: { xs: "90%", sm: "90%", md: "60%" },
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                    }}
                >
                    {config.map((item) => (
                        <Box
                            sx={{
                                color: "white",
                                textAlign: {
                                    xs: "center",
                                    sm: "center",
                                    md: "left",
                                },
                            }}
                        >
                            <h1 style={{ fontSize: 40, margin: 0 }}>
                                {item.company}
                            </h1>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexDirection: {
                                        xs: "column",
                                        sm: "column",
                                        md: "row",
                                    },
                                    paddingTop: 2,
                                    textAlign: {
                                        xs: "center",
                                        sm: "center",
                                        md: "left",
                                    },
                                }}
                            >
                                <h3 style={{ margin: 0 }}>{item.title}</h3>
                                <h3 style={{ margin: 0 }}>{item.type}</h3>
                                <h3 style={{ margin: 0 }}> {item.timeline}</h3>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "left",
                                    paddingTop: 2,
                                    flexDirection: {
                                        xs: "column",
                                        sm: "column",
                                        md: "row",
                                    },
                                }}
                            >
                                <div
                                    style={{
                                        height: 150,
                                        minWidth: 150,
                                        border: "2px solid white",
                                        borderRadius: 10,
                                        backgroundImage: `url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                ></div>
                                <Box
                                    sx={{
                                        textAlign: {
                                            xs: "left",
                                            sm: "left",
                                            md: "left",
                                        },
                                    }}
                                >
                                    <ul>
                                        {item.role.map((role) => (
                                            <li>{role}</li>
                                        ))}
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </div>
        </section>
    );
};

export default Experience;
