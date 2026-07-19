import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Thank you! Your message has been received.");

        e.target.reset();
    };

    return (
        <div className="page-shell">
            <Navbar />

            {/* Hero */}
            <section
                style={{
                    padding: "2.5rem 5% 3rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <div className="section-label">
                        Let's Connect
                    </div>

                    <h1 className="section-title">
                        Contact the Explorer Behind the Experience
                    </h1>

                    <p
                        className="section-copy"
                        style={{
                            margin: "1rem auto 0",
                        }}
                    >
                        Have a question, travel suggestion, collaboration
                        request or feedback? Feel free to reach out anytime.
                    </p>
                </div>
            </section>

            {/* Contact Section */}

            <section
                style={{
                    padding: "0 5% 4rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit,minmax(380px,1fr))",
                        gap: "35px",
                    }}
                >
                    {/* Contact Info */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="glass-card"
                        style={{
                            padding: "35px",
                            borderRadius: "25px",
                        }}
                    >
                        <h2
                            style={{
                                marginBottom: "25px",
                            }}
                        >
                            Contact Information
                        </h2>

                        {[
                            {
                                icon: <Phone size={18} />,
                                title: "Phone",
                                value: "+91 9392766518",
                                link: "tel:+919392766518",
                            },
                            {
                                icon: <Mail size={18} />,
                                title: "Email",
                                value:
                                    "kattakumarbabu5@gmail.com",
                                link:
                                    "mailto:kattakumarbabu5@gmail.com",
                            },
                            {
                                icon: <MapPin size={18} />,
                                title: "Location",
                                value:
                                    "Andhra Pradesh, India",
                            },
                        ].map((item) => (
                            <a
                                key={item.title}
                                href={item.link || "#"}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "15px",
                                    padding: "16px",
                                    marginBottom: "15px",
                                    borderRadius: "15px",
                                    background:
                                        "rgba(15,23,42,.72)",
                                    textDecoration: "none",
                                }}
                            >
                                <div
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        borderRadius: "12px",
                                        background:
                                            "linear-gradient(135deg,#2563EB,#38BDF8)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                    }}
                                >
                                    {item.icon}
                                </div>

                                <div>
                                    <strong>
                                        {item.title}
                                    </strong>

                                    <div
                                        style={{
                                            color: "#cbd5e1",
                                            marginTop: "4px",
                                        }}
                                    >
                                        {item.value}
                                    </div>
                                </div>
                            </a>
                        ))}

                        <div
                            style={{
                                display: "flex",
                                gap: "20px",
                                marginTop: "30px",
                            }}
                        >
                            <a
                                href="https://github.com/YOUR_USERNAME"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub size={32} />
                            </a>

                            <a
                                href="https://linkedin.com/in/YOUR_USERNAME"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin size={32} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="soft-card"
                        style={{
                            padding: "35px",
                            borderRadius: "25px",
                        }}
                    >
                        <h2>Send a Message</h2>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                style={inputStyle}
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                style={inputStyle}
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                required
                                style={inputStyle}
                            />

                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                                required
                                style={{
                                    ...inputStyle,
                                    borderRadius:
                                        "20px",
                                    resize:
                                        "vertical",
                                    minHeight:
                                        "160px",
                                }}
                            />

                            <button
                                type="submit"
                                className="btn-primary"
                                style={{
                                    width: "100%",
                                    marginTop:
                                        "15px",
                                    padding:
                                        "15px",
                                    display:
                                        "flex",
                                    justifyContent:
                                        "center",
                                    alignItems:
                                        "center",
                                    gap: "10px",
                                }}
                            >
                                Send Message

                                <Send
                                    size={18}
                                />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Google Map */}

            <section
                style={{
                    padding: "0 5% 4rem",
                }}
            >
                <div
                    style={{
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom:
                                "25px",
                        }}
                    >
                        Our Location
                    </h2>

                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=Andhra%20Pradesh&output=embed"
                        width="100%"
                        height="450"
                        loading="lazy"
                        style={{
                            border: "none",
                            borderRadius:
                                "25px",
                            boxShadow:
                                "0 15px 35px rgba(0,0,0,.12)",
                        }}
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "15px",
    marginTop: "18px",
    borderRadius: "12px",
    border: "1px solid rgba(148,163,184,0.3)",
    background: "rgba(15,23,42,0.9)",
    color: "#f8fafc",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
};

export default Contact;