require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const taskRoutes = require("./routes/tasks.routes");
const adminRoutes = require("./routes/admin.routes");
const authRoutes = require("./routes/auth.routes");

app.use(express.json());
app.use(cors());


app.use("/tasks", taskRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

