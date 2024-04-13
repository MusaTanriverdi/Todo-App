import 'dotenv/config'
import express from "express"
import connectMongoDb from "./mongoose.js"
import todoModel from './models/todo.js'

const app = express()

app.use(express.json())
connectMongoDb()

app.get('/', async function (req, res) {
    const todos = await todoModel.find()
    res.send(todos)
})

app.post('/', async function (req, res) {
    console.log(req.body)
    const { description } = req.body

    const createdTodo = await todoModel.create({ description: description })
    res.send(createdTodo)
})

app.delete('/:id', async function (req, res) {
    const id = req.params.id

    const createdTodo = await todoModel.deleteOne({ _id: id })
    res.send(createdTodo)
})

app.listen(3000)