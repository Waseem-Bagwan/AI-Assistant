import express from 'express'
import config from './config/config.js'
import aiService from './routes/review.route.js'

const app = express()

app.use(express.json())

app.use('/api/v1/review',aiService)

app.listen(config.PORT,() => {
    console.log(`Server up and running on PORT: ${config.PORT}`)
})