const mongoose = require("mongoose");

const dbString =
    "mongodb+srv://mukeshpathak345:tUSN9lUO6FvjRRQe@cluster0.rt1bkg4.mongodb.net/myEducation?retryWrites=true&w=majority&appName=Cluster0";

mongoose
    .connect(dbString)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log("MongoDB Not Connected", error);
    });

// create a schema with mongoose

const coursesSchema = new mongoose.Schema({
    name: String,
    creator: String,
    ratings: Number,
    isPublished: Boolean,
    releaseDate: {
        type: Date,
        default: Date.now()
    }
});

// model for course

let CourseModel = mongoose.model("Course", coursesSchema);

// async function createCourse() {
//   let newCourse = new CourseModel({
//     name: "Web Development",
//     creator: "Mukesh Pathak",
//     ratings: 4.5,
//     isPublished: true
//   });

//   await newCourse.save();

// }


// createCourse();


// userSchema 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const User = mongoose.model("User", userSchema);


// async function createUser() {
//     const newUser = new User({
//         name: "Mukesh Pathak",
//         email: "test@test.com",
//         password: "Mike@1234567890",
//     })
//     await newUser.save();
// }

// createUser();

// 685504e0fb1cb3173e8d6f04

async function updateCourse(id) {
    const course = await CourseModel.findById(id);

    if(!course) {
        console.log("No Course Fouund");
        return;
    }
    

    course.name = "Full Stack Web Development";

    await course.save();

    console.log(course);
}


// updateCourse("685504e0fb1cb3173e8d6f04")



async function deleteCourse(id) {
    const course = await CourseModel.findByIdAndDelete(id);

    if(!course) {
        console.log("No Course Fouund");
        return;
    }
    console.log("Course Deleted");
}

deleteCourse("685504e0fb1cb3173e8d6f04")