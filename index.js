const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Zinius server is running...");
});

// Categories
const categories = require("./data/categories.json");
app.get("/categories", (req, res) => {
    res.send(categories);
});

// Courses
const courses = require("./data/courses.json");
app.get("/courses", (req, res) => {
    res.send(courses);
});

// Single course
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find((course) => course.id === id);
    res.send(singleCourse);
});

// Single Course Category
app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    const singleCategory = courses.filter((category) => category.category_id === id);
    res.send(singleCategory);
});

app.listen(port, () => {
    console.log(`Zinius server is running on port: ${port}`);
});
