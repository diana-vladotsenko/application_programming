const { validationResult } = require("express-validator");
const { tasks } = require("../data/tasks.store");

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

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400);

    const id = Number(req.params.id);
    const { content } = req.body;
    const task = tasks.find((t) => t.id === id);
    if (!task) return res.status(404).json({ error: "ERROR_TASK_DOES_NOT_EXIST_WITH_THIS_ID" });

    if (typeof content === "string") {
        task.content = content;
    }
    return res.json(task);
};

exports.delete = (req, res) => {
    const id = Number(req.params.id);
    const idx = tasks.findIndex(t => Number(t.id) === id);
    if (idx === -1) return res.status(404).json({ message: "ERROR_TASK_NOT_FOUND" });

    tasks[idx].deleted = true;
    res.status(204).send();
};