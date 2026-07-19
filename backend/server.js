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

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://ornate-souffle-3bc652.netlify.app/",
        ],
        credentials: true,
    })
);
app.use(express.json());

app.use("/api/places", placeRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Andhra Heritage Explorer API Running 🚀",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});