import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Search as SearchIcon, Sparkles } from "lucide-react";

function SearchSection() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/explore?search=${encodeURIComponent(search)}`);
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            style={{ width: "92%", maxWidth: "1080px", margin: "-1.5rem auto 3rem", position: "relative", zIndex: 2 }}
        >
            <div className="glass-card" style={{ borderRadius: "28px", padding: "1.1rem", display: "flex", gap: "0.8rem", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "260px", display: "flex", alignItems: "center", gap: "0.7rem", padding: "0.95rem 1rem", borderRadius: "999px", background: "rgba(15,23,42,0.9)", border: "1px solid rgba(148,163,184,0.2)" }}>
                    <SearchIcon size={18} color="#38bdf8" />
                    <input type="text" placeholder="Search temples, beaches, districts or experiences..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ border: "none", outline: "none", width: "100%", background: "transparent", fontSize: "0.98rem", color: "#f8fafc" }} />
                </div>
                <button onClick={handleSearch} className="btn-primary" style={{ padding: "0.95rem 1.2rem" }}>
                    Search now
                </button>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#2563eb", fontWeight: 700, padding: "0 0.15rem" }}>
                    <Sparkles size={16} /> <span>Curated stories</span>
                </div>
            </div>
        </motion.section>
    );
}

export default SearchSection;