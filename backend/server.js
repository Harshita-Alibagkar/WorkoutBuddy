require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose")
const app = express();
const workoutroutes = require('./routes/workouts')

//middleware
app.use(express.json());//to take input in the form of json from user for POST and PATCH
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//to react to requests
//routes
app.use('/api/workouts', workoutroutes)
//when user calls- "'./api/workouts'", it fires - 'workoutroutes'

//connecting to Db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen certain PORT no. for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to database and Listening on port ", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


