import PlaceCard from "./PlaceCard";
import places from "../data/places";

function FeaturedPlaces() {
    return (
        <section
            style={{
                padding: "80px 8%",
                background: "#ffffff",
            }}
        >
            <h2
                style={{
                    fontSize: "42px",
                    textAlign: "center",
                    color: "#0F172A",
                }}
            >
                Featured Destinations
            </h2>

            <p
                style={{
                    textAlign: "center",
                    color: "#64748B",
                    marginBottom: "50px",
                    fontSize: "18px",
                }}
            >
                Explore the most popular destinations in Andhra Pradesh
            </p>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                    gap: "35px",
                    justifyItems: "center",
                    maxWidth: "1400px",
                    margin: "50px auto",
                }}
            >
                {places.map((place) => (
                    <PlaceCard key={place.id} place={place} />
                ))}
            </div>
        </section>
    );
}

export default FeaturedPlaces;