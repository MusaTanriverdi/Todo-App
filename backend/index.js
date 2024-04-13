import 'dotenv/config'
import express from "express"
import connectMongoDb from "./mongoose.js"
import todoModel from './models/todo.js'

const app = express()
connectMongoDb()

app.get('/', async function (req, res) {
    const todos = await todoModel.find()
    res.send(todos)
})

app.listen(3000)