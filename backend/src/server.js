import express from 'express'
import cors from 'cors'
import path from 'path'
import config from './config/config.js'
import aiService from './routes/review.route.js'

const app = express()
const __dirname = path.resolve() 

app.use(cors({
    origin:"http://localhost:5173",
}))

app.use(express.json())

app.use('/api/v1/reviews',aiService)

if(config.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*",(req,res) => {
        res.sendFile(path.join(__dirname , "frontend" , "dist" , "index.html"))
    })
}

app.listen(config.PORT,() => {
    console.log(`Server up and running on PORT: ${config.PORT}`)
})