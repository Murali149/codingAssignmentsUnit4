const express = require("express");
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home Page get ")
    console.log("Home Page get request");
});

app.post("/", (req, res) => {
    console.log("req.body:",req.body)
    console.log("Home Page post response")
});

app.listen(1235, () => {
    console.log("Listning at port 1234")
})