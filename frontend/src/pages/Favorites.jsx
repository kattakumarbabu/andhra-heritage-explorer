import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlaceCard from "../components/PlaceCard";
import api from "../api/api";

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavorites = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await api.get("/auth/favorites", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setFavorites(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <div className="page-shell">
            <Navbar />

            <section style={{ padding: "2.5rem 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <div className="section-label">Saved escapes</div>
                        <h1 className="section-title">Your favorite places</h1>
                        <p className="section-copy" style={{ margin: "0.8rem auto 0" }}>Keep your shortlist close and revisit the destinations you love most.</p>
                    </motion.div>

                    {loading ? (
                        <div style={{ textAlign: "center" }}>
                            <div className="glass-card" style={{ display: "inline-block", padding: "1.6rem 2rem", borderRadius: "24px" }}>
                                <div className="skeleton" style={{ width: "220px", height: "18px", borderRadius: "999px", marginBottom: "0.8rem" }} />
                                <div className="skeleton" style={{ width: "180px", height: "18px", borderRadius: "999px" }} />
                            </div>
                        </div>
                    ) : !localStorage.getItem("token") ? (
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ maxWidth: "680px", margin: "0 auto", borderRadius: "26px", padding: "2.2rem", textAlign: "center" }}>
                            <div style={{ width: "72px", height: "72px", borderRadius: "50%", margin: "0 auto 1rem", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #2563eb, #38bdf8)", color: "white" }}>
                                <Heart size={28} />
                            </div>
                            <h2>Please sign in</h2>
                            <p style={{ marginTop: "0.7rem" }}>Save your favorite destinations once you are logged in.</p>
                            <Link to="/login" className="btn-primary" style={{ marginTop: "1.2rem", padding: "0.9rem 1.2rem" }}>Login to continue</Link>
                        </motion.div>
                    ) : favorites.length === 0 ? (
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ maxWidth: "720px", margin: "0 auto", borderRadius: "26px", padding: "2.2rem", textAlign: "center" }}>
                            <div style={{ width: "74px", height: "74px", borderRadius: "50%", margin: "0 auto 1rem", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #2563eb, #38bdf8)", color: "white" }}>
                                <Sparkles size={28} />
                            </div>
                            <h2>No favorites yet</h2>
                            <p style={{ marginTop: "0.7rem" }}>Explore the state and add a few places to build your dream itinerary.</p>
                            <Link to="/explore" className="btn-primary" style={{ marginTop: "1.2rem", padding: "0.9rem 1.2rem" }}>Browse destinations</Link>
                        </motion.div>
                    ) : (
                        <>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.8rem", marginBottom: "1.2rem" }}>
                                <div style={{ fontWeight: 700, color: "#2563eb" }}>{favorites.length} saved destination{favorites.length === 1 ? "" : "s"}</div>
                                <div style={{ color: "#cbd5e1" }}>Your personal shortlist is ready.</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.4rem" }}>
                                {favorites.map((place) => (
                                    <PlaceCard key={place._id} place={place} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Favorites;