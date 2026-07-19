const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Place = require("../models/Place");
const places = require("./placeData");

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Place.deleteMany();

        await Place.insertMany(places);

        console.log("✅ Tourist places imported successfully!");

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();