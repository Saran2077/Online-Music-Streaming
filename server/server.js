const express = require('express');
const PORT = 5000;
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password);
        console.log("Hii");
    }
    catch (err) {
        console.log(err.message);
    }
})

app.listen(PORT, () => console.log("Server is listening"))

const mongoDbUrl = "mongodb+srv://root:2580@cluster0.nc30jmt.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0";


mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log("MongoDb connected")
    })
    .catch((err)=> console.log(err))