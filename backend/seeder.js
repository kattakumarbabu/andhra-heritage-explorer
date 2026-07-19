const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Place = require("./models/Place");

dotenv.config();

connectDB();

const places = [
    {
        name: "Kanaka Durga Temple",
        district: "Vijayawada",
        category: "Temple",
        description:
            "One of the most famous temples dedicated to Goddess Kanaka Durga.",
        history:
            "Located on Indrakeeladri Hill, the temple attracts millions of devotees every year.",
        timings: "4:00 AM - 10:00 PM",
        entryFee: "Free",
        image:
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200",
        maps:
            "https://www.google.com/maps/search/?api=1&query=Kanaka+Durga+Temple+Vijayawada",
        rating: 4.8,
    },

    {
        name: "RK Beach",
        district: "Visakhapatnam",
        category: "Beach",
        description:
            "A beautiful beach on the Bay of Bengal, popular with tourists.",
        history:
            "One of Visakhapatnam's iconic attractions known for its scenic coastline.",
        timings: "Open 24 Hours",
        entryFee: "Free",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
        maps:
            "https://www.google.com/maps/search/?api=1&query=RK+Beach+Visakhapatnam",
        rating: 4.7,
    },

    {
        name: "Belum Caves",
        district: "Kurnool",
        category: "Cave",
        description:
            "Second longest natural cave system in the Indian subcontinent.",
        history:
            "Known for its impressive underground passages and formations.",
        timings: "10:00 AM - 5:00 PM",
        entryFee: "₹70",
        image:
            "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200",
        maps:
            "https://www.google.com/maps/search/?api=1&query=Belum+Caves",
        rating: 4.6,
    },

    {
        name: "Araku Valley",
        district: "Visakhapatnam",
        category: "Hill Station",
        description:
            "A picturesque hill station famous for coffee plantations and valleys.",
        history:
            "Located in the Eastern Ghats and home to tribal culture.",
        timings: "Open 24 Hours",
        entryFee: "Free",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200",
        maps:
            "https://www.google.com/maps/search/?api=1&query=Araku+Valley",
        rating: 4.9,
    },
];

const importData = async () => {
    try {
        await Place.deleteMany();

        await Place.insertMany(places);

        console.log("✅ 4 Places Imported Successfully");

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

importData();