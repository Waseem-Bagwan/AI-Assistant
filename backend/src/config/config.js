import dotenv from 'dotenv'
dotenv.config()

if(!process.env.OPENAI_API_KEY){
    throw new Error("Invalid or Expire API-KEY in the environment")
}

const config = {
    PORT: process.env.PORT || 5000,
    API_KEY: process.env.OPENAI_API_KEY,
    NODE_ENV: process.env.NODE_ENV

}

export default config