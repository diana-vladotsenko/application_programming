const adminRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
};

const adminGetRouteMiddleware = (req, res, next) => {
    console.log("GET admin middleware");
    next();
};

module.exports = { adminRouteMiddleware, adminGetRouteMiddleware };