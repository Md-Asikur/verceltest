const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.json({Message:"hello world"})
})
app.listen(6000, ()=> {
    console.log("server startted")
})