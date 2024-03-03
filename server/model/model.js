const mongoose = require('mongoose');

const express = require('express');

const mongoDbUrl = "mongodb+srv://root:2580@cluster0.nc30jmt.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log("MongoDb connected")
    })
    .catch((err)=> console.log(err))