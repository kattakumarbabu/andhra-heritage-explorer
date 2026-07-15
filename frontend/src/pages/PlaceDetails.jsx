import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import places from "../data/places";

function PlaceDetails() {
    const { id } = useParams();

    const place = places.find((p) => p.id === Number(id));

    if (!place) {
        return <h2 style={{ textAlign: "center" }}>Place Not Found</h2>;
    }

    return (
        <>
            <Navbar />

            <div
                style={{
                    maxWidth: "1200px",
                    margin: "40px auto",
                    background: "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                }}
            >
                <img
                    src={place.image}
                    alt={place.name}
                    style={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                    }}
                />

                <div style={{ padding: "40px" }}>
                    <span
                        style={{
                            background: "#2563EB",
                            color: "#fff",
                            padding: "8px 18px",
                            borderRadius: "20px",
                        }}
                    >
                        {place.category}
                    </span>

                    <h1 style={{ marginTop: "20px" }}>{place.name}</h1>

                    <p style={{ color: "#555" }}>
                        📍 {place.district}
                    </p>

                    <h2>⭐ {place.rating}</h2>

                    <hr />

                    <h2>Description</h2>

                    <p>{place.description}</p>

                    <h2>History</h2>

                    <p>{place.history}</p>

                    <h2>Visiting Hours</h2>

                    <p>{place.timings}</p>

                    <h2>Entry Fee</h2>

                    <p>{place.entryFee}</p>

                    <a
                        href={place.maps}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: "inline-block",
                            marginTop: "30px",
                            padding: "15px 30px",
                            background: "#2563EB",
                            color: "#fff",
                            borderRadius: "10px",
                            textDecoration: "none",
                        }}
                    >
                        📍 Open in Google Maps
                    </a>
                </div>
            </div>
        </>
    );
}

export default PlaceDetails;