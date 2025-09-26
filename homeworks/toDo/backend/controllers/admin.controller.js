const { validationResult } = require("express-validator");
const tasksController = require("./tasks.controller");
const { tasks } = require("../data/tasks.store");

exports.read = (req, res) => {
    res.send(tasks.filter(t => !t.deleted));
};

exports.create = (req, res) => { };

exports.update = (req, res) => { };

exports.delete = (req, res) => { };