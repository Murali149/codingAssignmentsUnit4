const express = require("express");
// console.log(express);

const app = express();
// console.log("app: ", app)

app.get("/books", function(req, res){
    res.send([{
                "name": "wings of Fire",
                "author":"APJ"
                },
                {
                  "name":"The Ideological Origins of the American Revolution",
                  "author":"Bernard Bailyn"  
                },
                {
                  "name": "Liberty's Daughters",
                  "author":"Mary Beth Norton"
                }])
    console.log("home page get request")
});



app.listen(3002, () => {

    // console.log([{
    //     "name": "wings of Fire",
    //     "author":"APJ"
    //     },
    //     {
    //       "name":"The Ideological Origins of the American Revolution",
    //       "author":"Bernard Bailyn"  
    //     },
    //     {
    //       "name": "Liberty's Daughters",
    //       "author":"Mary Beth Norton"
    //     }])
    console.log("Listning at port 3002")
})


