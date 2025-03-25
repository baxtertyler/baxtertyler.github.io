import { useState } from "react";
import emailjs from "emailjs-com";
import { Box, TextField } from "@mui/material";

const Contacts = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const templateParams = {
            user_email: email,
            message: message,
        };

        emailjs
            .send(
                "service_2q9yzu8",
                "template_gwdmwwi",
                templateParams,
                "FK9MgGtweVANbGZRd"
            )
            .then((response) => {
                setStatus("Message sent successfully!");
                setMessage("");
                setEmail("");
            })
            .catch((error) => {
                setStatus("Failed to send message.");
            });
    };

    return (
        <section id="contacts">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 5,
                    paddingBottom: 10,
                    marginBottom: 10,
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
                    CONTACT ME
                </p>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        width: "60%",
                        minWidth: "400px",
                    }}
                >
                    <label
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TextField
                            id="outlined-multiline-flexible"
                            placeholder="Email"
                            multiline
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            sx={{
                                width: "100%",
                                backgroundColor: "rgb(255, 255, 255, 0.1)",
                                borderRadius: 1,
                            }}
                            InputProps={{
                                style: {
                                    color: "white", // Change the text color inside the input field
                                },
                            }}
                        />
                    </label>
                    <label>
                        <TextField
                            id="outlined-multiline-flexible"
                            placeholder="Message"
                            multiline
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            sx={{
                                width: "100%",
                                backgroundColor: "rgb(255, 255, 255, 0.1)",
                                borderRadius: 1,
                                fontColor: "white",
                            }}
                            rows={5}
                            InputProps={{
                                style: {
                                    color: "white",
                                },
                            }}
                            labelProps={{
                                style: {
                                    color: "white",
                                },
                            }}
                        />
                    </label>
                    <button
                        type="submit"
                        style={{
                            width: "80px",
                            height: 30,
                            backgroundColor: "rgb(255, 255, 255, 0.1)",
                            border: "none",
                            borderRadius: "3px",
                            color: "white",
                        }}
                    >
                        Send
                    </button>
                    <div>{status}</div>
                </form>
            </Box>
        </section>
    );
};

export default Contacts;
