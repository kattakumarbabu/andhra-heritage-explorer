import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            {/* Hero Section */}

            <section
                style={{
                    height: "75vh",
                    background:
                        "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: "white",
                    textAlign: "center",
                    padding: "20px",
                }}
            >
                <h1
                    style={{
                        fontSize: "60px",
                        marginBottom: "20px",
                        color: "white",
                    }}
                >
                    About Andhra Heritage Explorer
                </h1>

                <p
                    style={{
                        maxWidth: "850px",
                        fontSize: "22px",
                        lineHeight: "1.8",
                        color: "#E2E8F0",
                    }}
                >
                    Explore the cultural heritage, breathtaking landscapes,
                    historical monuments, temples, beaches and natural wonders
                    across Andhra Pradesh through one modern tourism platform.
                </p>

                <button
                    onClick={() => navigate("/explore")}
                    style={{
                        marginTop: "35px",
                        padding: "16px 36px",
                        background: "#2563EB",
                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "18px",
                        cursor: "pointer",
                        fontWeight: "600",
                    }}
                >
                    Explore Places →
                </button>
            </section>

            {/* Who We Are */}

            <section
                style={{
                    maxWidth: "1200px",
                    margin: "90px auto",
                    padding: "0 30px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
                    gap: "50px",
                    alignItems: "center",
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=900"
                    alt=""
                    style={{
                        width: "100%",
                        borderRadius: "20px",
                        boxShadow: "0 15px 40px rgba(0,0,0,.15)",
                    }}
                />

                <div>
                    <h2
                        style={{
                            fontSize: "42px",
                            color: "#0F172A",
                        }}
                    >
                        Who We Are
                    </h2>

                    <p
                        style={{
                            marginTop: "25px",
                            color: "#475569",
                            lineHeight: "2",
                            fontSize: "18px",
                        }}
                    >
                        Andhra Heritage Explorer is a tourism platform developed to
                        showcase the rich history, heritage, culture and natural
                        beauty of Andhra Pradesh.

                        Our goal is to provide visitors with detailed information
                        about famous tourist attractions, historical monuments,
                        temples, beaches, caves, waterfalls, wildlife sanctuaries
                        and hill stations in one place.

                        The platform combines beautiful visuals, historical
                        information, Google Maps navigation and smart search to help
                        tourists easily discover destinations.
                    </p>
                </div>
            </section>
            {/* Mission & Vision */}

            <section
                style={{
                    background: "#F8FAFC",
                    padding: "90px 30px",
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
                    <div
                        style={{
                            background: "#fff",
                            padding: "40px",
                            borderRadius: "20px",
                            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2
                            style={{
                                color: "#2563EB",
                                marginBottom: "20px",
                            }}
                        >
                            🎯 Our Mission
                        </h2>

                        <p
                            style={{
                                lineHeight: "2",
                                color: "#475569",
                                fontSize: "17px",
                            }}
                        >
                            Our mission is to make tourism in Andhra Pradesh more
                            accessible by providing reliable information, beautiful
                            destination galleries, historical insights and Google Maps
                            navigation. We aim to help every traveler explore the state's
                            heritage with confidence.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "#fff",
                            padding: "40px",
                            borderRadius: "20px",
                            boxShadow: "0 12px 30px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2
                            style={{
                                color: "#2563EB",
                                marginBottom: "20px",
                            }}
                        >
                            👁 Our Vision
                        </h2>

                        <p
                            style={{
                                lineHeight: "2",
                                color: "#475569",
                                fontSize: "17px",
                            }}
                        >
                            We envision Andhra Heritage Explorer becoming a trusted digital
                            tourism companion where visitors can discover destinations,
                            plan journeys and experience the culture, history and natural
                            beauty of Andhra Pradesh through one modern platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}

            <section
                style={{
                    maxWidth: "1300px",
                    margin: "90px auto",
                    padding: "0 30px",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "42px",
                        marginBottom: "20px",
                    }}
                >
                    Why Choose Andhra Heritage Explorer?
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#64748B",
                        marginBottom: "60px",
                        fontSize: "18px",
                    }}
                >
                    Everything you need for exploring Andhra Pradesh in one place.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                        gap: "30px",
                    }}
                >
                    {[
                        {
                            icon: "🗺️",
                            title: "Google Maps",
                            text: "Navigate directly to every tourist destination with one click.",
                        },
                        {
                            icon: "🏛️",
                            title: "Historical Information",
                            text: "Learn the rich history and cultural significance of each place.",
                        },
                        {
                            icon: "🔍",
                            title: "Smart Search",
                            text: "Find places quickly by district, category or destination name.",
                        },
                        {
                            icon: "❤️",
                            title: "Favorites",
                            text: "Save your favourite tourist destinations for future trips.",
                        },
                        {
                            icon: "📸",
                            title: "Beautiful Photos",
                            text: "Explore destinations with attractive high-quality images.",
                        },
                        {
                            icon: "📱",
                            title: "Responsive Design",
                            text: "Works smoothly on desktops, tablets and mobile devices.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "#fff",
                                padding: "35px",
                                borderRadius: "20px",
                                textAlign: "center",
                                boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                                transition: "0.3s",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "55px",
                                    marginBottom: "20px",
                                }}
                            >
                                {item.icon}
                            </div>

                            <h3
                                style={{
                                    marginBottom: "15px",
                                    color: "#0F172A",
                                }}
                            >
                                {item.title}
                            </h3>

                            <p
                                style={{
                                    color: "#64748B",
                                    lineHeight: "1.8",
                                }}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Tourism Statistics */}

            <section
                style={{
                    background: "#0F172A",
                    color: "white",
                    padding: "90px 20px",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: "42px",
                        marginBottom: "60px",
                    }}
                >
                    Andhra Pradesh Tourism at a Glance
                </h2>

                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                        gap: "35px",
                        textAlign: "center",
                    }}
                >
                    {[
                        { number: "20+", label: "Tourist Places" },
                        { number: "26", label: "Districts Covered" },
                        { number: "10+", label: "Categories" },
                        { number: "100%", label: "Free Access" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "#1E293B",
                                padding: "35px",
                                borderRadius: "18px",
                            }}
                        >
                            <h1
                                style={{
                                    color: "#60A5FA",
                                    fontSize: "52px",
                                    marginBottom: "10px",
                                }}
                            >
                                {item.number}
                            </h1>

                            <p
                                style={{
                                    color: "#CBD5E1",
                                    fontSize: "18px",
                                }}
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technologies */}

            <section
                style={{
                    padding: "90px 20px",
                    background: "#F8FAFC",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "42px",
                        marginBottom: "20px",
                    }}
                >
                    Technologies Used
                </h2>

                <p
                    style={{
                        color: "#64748B",
                        marginBottom: "50px",
                        fontSize: "18px",
                    }}
                >
                    Built using modern web technologies.
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "20px",
                        maxWidth: "900px",
                        margin: "auto",
                    }}
                >
                    {[
                        "React",
                        "React Router",
                        "JavaScript",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Google Maps",
                        "CSS3",
                    ].map((tech, index) => (
                        <div
                            key={index}
                            style={{
                                background: "#2563EB",
                                color: "white",
                                padding: "15px 28px",
                                borderRadius: "30px",
                                fontWeight: "600",
                                fontSize: "17px",
                            }}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </section>

            {/* Destination Gallery */}

            <section
                style={{
                    maxWidth: "1300px",
                    margin: "90px auto",
                    padding: "0 30px",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "42px",
                        marginBottom: "20px",
                    }}
                >
                    Featured Destinations
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#64748B",
                        marginBottom: "50px",
                    }}
                >
                    Some of Andhra Pradesh's most loved tourist destinations.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                        gap: "30px",
                    }}
                >
                    {[
                        {
                            name: "Araku Valley",
                            image:
                                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900",
                        },
                        {
                            name: "RK Beach",
                            image:
                                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",
                        },
                        {
                            name: "Kanaka Durga Temple",
                            image:
                                "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900",
                        },
                    ].map((place, index) => (
                        <div
                            key={index}
                            style={{
                                background: "#fff",
                                borderRadius: "20px",
                                overflow: "hidden",
                                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                            }}
                        >
                            <img
                                src={place.image}
                                alt={place.name}
                                style={{
                                    width: "100%",
                                    height: "230px",
                                    objectFit: "cover",
                                }}
                            />

                            <h3
                                style={{
                                    padding: "20px",
                                    textAlign: "center",
                                }}
                            >
                                {place.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* Developer */}

            <section
                style={{
                    background: "#2563EB",
                    color: "white",
                    padding: "80px 20px",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        color: "white",
                        fontSize: "40px",
                        marginBottom: "20px",
                    }}
                >
                    Developed By
                </h2>

                <h3
                    style={{
                        fontSize: "32px",
                        marginBottom: "15px",
                    }}
                >
                    Katta Kumar Babu
                </h3>

                <p
                    style={{
                        maxWidth: "800px",
                        margin: "auto",
                        color: "#DBEAFE",
                        lineHeight: "1.9",
                        fontSize: "18px",
                    }}
                >
                    B.Tech Artificial Intelligence & Data Science student passionate
                    about building modern web applications and promoting Andhra
                    Pradesh tourism through technology.
                </p>
            </section>
            {/* Call To Action */}

            <section
                style={{
                    padding: "90px 20px",
                    background: "#F8FAFC",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "44px",
                        marginBottom: "20px",
                        color: "#0F172A",
                    }}
                >
                    Ready to Explore Andhra Pradesh?
                </h2>

                <p
                    style={{
                        maxWidth: "750px",
                        margin: "auto",
                        color: "#64748B",
                        fontSize: "18px",
                        lineHeight: "1.8",
                    }}
                >
                    Start your journey today and discover breathtaking temples,
                    beaches, caves, waterfalls, forts and historical monuments
                    across Andhra Pradesh.
                </p>

                <button
                    onClick={() => navigate("/explore")}
                    style={{
                        marginTop: "35px",
                        padding: "16px 40px",
                        background: "#2563EB",
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "18px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#1D4ED8";
                        e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#2563EB";
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    Explore Tourist Places →
                </button>
            </section>

            {/* Footer */}

            <Footer />
        </>
    );
}

export default About;