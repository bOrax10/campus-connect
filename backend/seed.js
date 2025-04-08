const mongoose = require("mongoose");
const Course = require("./models/CourseModel");
const Post = require("./models/postsModel");
const { post } = require("./models/ReviewModel");

// Connect to MongoDB
mongoURI =
    "mongodb+srv://atharvadixit104:ZyAAE5E8KIpQlx61@lockoutbotad.fcx7gto.mongodb.net/campus-connect?retryWrites=true&w=majority";
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Sample course data

const dummyPosts = [
    {
        author: "John Doe",
        username: "john.doe",
        time: "2hr ago",
        avatar: "",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
        tags: ["Software", "AI"],
        likes: 5,
        liked: false,
        comments: [
            {
                id: 1,
                author: "Jane Smith",
                username: "jane.smith",
                time: "1hr ago",
                comment: "Great post! Thanks for sharing.",
                replies: [
                    {
                        id: 1,
                        author: "John Doe",
                        username: "john.doe",
                        time: "30min ago",
                        reply: "Thanks Jane!",
                        avatar: "",
                    },
                ],
            },
            {
                id: 2,
                author: "Tame Impala",
                username: "t.impala",
                time: "1hr ago",
                comment:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu euismod mauris. Nulla viverra tempor massa, vitae dapibus augue consectetur.",
                replies: [],
            },
        ],
    },
    {
        author: "John Doe",
        username: "johndoe",
        time: "2023-06-14T10:00:00Z",
        avatar: "https://example.com/avatar1.jpg",
        content: "This is the first post content.",
        tags: ["introduction", "firstpost"],
        likes: 10,
        comments: [],
    },
    {
        author: "Jane Smith",
        username: "janesmith",
        time: "2023-06-15T12:30:00Z",
        avatar: "https://example.com/avatar2.jpg",
        content: "This is another post content.",
        tags: ["update", "secondpost"],
        likes: 20,
        comments: [],
    },
];

// Function to insert sample data
const insertSampleData = async () => {
    try {
        await Post.deleteMany({}); // Clear existing data if any
        await Post.insertMany(dummyPosts);
        console.log("Sample data inserted successfully");
    } catch (err) {
        console.error("Error inserting sample data:", err);
    } finally {
        mongoose.connection.close();
    }
};

const retrieveAllPosts = async () => {
    try {
        const posts = await Post.find({});
        console.log("All Posts:", JSON.stringify(posts, null, 2));
        console.log(posts[0]._id);
    } catch (err) {
        console.error("Error retrieving posts:", err);
    } finally {
        mongoose.connection.close();
    }
};

// Run the function to insert data
insertSampleData();
retrieveAllPosts();
