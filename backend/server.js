import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

dotenv.config()
import cookieParser from 'cookie-parser'
const port = process.env.PORT || 5000

import userRoutes from './routes/userRoutes.js'

// Connect DB
connectDB()

const app = express()

// Request Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware cookie-parser
app.use(cookieParser())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => res.send('API running, Server is ready'))

// Middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
