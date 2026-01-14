import express, { Application } from 'express'

import cors from 'cors'
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import { postRouter } from './modules/post.route';

const app:Application = express()


app.use(express.json())
app.use(cors({
    origin:process.env.APP_URL,
    credentials:true
}))

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use('/posts', postRouter)


app.get('/', (req,res) => {
    res.send(`<h1>THINKORA (চিন্তার আলো) server is running</h1>`)
})

export default app