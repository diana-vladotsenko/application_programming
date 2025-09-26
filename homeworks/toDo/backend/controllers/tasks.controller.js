const { validationResult } = require("express-validator");
const tasks = [
    {
        id: 1,
        content: "Clean the house",
        deleted: false,
    },
    {
        id: 2,
        content: "Go grocery shop",
        deleted: false,
    },
];



exports.read = (req, res) => {
    res.send(tasks);
};

exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation error", errors: errors.array() });
    }

    const { task } = req.body;
    const newTask = {
        id: tasks.length ? Math.max(...tasks.map(t => Number(t.id))) + 1 : 1,
        content: task,
        deleted: false,
    };
    tasks.push(newTask);
    return res.status(201).json(newTask);
};

exports.update = (req, res) => { };

exports.delete = (req, res) => { };