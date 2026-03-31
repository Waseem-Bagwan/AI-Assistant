import express from 'express'
import { generateReply } from '../controllers/review.controller.js'

const router = express.Router()

router.post('/generate-reply',generateReply)

export default router

