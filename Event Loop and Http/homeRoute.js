const express = require("express");
// console.log(express);

const app = express();
// console.log("app: ", app)

app.get("/books", function(req, res){
    res.send("hello")
})

app.listen(4000, () => {
    console.log("hello")
})