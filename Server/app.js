import express from 'express'
import { db } from './config/db.js';
import cors from 'cors'
import { userRouter } from './routes/userRouter.js';
import { skillRouter } from './routes/skillRouter.js';
import errorHandler from './middleware/errorHandler.js'
import { projectRouter } from './routes/projectRouter.js';
import cookieParser from 'cookie-parser'

const app = express()
const port = 3000


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

db()

app.use('/userApi',userRouter)
app.use('/skillApi',skillRouter)
app.use('/projectApi',projectRouter)
app.use(errorHandler)

app.get('/', (req, res) => res.send('Hello World!'))
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log(`app is running on port ${port}!`))
}

export default app