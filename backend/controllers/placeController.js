const Place = require("../models/Place");

// Get all places
const getPlaces = async (req, res) => {
    try {
        const places = await Place.find();
        res.status(200).json(places);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Get single place
const getPlaceById = async (req, res) => {
    try {
        const place = await Place.findById(req.params.id);

        if (!place) {
            return res.status(404).json({
                message: "Place not found",
            });
        }

        res.status(200).json(place);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getPlaces,
    getPlaceById,
};