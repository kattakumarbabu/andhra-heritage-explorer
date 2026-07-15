import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Favorites() {
    return (
        <>
            <Navbar />

            <div
                style={{
                    minHeight: "100vh",
                    background: "#F8FAFC",
                    padding: "60px 20px",
                }}
            >
                {/* Header */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "60px",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "48px",
                            color: "#0F172A",
                            marginBottom: "15px",
                        }}
                    >
                        ❤️ My Favorite Places
                    </h1>

                    <p
                        style={{
                            color: "#64748B",
                            fontSize: "18px",
                            maxWidth: "700px",
                            margin: "auto",
                        }}
                    >
                        Keep all your favorite tourist destinations in one place and plan
                        your next journey with ease.
                    </p>
                </div>

                {/* Empty State */}
                <div
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        background: "#fff",
                        borderRadius: "18px",
                        padding: "50px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                        textAlign: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: "80px",
                            marginBottom: "20px",
                        }}
                    >
                        💙
                    </div>

                    <h2
                        style={{
                            color: "#0F172A",
                            marginBottom: "15px",
                        }}
                    >
                        No Favorites Added
                    </h2>

                    <p
                        style={{
                            color: "#64748B",
                            lineHeight: "1.8",
                            marginBottom: "30px",
                        }}
                    >
                        You haven't added any tourist places to your favorites yet.
                        Start exploring Andhra Pradesh and save the places you'd like to
                        visit later.
                    </p>

                    <Link
                        to="/explore"
                        style={{
                            display: "inline-block",
                            background: "#2563EB",
                            color: "#fff",
                            padding: "15px 35px",
                            borderRadius: "10px",
                            textDecoration: "none",
                            fontWeight: "600",
                            fontSize: "17px",
                        }}
                    >
                        🌍 Explore Tourist Places
                    </Link>
                </div>

                {/* Quick Tips */}
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "70px auto 0",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                        gap: "25px",
                    }}
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "15px",
                            textAlign: "center",
                            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2>🛕</h2>
                        <h3>Temples</h3>
                        <p>Save famous spiritual destinations.</p>
                    </div>

                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "15px",
                            textAlign: "center",
                            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2>🏖️</h2>
                        <h3>Beaches</h3>
                        <p>Bookmark your favorite beaches.</p>
                    </div>

                    <div
                        style={{
                            background: "#fff",
                            padding: "30px",
                            borderRadius: "15px",
                            textAlign: "center",
                            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                        }}
                    >
                        <h2>🏞️</h2>
                        <h3>Nature</h3>
                        <p>Plan your trips to scenic destinations.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Favorites;