const mongoose = require("mongoose");

// const dbString = "mongodb+srv://mukeshpathak345:a6tPTEIjqQyfn1BK@cluster0.nnzazv3.mongodb.net/BMC?retryWrites=true&w=majority&appName=Cluster0";


const dbString = "mongodb+srv://mukeshpathak345:a6tPTEIjqQyfn1BK@cluster0.nnzazv3.mongodb.net/BMC?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbString); // No options needed

const db = mongoose.connection;

db.on("connected", () => {
    console.log("✅ MongoDB connected successfully");
});

db.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
});

