const express = require('express')
const{mongoConnet} = require('./databases/config')
const userRoutes = require('./routes/user')

const dotenv = require("dotenv").config()
const cors = require('cors')
mongoConnet()

const app = express()
const port = process.env.PORT || 9000

app.use(cors({
    origin:'*'
}))

app.listen(port,() => console.log("Server Listenig on sport", port))

//Middleware
app.use(express.json());
app.use('/api/v1/user', userRoutes)

//routes
app.get("/",(req,res)=>{
    res.send("Welcome to my api")
})

app.get("*",(req,res)=>{
    res.status(404).json({
        msj: "Not found",
        status: 404
    })
})