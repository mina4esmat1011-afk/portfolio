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


const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://portfolio-gqbk-git-main-mina4esmat1011-afks-projects.vercel.app',
    'https://portfolio-gqbk-git-main-mina4esmat1011-afk-projects.vercel.app'
]

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g. mobile apps, curl, Postman)
        if (!origin) return callback(null, true);

        // Allow localhost, any Vercel deployment (*.vercel.app), or explicitly allowed origins
        if (
            allowedOrigins.includes(origin) ||
            origin.startsWith('http://localhost:') ||
            origin.endsWith('.vercel.app')
        ) {
            return callback(null, true);
        }

        return callback(null, false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With']
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