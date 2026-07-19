const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const placeRoutes = require("./routes/placeRoutes");
const authRoutes = require("./routes/authRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

dotenv.config();

connectDB();

const app = express();

// Allowed Frontend URLs
const allowedOrigins = [
    "http://localhost:5173",
    "https://andhra-heritage-explorer.netlify.app",
];

// CORS
app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests without origin (Postman, mobile apps)
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error(`CORS Error: ${origin} is not allowed`));
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

// Routes
app.use("/api/places", placeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Andhra Heritage Explorer API Running 🚀",
    });
});

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

// Start Server
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});