import OpenAI from "openai";
import config from '../config/config.js'

const client = new OpenAI({
    apiKey: config.apiKey
})

export default client