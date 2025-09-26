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



exports.create = (req, res) => { };

exports.read = (req, res) => {
    res.send(tasks);
};

exports.update = (req, res) => { };

exports.delete = (req, res) => { };