const db = require("../models")

module.exports = (app) => {
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then(response => {
            res.json({
                data: response
            })
        }).catch(err => {
            res.send(err)
        })
    })

    app.get("/api/workouts", (req, res) => {
        db.Workout.find().then(response => {
            res.json({
                data: response
            })
        }).catch(err => {
            res.send(err)
        })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOne({
            _id: req.params.id
        }, {
            $push: {
                exercises: req.body
            }
        }).then(response =>
            res.json({
                data: response
            }))
    })
}