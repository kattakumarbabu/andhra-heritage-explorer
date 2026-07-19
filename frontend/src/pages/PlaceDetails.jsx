import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, MapPin, Sparkles, Star, Ticket, Trees } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../api/api";

function PlaceDetails() {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const res = await api.get(`/places/${id}`);
                setPlace(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlace();
    }, [id]);

    if (loading) {
        return (
            <div className="page-shell">
                <Navbar />
                <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "2rem" }}>
                    <div className="glass-card" style={{ padding: "2rem 2.4rem", borderRadius: "24px", textAlign: "center" }}>
                        <div className="skeleton" style={{ width: "180px", height: "18px", margin: "0 auto 1rem", borderRadius: "999px" }} />
                        <div className="skeleton" style={{ width: "240px", height: "24px", margin: "0 auto" }} />
                    </div>
                </div>
            </div>
        );
    }

    if (!place) {
        return (
            <div className="page-shell">
                <Navbar />
                <div style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "2rem" }}>
                    <div className="glass-card" style={{ padding: "2rem 2.4rem", borderRadius: "24px", textAlign: "center" }}>
                        <h2>Destination not found</h2>
                        <p style={{ marginTop: "0.6rem" }}>The selected place could not be loaded right now.</p>
                    </div>
                </div>
            </div>
        );
    }

    const galleryImages = [place.image, "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"];
    const mapQuery = `${place.name}, ${place.district}, Andhra Pradesh`;

    return (
        <div className="page-shell">
            <Navbar />

            <section style={{ padding: "1.8rem 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="glass-card" style={{ borderRadius: "34px", overflow: "hidden" }}>
                        <div style={{ position: "relative" }}>
                            <img src={place.image} alt={place.name} style={{ width: "100%", height: "480px", objectFit: "cover" }} />
                            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,6,23,0.1) 0%, rgba(2,6,23,0.72) 100%)" }} />
                            <div style={{ position: "absolute", inset: "auto 0 0 0", padding: "2rem" }}>
                                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.6rem 0.95rem", borderRadius: "999px", background: "rgba(255,255,255,0.16)", color: "white", backdropFilter: "blur(8px)", fontWeight: 700 }}>
                                    <Sparkles size={16} /> {place.category}
                                </div>
                                <h1 style={{ color: "white", fontSize: "clamp(2rem, 3.4vw, 2.8rem)", marginTop: "0.8rem" }}>{place.name}</h1>
                                <p style={{ color: "#e2e8f0", marginTop: "0.4rem", display: "flex", alignItems: "center", gap: "0.45rem" }}><MapPin size={16} /> {place.district}</p>
                            </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "1.5rem", padding: "1.6rem" }}>
                            <div>
                                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.6rem 0.9rem", borderRadius: "999px", background: "#eff6ff", color: "#2563eb", fontWeight: 700 }}>
                                        <Star size={16} /> {place.rating}
                                    </div>
                                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem", padding: "0.6rem 0.9rem", borderRadius: "999px", background: "#f0fdf4", color: "#15803d", fontWeight: 700 }}>
                                        <Trees size={16} /> Nature & heritage
                                    </div>
                                </div>

                                <div style={{ display: "grid", gap: "1rem" }}>
                                    <div style={{ padding: "1rem 1.1rem", borderRadius: "20px", background: "rgba(248,250,252,0.9)" }}>
                                        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>About this place</h2>
                                        <p>{place.description}</p>
                                    </div>

                                    <div style={{ padding: "1rem 1.1rem", borderRadius: "20px", background: "rgba(248,250,252,0.9)" }}>
                                        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>History & significance</h2>
                                        <p>{place.history}</p>
                                    </div>

                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                                        <div style={{ padding: "1rem 1.1rem", borderRadius: "20px", background: "linear-gradient(135deg, #eff6ff, #f8fbff)" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#2563eb", fontWeight: 700 }}><Clock3 size={16} /> Visiting hours</div>
                                            <p style={{ marginTop: "0.5rem" }}>{place.timings}</p>
                                        </div>
                                        <div style={{ padding: "1rem 1.1rem", borderRadius: "20px", background: "linear-gradient(135deg, #f0fdf4, #f8fffb)" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#15803d", fontWeight: 700 }}><Ticket size={16} /> Entry fee</div>
                                            <p style={{ marginTop: "0.5rem" }}>{place.entryFee}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="soft-card" style={{ borderRadius: "24px", padding: "1.1rem" }}>
                                    <h3 style={{ marginBottom: "0.7rem" }}>Plan your visit</h3>
                                    <div style={{ display: "grid", gap: "0.7rem" }}>
                                        <div style={{ padding: "0.85rem", borderRadius: "16px", background: "#f8fafc" }}>
                                            <div style={{ fontWeight: 700 }}>Nearby attractions</div>
                                            <p style={{ marginTop: "0.3rem", fontSize: "0.94rem" }}>Scenic viewpoints, heritage markets and local cafés</p>
                                        </div>
                                        <div style={{ padding: "0.85rem", borderRadius: "16px", background: "#f8fafc" }}>
                                            <div style={{ fontWeight: 700 }}>Weather outlook</div>
                                            <p style={{ marginTop: "0.3rem", fontSize: "0.94rem" }}>Best visited in the morning for clear photography and comfortable temperatures.</p>
                                        </div>
                                        <div style={{ padding: "0.85rem", borderRadius: "16px", background: "#f8fafc" }}>
                                            <div style={{ fontWeight: 700 }}>Gallery</div>
                                            <p style={{ marginTop: "0.3rem", fontSize: "0.94rem" }}>Immersive visuals and destination highlights for inspiration.</p>
                                        </div>
                                    </div>

                                    <a href={place.maps} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: "100%", marginTop: "1rem", padding: "0.9rem 1rem" }}>
                                        Open in Google Maps <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: "0 1.6rem 1.6rem" }}>
                            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
                                {galleryImages.map((image, index) => (
                                    <img key={index} src={image} alt={`${place.name} gallery ${index + 1}`} style={{ height: "220px", width: "100%", objectFit: "cover", borderRadius: "24px" }} />
                                ))}
                            </div>
                        </div>

                        <div style={{ padding: "0 1.6rem 1.6rem" }}>
                            <div className="soft-card" style={{ borderRadius: "24px", padding: "1.1rem" }}>
                                <h3 style={{ marginBottom: "0.7rem" }}>Navigate to this place</h3>
                                <iframe title={place.name} src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`} width="100%" height="280" loading="lazy" style={{ border: "none", borderRadius: "18px" }} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default PlaceDetails;