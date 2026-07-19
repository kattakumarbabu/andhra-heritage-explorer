import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Compass, Landmark, MapPinned, Sparkles, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    const navigate = useNavigate();

    const highlights = [
        { icon: <MapPinned size={18} />, title: "Location-aware planning", text: "Google Maps integration helps travelers navigate with confidence." },
        { icon: <Landmark size={18} />, title: "Cultural storytelling", text: "Each destination is presented with context, history and travel insight." },
        { icon: <TrendingUp size={18} />, title: "Modern discovery", text: "Search, save favorites and explore with a refined and responsive experience." },
    ];

    const stats = [
        { value: "20+", label: "Curated places" },
        { value: "26", label: "Districts" },
        { value: "10+", label: "Categories" },
        { value: "100%", label: "Free access" },
    ];

    const timeline = [
        { title: "Discover", text: "Browse exceptional destinations powered by premium travel storytelling." },
        { title: "Plan", text: "Filter by district, category and interest to build your ideal journey." },
        { title: "Save", text: "Keep your favorite stops in a seamless shortlist for later visits." },
    ];

    const stack = ["React", "Vite", "Framer Motion", "Axios", "React Router", "CSS Design System"];

    return (
        <div className="page-shell">
            <Navbar />

            <section style={{ position: "relative", overflow: "hidden", minHeight: "78vh", padding: "3rem 5%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(37,99,235,0.86)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1800') center/cover" }}>
                <div style={{ maxWidth: "1100px", textAlign: "center", color: "white", position: "relative", zIndex: 1 }}>
                    <div className="section-label" style={{ color: "#dbeafe" }}>About the experience</div>
                    <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.3rem)", marginTop: "0.8rem" }}>A premium digital guide to Andhra Pradesh</h1>
                    <p style={{ maxWidth: "780px", margin: "1rem auto 0", color: "#e2e8f0", fontSize: "1.05rem" }}>Andhra Heritage Explorer blends beautiful visuals, rich storytelling and practical travel features into a smooth tourism platform for explorers of all kinds.</p>
                    <button onClick={() => navigate("/explore")} className="btn-primary" style={{ marginTop: "1.5rem", padding: "0.95rem 1.3rem" }}>Start exploring <Sparkles size={16} /></button>
                </div>
            </section>

            <section style={{ padding: "3rem 5%" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 0.95fr", gap: "1.6rem", alignItems: "center" }}>
                    <motion.img initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1000" alt="Heritage landscape in Andhra Pradesh" style={{ width: "100%", borderRadius: "28px", boxShadow: "0 24px 60px rgba(15,23,42,0.12)" }} />
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="glass-card" style={{ borderRadius: "28px", padding: "1.5rem" }}>
                        <div className="section-label">Who we are</div>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)" }}>Crafted for modern travelers</h2>
                        <p style={{ marginTop: "0.9rem" }}>This platform showcases the rich heritage, culture and natural beauty of Andhra Pradesh in a format that feels polished, intuitive and travel-ready.</p>
                        <p style={{ marginTop: "0.8rem" }}>From seamless search and favorites to premium storytelling, the experience is built to be both inspiring and useful on every device.</p>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: "0 5% 3rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
                    {highlights.map((item) => (
                        <div key={item.title} className="soft-card" style={{ padding: "1.25rem", borderRadius: "22px" }}>
                            <div style={{ width: "42px", height: "42px", borderRadius: "12px", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #2563eb, #38bdf8)", color: "white" }}>{item.icon}</div>
                            <h3 style={{ marginTop: "0.8rem" }}>{item.title}</h3>
                            <p style={{ marginTop: "0.45rem" }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: "0 5% 3rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    <div className="glass-card" style={{ borderRadius: "24px", padding: "1.25rem" }}>
                        <div className="section-label">Mission</div>
                        <h3 style={{ marginTop: "0.5rem" }}>Bring Andhra’s heritage closer</h3>
                        <p style={{ marginTop: "0.5rem" }}>We make every destination feel inspiring, informative and effortlessly accessible for modern travelers.</p>
                    </div>
                    <div className="glass-card" style={{ borderRadius: "24px", padding: "1.25rem" }}>
                        <div className="section-label">Vision</div>
                        <h3 style={{ marginTop: "0.5rem" }}>Shape thoughtful travel experiences</h3>
                        <p style={{ marginTop: "0.5rem" }}>We aim to blend cultural depth, visual storytelling and practical planning into one premium experience.</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: "0 5% 3rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", background: "linear-gradient(135deg, #0f172a, #1e3a8a)", borderRadius: "32px", color: "white", padding: "2rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "1.4rem" }}>
                        <div className="section-label" style={{ color: "#bfdbfe" }}>At a glance</div>
                        <h2 className="section-title" style={{ color: "white", fontSize: "clamp(1.7rem, 2.4vw, 2.2rem)" }}>Andhra Pradesh tourism, reimagined</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                        {stats.map((item) => (
                            <div key={item.label} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "20px", padding: "1rem", textAlign: "center" }}>
                                <div style={{ fontSize: "1.6rem", fontWeight: 800 }}>{item.value}</div>
                                <div style={{ color: "#cbd5e1", marginTop: "0.3rem" }}>{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "0 5% 3rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
                    {timeline.map((item, index) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.08 }} className="soft-card" style={{ borderRadius: "22px", padding: "1.2rem" }}>
                            <div style={{ fontWeight: 800, color: "#2563eb" }}>0{index + 1}</div>
                            <h3 style={{ marginTop: "0.4rem" }}>{item.title}</h3>
                            <p style={{ marginTop: "0.45rem" }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section style={{ padding: "0 5% 3rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gap: "1rem", gridTemplateColumns: "1.1fr 0.9fr" }}>
                    <div className="glass-card" style={{ borderRadius: "24px", padding: "1.25rem" }}>
                        <div className="section-label">Technology stack</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", marginTop: "1rem" }}>
                            {stack.map((item) => (
                                <span key={item} style={{ padding: "0.6rem 0.9rem", borderRadius: "999px", background: "rgba(37,99,235,0.08)", color: "#2563eb", fontWeight: 700 }}>{item}</span>
                            ))}
                        </div>
                    </div>
                    <div className="glass-card" style={{ borderRadius: "24px", padding: "1.25rem" }}>
                        <div className="section-label">Developer note</div>
                        <h3 style={{ marginTop: "0.5rem" }}>Built for a refined travel experience</h3>
                        <p style={{ marginTop: "0.5rem" }}>The experience is designed to stay fast, responsive and visually premium while preserving the original app flow and data layer.</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: "0 5% 4rem" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
                    <h2 className="section-title">Ready to start your journey?</h2>
                    <p className="section-copy" style={{ margin: "0.8rem auto 0" }}>Explore temple towns, beaches, valleys and cultural wonders in one immersive experience.</p>
                    <button onClick={() => navigate("/explore")} className="btn-primary" style={{ marginTop: "1.2rem", padding: "0.95rem 1.3rem" }}>Explore destinations</button>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default About;