import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Thank you! Your message has been received.");
    };

    return (
        <>
            <Navbar />

            {/* Hero */}
            <section
                style={{
                    background: "linear-gradient(135deg,#0F4C81,#2563EB)",
                    color: "white",
                    textAlign: "center",
                    padding: "80px 20px",
                }}
            >
                <h1
                    style={{
                        color: "white",
                        fontSize: "52px",
                        marginBottom: "15px",
                    }}
                >
                    📞 Contact Us
                </h1>

                <p
                    style={{
                        fontSize: "20px",
                        maxWidth: "700px",
                        margin: "auto",
                        color: "#E2E8F0",
                    }}
                >
                    Have questions about Andhra Pradesh tourism? We'd love to hear from
                    you.
                </p>
            </section>

            {/* Main Content */}
            <div
                style={{
                    background: "#F8FAFC",
                    padding: "60px 20px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
                        gap: "40px",
                    }}
                >
                    {/* Contact Card */}

                    <div
                        style={{
                            background: "#fff",
                            padding: "35px",
                            borderRadius: "20px",
                            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2>📍 Contact Information</h2>

                        <div
                            style={{
                                marginTop: "25px",
                                lineHeight: "2.4",
                                fontSize: "18px",
                            }}
                        >
                            <p>
                                <strong>👤 Name:</strong> Katta Kumar Babu
                            </p>

                            <p>
                                <strong>📞 Phone:</strong>{" "}
                                <a
                                    href="tel:+919392766518"
                                    style={{
                                        color: "#2563EB",
                                        textDecoration: "none",
                                    }}
                                >
                                    +91 9392766518
                                </a>
                            </p>

                            <p>
                                <strong>📧 Email:</strong>{" "}
                                <a
                                    href="mailto:kattakumarbabu5@gmail.com"
                                    style={{
                                        color: "#2563EB",
                                        textDecoration: "none",
                                    }}
                                >
                                    kattakumarbabu5@gmail.com
                                </a>
                            </p>

                            <p>
                                <strong>📍 Location:</strong> Andhra Pradesh, India
                            </p>

                            <p>
                                <strong>🕒 Available:</strong> Monday - Saturday
                            </p>
                        </div>

                        <hr
                            style={{
                                margin: "30px 0",
                            }}
                        />

                        <h3>🌐 Connect With Me</h3>

                        <div
                            style={{
                                marginTop: "20px",
                                lineHeight: "2",
                            }}
                        >
                            <p>
                                💻 GitHub:
                                <br />
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Add Your GitHub Profile
                                </a>
                            </p>

                            <p>
                                🔗 LinkedIn:
                                <br />
                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Add Your LinkedIn Profile
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}

                    <div
                        style={{
                            background: "#fff",
                            padding: "35px",
                            borderRadius: "20px",
                            boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2>✉️ Send Message</h2>

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Your Name"
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
                                    resize: "none",
                                }}
                            ></textarea>

                            <button
                                type="submit"
                                style={{
                                    width: "100%",
                                    marginTop: "20px",
                                    padding: "16px",
                                    border: "none",
                                    borderRadius: "10px",
                                    background: "#2563EB",
                                    color: "white",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                    fontWeight: "600",
                                }}
                            >
                                Send Message 🚀
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Map */}

                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "70px auto 0",
                    }}
                >
                    <h2
                        style={{
                            textAlign: "center",
                            marginBottom: "25px",
                        }}
                    >
                        🗺️ Our Location
                    </h2>

                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps?q=Andhra%20Pradesh&output=embed"
                        width="100%"
                        height="450"
                        style={{
                            border: "none",
                            borderRadius: "20px",
                        }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <Footer />
        </>
    );
}

const inputStyle = {
    width: "100%",
    padding: "15px",
    marginTop: "18px",
    border: "1px solid #CBD5E1",
    borderRadius: "10px",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
};

export default Contact;