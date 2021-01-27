const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
        default: new Date().toLocaleDateString()
    },
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
}, {
    timestamps: true
})


const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;