const express = require("express")
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })
const PORT=process.env.PORT||7000
const app = express()
app.get("/", (req, res) => {
    res.json({Message:"hello world"})
})
app.listen(PORT, ()=> {
    console.log(`SERVER IS START AT:${PORT}`)
})