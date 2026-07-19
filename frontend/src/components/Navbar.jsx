import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { to: "/", label: "Home" },
        { to: "/explore", label: "Explore" },
        { to: "/favorites", label: "Favorites" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
        { to: "/login", label: "Login" },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1200,
                padding: "0 5%",
                background: scrolled ? "rgba(2, 6, 23, 0.82)" : "rgba(2, 6, 23, 0.64)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: scrolled ? "1px solid rgba(148,163,184,0.16)" : "1px solid transparent",
                boxShadow: scrolled ? "0 10px 35px rgba(2,6,23,0.28)" : "none",
            }}
        >
            <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "78px" }}>
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontWeight: 800, fontSize: "1.05rem", color: "#f8fafc" }}>
                    <span style={{ fontSize: "1.2rem" }}>🏝️</span>
                    <span>Andhra Heritage Explorer</span>
                </Link>

                <div style={{ display: "flex", alignItems: "center", gap: "1.3rem" }}>
                    <div style={{ display: "flex", gap: "1.1rem", alignItems: "center", flexWrap: "wrap", display: window.innerWidth <= 900 ? "none" : "flex" }}>
                        {links.map((link) => {
                            const active = location.pathname === link.to;
                            return (
                                <Link key={link.to} to={link.to} style={{ position: "relative", color: active ? "#93c5fd" : "#e2e8f0", fontWeight: 700, padding: "0.25rem 0" }}>
                                    {link.label}
                                    {active ? <span style={{ position: "absolute", left: 0, bottom: "-0.2rem", width: "100%", height: "2px", borderRadius: "999px", background: "linear-gradient(90deg, #60a5fa, #818cf8)" }} /> : null}
                                </Link>
                            );
                        })}
                    </div>

                    <Link to="/register" className="btn-primary" style={{ padding: "0.72rem 1.1rem", fontSize: "0.95rem" }}>
                        Register
                    </Link>

                    <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: window.innerWidth <= 900 ? "inline-flex" : "none", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", border: "1px solid rgba(148,163,184,0.2)", background: "rgba(15,23,42,0.84)", color: "#f8fafc" }} aria-label="Toggle menu">
                        ☰
                    </button>
                </div>
            </div>

            {mobileOpen ? (
                <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} style={{ padding: "0 0 1rem", display: window.innerWidth <= 900 ? "block" : "none" }}>
                    <div style={{ background: "rgba(2,6,23,0.95)", borderRadius: "18px", padding: "1rem", boxShadow: "0 12px 30px rgba(2,6,23,0.28)" }}>
                        {links.map((link) => {
                            const active = location.pathname === link.to;
                            return (
                                <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} style={{ display: "block", padding: "0.8rem 0.2rem", color: active ? "#93c5fd" : "#e2e8f0", fontWeight: 700, borderBottom: "1px solid rgba(148,163,184,0.16)" }}>
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            ) : null}
        </motion.nav>
    );
}

export default Navbar;