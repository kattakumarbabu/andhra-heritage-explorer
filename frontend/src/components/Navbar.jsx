import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 60px",
                background: "#0F172A",
                color: "white",
                boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
            }}
        >
            <h2 style={{ margin: 0 }}>🌍 Andhra Heritage Explorer</h2>

            <div style={{ display: "flex", gap: "30px" }}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/explore" style={linkStyle}>Explore</Link>
                <Link to="/favorites" style={linkStyle}>Favorites</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
            </div>
        </nav>
    );
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
};

export default Navbar;