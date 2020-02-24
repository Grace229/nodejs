// requiring express
const express = require("express");
// initialize my app
const app = express();
// initialize the PORT
const PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
    console.log(`Server is running at port: ${PORT}`)
});
app.get("/", (req, res) => {
    res.send("my first nodejs connection");
});