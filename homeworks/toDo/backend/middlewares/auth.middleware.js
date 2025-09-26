const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
const JWT_ISSUER = "todo-app";

exports.requireAuth = (req, res, next) => {
    const auth = req.headers["authorization"] || "";
    const [type, token] = auth.split(" ");
    if (type !== "Bearer" || !token)
        return res.status(401).json({ message: "ERROR_MISSING_OR_INVALID_AUTH_HEADER" });

    try {
        const payload = jwt.verify(token, JWT_SECRET, { issuer: JWT_ISSUER });
        req.user = payload;
        next();
    } catch (e) {
        return res.status(401).json({ message: "ERROR_INVALID_OR_EXPIRED_TOKEN" });
    }
};
