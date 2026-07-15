import { Link } from "react-router-dom";

function PlaceCard({ place }) {
    return (
        <div
            style={{
                width: "340px",
                background: "#fff",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                transition: "0.3s",
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            <img
                src={place.image}
                alt={place.name}
                style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                }}
            />

            <div
                style={{
                    padding: "25px",
                    textAlign: "center",
                }}
            >
                <span
                    style={{
                        background: "#2563EB",
                        color: "#fff",
                        padding: "6px 15px",
                        borderRadius: "30px",
                        fontSize: "13px",
                        fontWeight: "600",
                    }}
                >
                    {place.category}
                </span>

                <h2
                    style={{
                        marginTop: "18px",
                        marginBottom: "12px",
                        color: "#0F172A",
                        fontSize: "26px",
                    }}
                >
                    {place.name}
                </h2>

                <p
                    style={{
                        color: "#64748B",
                        margin: "8px 0",
                        fontSize: "17px",
                    }}
                >
                    📍 {place.district}
                </p>

                <p
                    style={{
                        color: "#F59E0B",
                        fontWeight: "bold",
                        fontSize: "18px",
                    }}
                >
                    ⭐ {place.rating}
                </p>

                <Link
                    to={`/place/${place.id}`}
                    style={{
                        display: "inline-block",
                        marginTop: "18px",
                        padding: "12px 28px",
                        background: "#2563EB",
                        color: "#fff",
                        borderRadius: "10px",
                        textDecoration: "none",
                        fontWeight: "600",
                    }}
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
}

export default PlaceCard;