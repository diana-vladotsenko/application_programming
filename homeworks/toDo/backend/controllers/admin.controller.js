const { tasks } = require("./tasks.controller.js");
const { validationResult } = require("express-validator");

exports.read = (req, res) => {
    const { onlyDeleted } = req.query;

    let result = tasks;

    if (onlyDeleted === "true") {
        result = tasks.filter(t => t.deleted === true);
    }

    res.json(result);
};

exports.create = (req, res) => { };

exports.update = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.body;
    const task = tasks.find(t => String(t.id) === String(id));
    if (!task) return res.status(404).json({ message: "ERROR_TASK_NOT_FOUND" });

    task.deleted = !task.deleted;
    res.json({ id: task.id, deleted: task.deleted });
};
exports.delete = (req, res) => { };
