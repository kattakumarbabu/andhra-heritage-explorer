function Footer() {
    return (
        <footer
            style={{
                background: "#0F172A",
                color: "white",
                padding: "50px 8%",
                marginTop: "60px",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                    gap: "40px",
                }}
            >
                <div>
                    <h2 style={{ color: "white" }}>🌍 Andhra Heritage Explorer</h2>

                    <p
                        style={{
                            color: "#CBD5E1",
                            marginTop: "15px",
                            lineHeight: "1.8",
                        }}
                    >
                        Discover the beauty, heritage and culture of Andhra Pradesh with our
                        interactive tourism platform.
                    </p>
                </div>

                <div>
                    <h3 style={{ color: "white" }}>Quick Links</h3>

                    <p style={{ marginTop: "15px" }}>🏠 Home</p>
                    <p>🗺️ Explore</p>
                    <p>❤️ Favorites</p>
                    <p>ℹ️ About</p>
                    <p>📞 Contact</p>
                </div>

                <div>
                    <h3 style={{ color: "white" }}>Popular Places</h3>

                    <p style={{ marginTop: "15px" }}>🛕 Kanaka Durga Temple</p>
                    <p>🏖️ RK Beach</p>
                    <p>🏞️ Araku Valley</p>
                    <p>🕳️ Belum Caves</p>
                </div>

                <div>
                    <h3 style={{ color: "white" }}>Contact</h3>

                    <p style={{ marginTop: "15px" }}>📞 +91 9392766518</p>

                    <p>📧 kattakumarbabu5@gmail.com</p>

                    <p>📍 Andhra Pradesh, India</p>
                </div>
            </div>

            <hr
                style={{
                    margin: "40px 0",
                    border: "1px solid #334155",
                }}
            />

            <p
                style={{
                    textAlign: "center",
                    color: "#94A3B8",
                }}
            >
                © 2026 Andhra Heritage Explorer | Built with React & MERN Stack
            </p>
        </footer>
    );
}

export default Footer;