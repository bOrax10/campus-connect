const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5000;
const dbName = "campus-connect";
const Course = require("./models/CourseModel");

//middleware to parse json
app.use(express.json());
mongoURI =
    "mongodb+srv://atharvadixit104:ZyAAE5E8KIpQlx61@lockoutbotad.fcx7gto.mongodb.net/campus-connect?retryWrites=true&w=majority";

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Connected to MongoDB");

        // List collections in the "campus-connect" database
        const collectionsList = await mongoose.connection.db.listCollections().toArray();
        console.log("Collections:");
        collectionsList.forEach((collection) => console.log(`- ${collection.name}`));
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const sampleCourseData = {
    courseCode: "ME101",
    courseName: "Engineering Mechanics",
    ratingCount: 452,
    rating: 3.4,
    reviews: [
        {
            author: "Aravind S",
            username: "aravind_s",
            content:
                "At Pluralsight, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow.",
            time: "1hr ago",
            likes: 10,
            dislikes: 0,
            liked: false,
            disliked: false,
        },
        {
            author: "John D",
            username: "john_d",
            content: "Great course, very detailed and well explained.",
            time: "2hrs ago",
            likes: 5,
            dislikes: 1,
            liked: false,
            disliked: false,
        },
    ],
};

// Function to insert sample data
const insertSampleData = async () => {
    try {
        await Course.deleteMany({}); // Clear existing data if any
        const course = new Course(sampleCourseData);
        await course.save();
        console.log("Sample data inserted successfully");
    } catch (err) {
        console.error("Error inserting sample data:", err);
    } finally {
        mongoose.connection.close();
    }
};

// Run the function to insert data
insertSampleData();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
