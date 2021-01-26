const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(express.static("public"))


mongoose.connect(process.env.MONGoDB_URI || "mongodb://localhost:27017/myapp", {
    useNewUrlParser: true
}, (err) => {
    if (err) throw err;
    console.log("Mongo connected")
})

app.get("/api/test", (req, res) => {
    res.json({

        success: true
    })
})

require("./routes/html_routes")(app)
app.listen(PORT, () => {
    console.log(`App is Listening on port: ${PORT}`)
})