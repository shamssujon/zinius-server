const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Zinius server is running...");
});

const categories = require("./data/categories.json");
app.get("/categories", (req, res) => {
    res.send(categories);
});

const courses = require("./data/courses.json");
app.get("/courses", (req, res) => {
    res.send(courses);
});

app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(course => course.id === id);
    res.send(singleCourse)
});

app.listen(port, () => {
    console.log(`Zinius server is running on port: ${port}`);
});
