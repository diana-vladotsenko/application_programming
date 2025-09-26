const tasksRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now());
    next();
};

const tasksGetRouteMiddleware = (req, res, next) => {
    console.log("GET middleware");
    next();
};

module.exports = { tasksRouteMiddleware, tasksGetRouteMiddleware };