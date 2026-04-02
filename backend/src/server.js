import express from 'express'
import cors from 'cors'
import path from 'path'
import config from './config/config.js'
import aiService from './routes/review.route.js'

const app = express()

app.use(cors({
    origin:"https://ai-assistant-beta-flax.vercel.app/",
    credentials: true
}))

app.use(express.json())

app.use('/api/v1/reviews',aiService)


app.listen(config.PORT,() => {
    console.log(`Server up and running on PORT: ${config.PORT}`)
})