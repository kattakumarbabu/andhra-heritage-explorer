import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer style={{ background: "linear-gradient(135deg, #07111f 0%, #0f172a 100%)", color: "white", padding: "4.5rem 5% 2.2rem", marginTop: "4rem" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
                <div>
                    <h2 style={{ color: "white", fontSize: "1.35rem" }}>🏝️ Andhra Heritage Explorer</h2>
                    <p style={{ color: "#cbd5e1", marginTop: "0.9rem", lineHeight: 1.8 }}>
                        Premium travel inspiration for discovering Andhra Pradesh's timeless temples, coastlines, valleys and cultural landmarks.
                    </p>
                </div>

                <div>
                    <h3 style={{ color: "white", marginBottom: "0.8rem" }}>Quick Links</h3>
                    <div style={{ display: "grid", gap: "0.45rem", color: "#cbd5e1" }}>
                        <Link to="/">Home</Link>
                        <Link to="/explore">Explore</Link>
                        <Link to="/favorites">Favorites</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: "white", marginBottom: "0.8rem" }}>Popular Places</h3>
                    <div style={{ display: "grid", gap: "0.45rem", color: "#cbd5e1" }}>
                        <span>🛕 Kanaka Durga Temple</span>
                        <span>🏖️ RK Beach</span>
                        <span>🌄 Araku Valley</span>
                        <span>🕳️ Belum Caves</span>
                    </div>
                </div>

                <div>
                    <h3 style={{ color: "white", marginBottom: "0.8rem" }}>Contact</h3>
                    <div style={{ display: "grid", gap: "0.45rem", color: "#cbd5e1" }}>
                        <span>📞 +91 9392766518</span>
                        <span>📧 kattakumarbabu5@gmail.com</span>
                        <span>📍 Andhra Pradesh, India</span>
                    </div>
                </div>
            </div>

            <hr style={{ margin: "2rem 0 1.2rem", border: "1px solid rgba(255,255,255,0.12)" }} />
            <p style={{ textAlign: "center", color: "#94a3b8" }}>© 2026 Andhra Heritage Explorer • Crafted for modern tourism experiences</p>
        </footer>
    );
}

export default Footer;