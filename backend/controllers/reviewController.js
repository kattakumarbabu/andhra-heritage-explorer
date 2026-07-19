const Review = require("../models/Review");

// Add Review
const addReview = async (req, res) => {
    try {
        const review = await Review.create({
            user: req.user.id,
            place: req.body.place,
            rating: req.body.rating,
            comment: req.body.comment,
        });

        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

// Get Reviews for a Place
const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({
            place: req.params.placeId,
        }).populate("user", "name");

        res.json(reviews);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    addReview,
    getReviews,
};