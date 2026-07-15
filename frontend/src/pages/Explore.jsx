import { useState } from "react";
import Navbar from "../components/Navbar";
import PlaceCard from "../components/PlaceCard";
import Footer from "../components/Footer";
import places from "../data/places";

function Explore() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [district, setDistrict] = useState("All");

    const filteredPlaces = places.filter((place) => {
        const matchesSearch =
            place.name.toLowerCase().includes(search.toLowerCase()) ||
            place.district.toLowerCase().includes(search.toLowerCase()) ||
            place.category.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || place.category === category;

        const matchesDistrict =
            district === "All" || place.district === district;

        return matchesSearch && matchesCategory && matchesDistrict;
    });

    return (
        <>
            <Navbar />

            <div
                style={{
                    background: "#F8FAFC",
                    minHeight: "100vh",
                    padding: "50px 60px",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "48px",
                        color: "#0F172A",
                    }}
                >
                    Explore Andhra Pradesh
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#64748B",
                        marginBottom: "40px",
                        fontSize: "18px",
                    }}
                >
                    Discover amazing tourist destinations across Andhra Pradesh.
                </p>

                {/* Search & Filters */}

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "20px",
                        marginBottom: "40px",
                    }}
                >
                    <input
                        type="text"
                        placeholder="🔍 Search places..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={inputStyle}
                    />

                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={selectStyle}
                    >
                        <option>All</option>
                        <option>Temple</option>
                        <option>Beach</option>
                        <option>Cave</option>
                        <option>Hill Station</option>
                    </select>

                    <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        style={selectStyle}
                    >
                        <option>All</option>
                        <option>Vijayawada</option>
                        <option>Visakhapatnam</option>
                        <option>Kurnool</option>
                    </select>
                </div>

                <h3
                    style={{
                        textAlign: "center",
                        marginBottom: "35px",
                        color: "#2563EB",
                    }}
                >
                    {filteredPlaces.length} Tourist Place
                    {filteredPlaces.length !== 1 ? "s" : ""} Found
                </h3>

                {filteredPlaces.length > 0 ? (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(340px,1fr))",
                            gap: "35px",
                            justifyItems: "center",
                            maxWidth: "1400px",
                            margin: "0 auto",
                        }}
                    >
                        {filteredPlaces.map((place) => (
                            <PlaceCard key={place.id} place={place} />
                        ))}
                    </div>
                ) : (
                    <h2
                        style={{
                            textAlign: "center",
                            color: "#64748B",
                        }}
                    >
                        No tourist places found.
                    </h2>
                )}
            </div>

            <Footer />
        </>
    );
}

const inputStyle = {
    width: "320px",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid #CBD5E1",
    fontSize: "16px",
    outline: "none",
};

const selectStyle = {
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid #CBD5E1",
    fontSize: "16px",
    cursor: "pointer",
};

export default Explore;