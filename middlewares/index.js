const  express  = require("express");

const app = express();

app.get("users", (req, res)=>{
    console.log("users");
    return res.send({route: "/users"})
})

app.get("/students", (req, res)=>{
    console.log("students");
    return res.send({route: "/students"})
})

app.listen(1303, () => {
    console.log("Listning at port 1303")
})