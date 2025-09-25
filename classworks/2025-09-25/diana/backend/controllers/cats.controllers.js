const { validationResult } = require("express-validator");

const cats = [
    {
        id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
        name: "Meow",
        createdAt: 1727098800585,
        updatedAt: null,
        deleted: false,
    },
    {
        id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
        name: "Kitty",
        createdAt: 1727098952739,
        updatedAt: null,
        deleted: false,
    },
];

exports.create = (req, res) => {
    //res.send(req.params);
    const { name: Myname, school } = req.body;

    console.log(Myname, school);
    res.sendStatus(201);
};

exports.read = (req, res) => {
    res.send(cats);
};

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400);

    const { id } = req.params;
    const { name } = req.body;
    const cat = cats.find((c) => c.id === id);
    if (!cat) return res.status(404).json({ error: "ERROR_CAT_DOES_NOT_EXIST_WITH_THIS_ID" });

    if (typeof name === "string") {
        cat.name = name;
    }
    return res.json(cat);
};

exports.delete = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400);

    const { id } = req.params;
    const cat = cats.find((c) => c.id === id);
    if (!cat) return res.status(404).json({ error: "ERROR_CAT_DOES_NOT_EXIST_WITH_THIS_ID" });

    cat.deleted = true;
    return res.status(204).send();
};

