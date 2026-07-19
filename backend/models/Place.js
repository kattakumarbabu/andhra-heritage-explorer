const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        district: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        history: {
            type: String,
            required: true,
        },

        timings: {
            type: String,
            default: "Open 24 Hours",
        },

        entryFee: {
            type: String,
            default: "Free",
        },

        image: {
            type: String,
            required: true,
        },

        maps: {
            type: String,
            required: true,
        },

        rating: {
            type: Number,
            default: 4.5,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Place", placeSchema);