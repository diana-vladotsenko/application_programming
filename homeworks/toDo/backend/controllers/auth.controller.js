const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";
const JWT_ISSUER = "todo-app";
const JWT_EXPIRES_IN = "1h";

const USERS = [
    { username: "admin", password: "123", role: "admin" },
    { username: "user", password: "123", role: "user" },
];

exports.login = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    const { username, password } = req.body;

    const u = USERS.find(x => x.username === username && x.password === password);
    if (!u) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { sub: u.username, role: u.role };
    const token = jwt.sign(payload, JWT_SECRET, {
        issuer: JWT_ISSUER,
        expiresIn: JWT_EXPIRES_IN,
    });

    res.json({ token, user: { username: u.username, role: u.role } });
};

exports.ping = (req, res) => {
    res.json({ ok: true, user: req.user });
};
