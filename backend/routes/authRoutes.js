const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    register,
    login,
    addFavorite,
    getFavorites,
} = require("../controllers/authController");

// Authentication
router.post("/register", register);
router.post("/login", login);

// Favorites
router.post("/favorites/:placeId", protect, addFavorite);
router.get("/favorites", protect, getFavorites);

module.exports = router;