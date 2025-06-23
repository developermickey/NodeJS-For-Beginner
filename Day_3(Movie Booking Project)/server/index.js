const express = require("express");
const app = express();
const cors = require("cors");
const dbConfig = require("./config/dbConfig")
const userRoutes = require("./routes/userRoutes")

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/api/users/", userRoutes);


app.listen(8082, () => {
    console.log("Server is running 8082")
})