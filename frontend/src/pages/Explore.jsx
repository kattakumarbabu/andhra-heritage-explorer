import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import PlaceCard from "../components/PlaceCard";
import Footer from "../components/Footer";
import api from "../api/api";

function Explore() {
    const location = useLocation();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(() => {
        const params = new URLSearchParams(location.search);
        return params.get("search") || "";
    });
    const [category, setCategory] = useState("All");
    const [district, setDistrict] = useState("All");

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await api.get("/places");
                setPlaces(response.data);
            } catch (error) {
                console.error("Error fetching places:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    const categories = ["All", ...new Set(places.map((place) => place.category).filter(Boolean))];
    const districts = ["All", ...new Set(places.map((place) => place.district).filter(Boolean))];

    const filteredPlaces = places.filter((place) => {
        const searchValue = search.toLowerCase();
        const matchesSearch =
            place.name?.toLowerCase().includes(searchValue) ||
            place.district?.toLowerCase().includes(searchValue) ||
            place.category?.toLowerCase().includes(searchValue);

        const matchesCategory = category === "All" || place.category === category;
        const matchesDistrict = district === "All" || place.district === district;

        return matchesSearch && matchesCategory && matchesDistrict;
    });

    return (
        <div className="page-shell">
            <Navbar />

            <section style={{ padding: "2.5rem 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} style={{ textAlign: "center", marginBottom: "1.6rem" }}>
                        <div className="section-label">Curated collections</div>
                        <h1 className="section-title">Explore Andhra Pradesh</h1>
                        <p className="section-copy" style={{ margin: "0.8rem auto 0" }}>Search, filter and discover destinations that match your travel mood in seconds.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="glass-card" style={{ borderRadius: "24px", padding: "1.2rem", marginBottom: "1.8rem" }}>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ minWidth: "280px", flex: 1, display: "flex", alignItems: "center", gap: "0.7rem", background: "rgba(15,23,42,0.9)", border: "1px solid rgba(148,163,184,0.2)", borderRadius: "999px", padding: "0.8rem 1rem" }}>
                                <Search size={18} color="#38bdf8" />
                                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search temples, beaches, districts..." style={{ border: "none", outline: "none", width: "100%", background: "transparent", fontSize: "0.98rem", color: "#f8fafc" }} />
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                                <select value={category} onChange={(e) => setCategory(e.target.value)} style={selectStyle}>
                                    {categories.map((option) => <option key={option}>{option}</option>)}
                                </select>
                                <select value={district} onChange={(e) => setDistrict(e.target.value)} style={selectStyle}>
                                    {districts.map((option) => <option key={option}>{option}</option>)}
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.3rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#2563eb", fontWeight: 700 }}>
                            <SlidersHorizontal size={18} /> {filteredPlaces.length} curated place{filteredPlaces.length === 1 ? "" : "s"}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#cbd5e1" }}>
                            <Sparkles size={16} /> Live discovery mode
                        </div>
                    </div>

                    {loading ? (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.4rem" }}>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className="soft-card" style={{ borderRadius: "24px", padding: "1rem" }}>
                                    <div className="skeleton" style={{ height: "210px", borderRadius: "18px" }} />
                                    <div className="skeleton" style={{ height: "18px", width: "55%", marginTop: "1rem", borderRadius: "999px" }} />
                                    <div className="skeleton" style={{ height: "24px", width: "70%", marginTop: "0.8rem", borderRadius: "999px" }} />
                                    <div className="skeleton" style={{ height: "14px", width: "40%", marginTop: "0.7rem", borderRadius: "999px" }} />
                                </div>
                            ))}
                        </div>
                    ) : filteredPlaces.length > 0 ? (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.4rem" }}>
                            {filteredPlaces.map((place) => (
                                <PlaceCard key={place._id} place={place} />
                            ))}
                        </div>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card" style={{ borderRadius: "24px", padding: "2rem", textAlign: "center" }}>
                            <div style={{ width: "72px", height: "72px", borderRadius: "50%", display: "grid", placeItems: "center", margin: "0 auto 1rem", background: "linear-gradient(135deg, #2563eb, #38bdf8)", color: "white" }}>
                                <Compass size={28} />
                            </div>
                            <h2>No matching destinations</h2>
                            <p style={{ marginTop: "0.6rem" }}>Try another district, category or broader keyword to reveal more places.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

const selectStyle = {
    padding: "0.8rem 1rem",
    borderRadius: "999px",
    border: "1px solid rgba(148,163,184,0.2)",
    background: "rgba(15,23,42,0.9)",
    fontSize: "0.95rem",
    color: "#f8fafc",
    outline: "none",
    minWidth: "150px",
};

export default Explore;