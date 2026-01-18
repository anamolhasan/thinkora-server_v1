import express, { Application } from 'express'

import cors from 'cors'
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';
import { postRouter } from './modules/post/post.route';
import { commentRouter } from './modules/comment/comment.route';
import errorHandler from './middlewares/globalErrorHandler';


const app:Application = express()


app.use(express.json())
app.use(cors({
    origin:process.env.APP_URL || 'http://localhost:3000',
    credentials:true
}))

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use('/posts', postRouter)
app.use('/comments', commentRouter)


app.get('/', (req,res) => {
    res.send(`<h1>THINKORA (চিন্তার আলো) server is running</h1>`)
})

app.use(errorHandler)

export default app