const express = require('express')
const router = express.Router()
const{
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
} = require("../controllers/workoutController")

//This is to get all workouts
router.get('/', getWorkouts)

//This is to get single workout
router.get('/:id', getWorkout)

//This is to POST a workout
router.post('/', createWorkout)


//This is to DELETE a workout
router.delete('/:id',deleteWorkout)

//This is to UPDATE a workout
router.patch('/:id', updateWorkout)
module.exports = router