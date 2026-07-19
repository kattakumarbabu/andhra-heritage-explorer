import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, MapPin, Sparkles, ShieldCheck, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";
import FeaturedPlaces from "../components/FeaturedPlaces";
import SearchSection from "../components/SearchSection";
import Footer from "../components/Footer";

function Home() {
    const navigate = useNavigate();

    const stats = [
        { value: "26", label: "Districts" },
        { value: "100+", label: "Destinations" },
        { value: "4.9/5", label: "Traveler Rating" },
    ];

    return (
        <div className="page-shell">
            <Navbar />

            <section style={{ position: "relative", overflow: "hidden", padding: "2rem 5% 4rem", minHeight: "88vh", display: "flex", alignItems: "center" }}>
                <div className="hero-orb" style={{ inset: "-8% auto auto -6%", width: "280px", height: "280px", background: "rgba(56,189,248,0.25)" }} />
                <div className="hero-orb" style={{ inset: "8% -6% auto auto", width: "240px", height: "240px", background: "rgba(37,99,235,0.18)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(2,6,23,0.8), rgba(15,23,42,0.35))", zIndex: 0 }} />
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=80" alt="Andhra scenic landscape" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }} />

                <div style={{ position: "relative", zIndex: 1, maxWidth: "1400px", width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "2rem", alignItems: "center" }}>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
                        <div className="section-label" style={{ color: "#dbeafe", letterSpacing: "0.28em" }}>
                            <Sparkles size={16} /> Premium tourism discovery
                        </div>
                        <h1 style={{ fontSize: "clamp(2.3rem, 5vw, 4.4rem)", lineHeight: 1.05, color: "white", marginTop: "1rem", maxWidth: "720px" }}>
                            Discover the soul of <span className="text-gradient">Andhra Pradesh</span>
                        </h1>
                        <p style={{ color: "#e2e8f0", fontSize: "1.08rem", maxWidth: "650px", marginTop: "1.2rem" }}>
                            Step into a world of temple towns, coastal escapes, hill retreats, ancient forts and vibrant culture curated for modern travelers.
                        </p>

                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
                            <button className="btn-primary" onClick={() => navigate("/explore")} style={{ padding: "0.95rem 1.35rem" }}>
                                Explore the coastline <ArrowRight size={18} />
                            </button>
                            <button className="btn-secondary" onClick={() => navigate("/about")} style={{ padding: "0.95rem 1.25rem" }}>
                                Learn our story
                            </button>
                        </div>

                        <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", marginTop: "1.7rem" }}>
                            {stats.map((item) => (
                                <div key={item.label} style={{ background: "rgba(15,23,42,0.55)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "16px", padding: "0.9rem 1rem", minWidth: "130px" }}>
                                    <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "white" }}>{item.value}</div>
                                    <div style={{ color: "#cbd5e1", fontSize: "0.92rem", marginTop: "0.2rem" }}>{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="glass-card" style={{ padding: "1.4rem", borderRadius: "24px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                            <div>
                                <div style={{ fontSize: "0.84rem", textTransform: "uppercase", letterSpacing: "0.28em", color: "#2563eb", fontWeight: 800 }}>Featured route</div>
                                <h3 style={{ fontSize: "1.2rem", marginTop: "0.25rem" }}>Heritage trail planner</h3>
                            </div>
                            <div style={{ width: "42px", height: "42px", borderRadius: "50%", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #2563eb, #38bdf8)", color: "white" }}>
                                <Compass size={18} />
                            </div>
                        </div>

                        <div style={{ display: "grid", gap: "0.8rem" }}>
                            {[
                                { title: "Temple town escape", detail: "Discover spiritual landmarks with curated history and local stories." },
                                { title: "Coastal weekend", detail: "Find breezy beaches, seafood stops and sunset viewpoints." },
                                { title: "Hill retreat", detail: "Experience misty valleys and scenic drives through Araku and beyond." },
                            ].map((item) => (
                                <div key={item.title} style={{ background: "rgba(248,250,252,0.8)", borderRadius: "16px", padding: "0.9rem 1rem" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", color: "#f8fafc", fontWeight: 700 }}><MapPin size={15} /> {item.title}</div>
                                    <p style={{ marginTop: "0.35rem", fontSize: "0.95rem" }}>{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <SearchSection />

            <section style={{ padding: "2rem 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <div className="section-label">Explore by interest</div>
                        <h2 className="section-title">Choose your ideal getaway</h2>
                        <p className="section-copy" style={{ margin: "0.8rem auto 0" }}>Pick from curated experiences ranging from heritage walks to beachside escapes and scenic hill journeys.</p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.3rem", maxWidth: "1200px", margin: "0 auto" }}>
                        {categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "0 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", background: "rgba(10,17,33,0.76)", borderRadius: "30px", padding: "1.5rem", boxShadow: "0 20px 60px rgba(2,6,23,0.28)", border: "1px solid rgba(148,163,184,0.16)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.2rem" }}>
                        <div>
                            <div className="section-label">Top picks</div>
                            <h2 className="section-title" style={{ fontSize: "clamp(1.7rem, 2.15vw, 2.2rem)" }}>Handpicked destinations</h2>
                        </div>
                        <button className="btn-primary" onClick={() => navigate("/explore")} style={{ padding: "0.8rem 1.1rem" }}>
                            See all places <ArrowRight size={16} />
                        </button>
                    </div>
                    <FeaturedPlaces />
                </div>
            </section>

            <section style={{ padding: "0 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem" }}>
                    {[
                        { icon: <ShieldCheck size={18} />, title: "Trusted guidance", text: "Every destination is presented with helpful context and travel-ready details." },
                        { icon: <TrendingUp size={18} />, title: "Modern planning", text: "Search, save favorites and explore your next trip with a polished interface." },
                        { icon: <MapPin size={18} />, title: "Location-aware", text: "Open Google Maps directly for quick navigation to each attraction." },
                    ].map((item) => (
                        <div key={item.title} className="glass-card" style={{ padding: "1.2rem", borderRadius: "20px" }}>
                            <div style={{ width: "42px", height: "42px", borderRadius: "12px", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #2563eb, #38bdf8)", color: "white" }}>{item.icon}</div>
                            <h3 style={{ marginTop: "0.9rem" }}>{item.title}</h3>
                            <p style={{ marginTop: "0.45rem" }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: "0 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gap: "1.2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
                    {[
                        { title: "Immersive coastal escapes", text: "From sunrise beaches to vibrant evenings, Andhra’s shoreline always feels cinematic." },
                        { title: "Living heritage", text: "Discover centuries of ritual, architecture and craft traditions in every district." },
                        { title: "Scenic retreats", text: "A blend of hill drives, fresh air and peaceful stays for slow travelers." },
                    ].map((item, index) => (
                        <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="soft-card" style={{ borderRadius: "24px", padding: "1.2rem" }}>
                            <div style={{ width: "44px", height: "44px", borderRadius: "14px", display: "grid", placeItems: "center", background: "linear-gradient(135deg, #2563eb, #38bdf8)", color: "white" }}><Compass size={18} /></div>
                            <h3 style={{ marginTop: "0.8rem" }}>{item.title}</h3>
                            <p style={{ marginTop: "0.45rem" }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section style={{ padding: "0 5% 4rem" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(37,99,235,0.9))", borderRadius: "32px", padding: "2rem", color: "white" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <div>
                            <div className="section-label" style={{ color: "#dbeafe" }}>Traveler stories</div>
                            <h2 className="section-title" style={{ color: "white", fontSize: "clamp(1.7rem, 2.2vw, 2.2rem)" }}>Loved by explorers</h2>
                        </div>
                        <button onClick={() => navigate("/contact")} className="btn-secondary" style={{ padding: "0.8rem 1.15rem" }}>Share your story</button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", marginTop: "1.2rem" }}>
                        {[
                            { quote: "Every detail feels curated. The coastal route planning made our trip effortless.", name: "Aisha & Rohan" },
                            { quote: "The interface is so calm and elegant. It made us discover places we would have missed.", name: "Priya M." },
                        ].map((item) => (
                            <div key={item.name} style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "22px", padding: "1rem" }}>
                                <p style={{ color: "#e2e8f0", fontStyle: "italic" }}>“{item.quote}”</p>
                                <div style={{ marginTop: "0.8rem", fontWeight: 700 }}>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "0 5% 4rem" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center", background: "rgba(10,17,33,0.78)", borderRadius: "30px", padding: "2rem", boxShadow: "var(--shadow-soft)", border: "1px solid rgba(148,163,184,0.16)" }}>
                    <div className="section-label">Plan your escape</div>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 2.3vw, 2.4rem)" }}>Ready for a journey shaped by culture, nature and comfort?</h2>
                    <p className="section-copy" style={{ margin: "0.8rem auto 0" }}>Start with a few favorites, explore the best districts and build your ideal Andhra itinerary.</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "1.2rem" }}>
                        <button onClick={() => navigate("/explore")} className="btn-primary" style={{ padding: "0.95rem 1.25rem" }}>Explore destinations</button>
                        <button onClick={() => navigate("/favorites")} className="btn-secondary" style={{ padding: "0.95rem 1.25rem", color: "#f8fafc", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(15,23,42,0.8)" }}>View saved places</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;