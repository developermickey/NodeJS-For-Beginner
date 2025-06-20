const express = require("express");

const app = express();

app.use(express.json())

const courses = [
  { id: 1, name: "Java" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "Python" }
];

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  let courseName = courses.find(
    (course) => course.name.id === parseInt(req.params.id)// (course) => course.name.toLowerCase() === req.params.name.toLowerCase()
  );

  console.log(courseName);

  if (!courseName) {
    return res.status(404).json({
      message: "404 Page Not Found",
    });
  }

  res.send(courseName);
});


// Post Method

app.post("/courses", (req, res) => {
    const course = {
        id: req.body.id,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses);
})



// update someting 


app.put("/courses/:id", (req, res) => {
    let courseName = courses.find((course) => course.id === parseInt(req.params.id));
     courseName.name =  req.body.name
    res.send(courseName);
})


app.delete("/courses/:id", (req, res) => {
    let courseName = courses.find((course) => course.id === parseInt(req.params.id));


    const index = courses.indexOf(courseName);

    courses.splice(index, 1);
    res.send(courseName);
})



app.listen(8005, () => {
  console.log("Server is running is 8005");
});
