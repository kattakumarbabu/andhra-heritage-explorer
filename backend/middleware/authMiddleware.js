const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    console.log("Authorization Header:", req.headers.authorization);

    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")
    ) {
        token = req.headers.authorization.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log("Decoded User:", decoded);

            req.user = decoded;

            next();
        } catch (error) {
            console.log(error);

            return res.status(401).json({
                message: "Invalid Token",
            });
        }
    } else {
        return res.status(401).json({
            message: "Not Authorized",
        });
    }
};

module.exports = protect;