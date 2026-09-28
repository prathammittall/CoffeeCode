import express from "express"
import dotenv from "dotenv/config"

const app = express()
const PORT = process.env.PORT

app.use("/health", (req, res)=>{
    res.json({
        status: 200,
        message: "ok"
    })
})

app.use("/", (req, res)=>{
    res.send("Hello, Welcome to CoffeeCode!")
})


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})