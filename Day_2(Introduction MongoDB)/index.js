const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req,  res) => {
    res.send("hello world");
});


app.listen(8005, () => {
    console.log("Server is running is 8005")
})