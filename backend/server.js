import express from'express'
import dotenv from'dotenv'
import connectDB from "./config/db.js"
import morgan from 'morgan'
import cors from 'cors'

//routes
import userRoute from "./routes/userRoutes.js"
import bookRoute from './routes/bookRoutes.js'

//app
const app =express()

//configurations
dotenv.config()

//cors
app.use(cors())
//connection
connectDB()

app.use(express.json())
app.use("/api/users",userRoute)
app.use("/api/books" ,bookRoute)

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.get("/" ,(req,res)=>{
    res.send("hello")
})

//port
const PORT =process.env.PORT || 5000
app.listen(PORT , console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`))