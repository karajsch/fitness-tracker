const db = require("../models")
const router = require("express").Router()


router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(response => {
        res.json({
            data: response
        })
    }).catch(err => {
        res.send(err)
    })
})

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(e => {
                total += e.duration;
            });
            workout.totalDuration = total;

        });

        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
})

router.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate({
        _id: req.params.id
    }, {
        $inc: {
            totalDuration: req.body.duration
        },
        $push: {
            exercises: req.body
        }
    }, {
        new: true
    }).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

///not sure about this part right here!
router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({}).then(response => {
        console.log("All of the workouts!");
        console.log(response);

        res.json(response);
    }).catch(err => {
        res.json(err);
    });

});

module.exports = router