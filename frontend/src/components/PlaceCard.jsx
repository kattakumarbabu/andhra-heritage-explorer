import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, MapPin, Star } from "lucide-react";
import toast from "react-hot-toast";
import api from "../api/api";

function PlaceCard({ place }) {
    const addToFavorites = async (id) => {
        if (!id) {
            toast.error("Place ID is undefined");
            return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("Please login first.");
            return;
        }

        try {
            const response = await api.post(
                `/auth/favorites/${id}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success(response.data.message || "Added to Favorites ❤️");
        } catch (error) {
            console.error(error);

            toast.error(
                error.response?.data?.message || "Failed to add favorite"
            );
        }
    };

    return (
        <motion.div
            whileHover={{
                y: -10,
                scale: 1.02,
            }}
            transition={{
                duration: 0.3,
            }}
            style={{
                background:
                    "linear-gradient(180deg, rgba(15,23,42,0.96), rgba(8,15,31,0.96))",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(2,6,23,.28)",
                border: "1px solid rgba(148,163,184,.16)",
                maxWidth: "360px",
                width: "100%",
            }}
        >
            {/* Image */}
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <motion.img
                    whileHover={{
                        scale: 1.08,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    src={place.image}
                    alt={place.name}
                    style={{
                        width: "100%",
                        height: "230px",
                        objectFit: "cover",
                    }}
                />

                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,.05))",
                    }}
                />

                {/* Category */}
                <div
                    style={{
                        position: "absolute",
                        top: "15px",
                        left: "15px",
                        background: "rgba(15,23,42,0.88)",
                        padding: "8px 15px",
                        borderRadius: "30px",
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "#f8fafc",
                    }}
                >
                    {place.category}
                </div>
            </div>

            {/* Content */}
            <div
                style={{
                    padding: "22px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            color: "#f8fafc",
                            fontSize: "23px",
                        }}
                    >
                        {place.name}
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            color: "#F59E0B",
                            fontWeight: "700",
                        }}
                    >
                        <Star
                            size={17}
                            fill="#F59E0B"
                        />
                        {place.rating}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "10px",
                        color: "#cbd5e1",
                    }}
                >
                    <MapPin size={17} />

                    {place.district}
                </div>

                <p
                    style={{
                        color: "#94a3b8",
                        lineHeight: "1.6",
                        marginTop: "15px",
                        minHeight: "70px",
                    }}
                >
                    {place.description?.length > 100
                        ? place.description.substring(0, 100) + "..."
                        : place.description}
                </p>

                {/* Buttons */}
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "20px",
                    }}
                >
                    <Link
                        to={`/place/${place._id}`}
                        style={{
                            flex: 1,
                            background: "#2563EB",
                            color: "#fff",
                            textDecoration: "none",
                            textAlign: "center",
                            padding: "13px",
                            borderRadius: "12px",
                            fontWeight: "600",
                            transition: ".3s",
                        }}
                    >
                        View Details →
                    </Link>

                    <motion.button
                        whileTap={{
                            scale: 0.9,
                        }}
                        whileHover={{
                            scale: 1.1,
                        }}
                        onClick={() => addToFavorites(place._id)}
                        style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            border: "none",
                            cursor: "pointer",
                            background: "rgba(239,68,68,0.14)",
                            color: "#fda4af",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Heart size={20} />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export default PlaceCard;