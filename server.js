const express = require ('express')
const connectDB =require('./config/connectDB')

const app = express()

//parse data
app.use(express.json())

//route
app.use("/api",require('./routes.js'))

//connect DB
connectDB();

//run server
const PORT = process.env.PORT || 8080
app.listen(PORT, err => 
    err 
    ? console.log('Server connection failed !' , err) 
    : console.log(`Server is running on http://localhost:${PORT}`))