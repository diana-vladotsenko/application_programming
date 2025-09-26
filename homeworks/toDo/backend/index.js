const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const taskRoutes = require("./routes/tasks.routes");

app.use(express.json());
app.use(cors());

app.use("/tasks", taskRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

