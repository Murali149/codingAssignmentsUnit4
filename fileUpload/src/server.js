const app = require("./index")
const connect = require("./configs/db")

app.listen(5000, async function (){
    try {
        // ./configs/db
        await connect();
        console.log("listning at port 5000");
    } catch (error) {
        console.log(error);
    }
})