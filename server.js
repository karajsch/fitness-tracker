const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(express.static("public"))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if (err) throw err;
    console.log("Mongo connected")
})

app.get("/api/test", (req, res) => {
    res.json({
        success: true
    })
})


app.use(require("./routes/api_routes.js"));
app.use(require("./routes/html_routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});