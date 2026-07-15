import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchSection() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/explore?search=${search}`);
    };

    return (
        <section
            style={{
                background: "#fff",
                width: "90%",
                maxWidth: "900px",
                margin: "-50px auto 60px",
                padding: "25px",
                borderRadius: "18px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                display: "flex",
                gap: "15px",
                alignItems: "center",
            }}
        >
            <input
                type="text"
                placeholder="Search tourist places..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    flex: 1,
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "17px",
                    outline: "none",
                }}
            />

            <button
                onClick={handleSearch}
                style={{
                    background: "#2563EB",
                    color: "#fff",
                    border: "none",
                    padding: "15px 30px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "600",
                }}
            >
                🔍 Search
            </button>
        </section>
    );
}

export default SearchSection;