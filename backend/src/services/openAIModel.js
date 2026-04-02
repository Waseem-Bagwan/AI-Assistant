import OpenAI from "openai";
import config from '../config/config.js'

const client = new OpenAI({
    apiKey: config.API_KEY
})

export default client