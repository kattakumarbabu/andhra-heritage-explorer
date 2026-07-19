import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PlaceCard from "./PlaceCard";
import api from "../api/api";

function FeaturedPlaces() {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const res = await api.get("/places");
                setPlaces(res.data.slice(0, 4));
            } catch (error) {
                console.error("Error fetching featured places:", error);
            }
        };

        fetchPlaces();
    }, []);

    return (
        <section style={{ padding: "1rem 0 0" }}>
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                style={{ display: "grid", gap: "1rem" }}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <div>
                        <div className="section-label">Featured escapes</div>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 2vw, 2.1rem)" }}>Popular journeys in Andhra</h2>
                    </div>
                    <div style={{ color: "#64748b", fontWeight: 600 }}>Luxury stays, cultural depth and scenic beauty.</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.2rem" }}>
                    {places.map((place) => (
                        <PlaceCard key={place._id} place={place} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default FeaturedPlaces;