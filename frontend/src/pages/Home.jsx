import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import categories from "../data/categories";
import FeaturedPlaces from "../components/FeaturedPlaces";
import SearchSection from "../components/SearchSection";
import Footer from "../components/Footer";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section
                style={{
                    height: "90vh",
                    background:
                        "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "white",
                    padding: "20px",
                }}
            >
                <h1
                    style={{
                        fontSize: "64px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#fff",
                    }}
                >
                    Discover Andhra Pradesh
                </h1>

                <p
                    style={{
                        maxWidth: "750px",
                        fontSize: "22px",
                        lineHeight: "1.8",
                        color: "#f1f5f9",
                    }}
                >
                    Explore historical monuments, temples, beaches, forts, caves,
                    waterfalls and rich cultural heritage across Andhra Pradesh.
                </p>

                <button
                    onClick={() => navigate("/explore")}
                    style={{
                        marginTop: "35px",
                        padding: "16px 36px",
                        background: "#2563EB",
                        color: "#fff",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "18px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#1D4ED8";
                        e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#2563EB";
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    Explore Now →
                </button>
            </section>

            {/* Search Section */}
            <SearchSection />

            {/* Categories */}
            <section
                style={{
                    padding: "90px 8%",
                    background: "#F8FAFC",
                }}
            >
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "42px",
                        color: "#0F172A",
                        marginBottom: "15px",
                    }}
                >
                    Explore by Category
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#64748B",
                        fontSize: "18px",
                        marginBottom: "50px",
                    }}
                >
                    Find amazing destinations based on your interests.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
                        gap: "30px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>
            </section>

            {/* Featured Places */}
            <FeaturedPlaces />


            <Footer />




        </>
    );
}

export default Home;