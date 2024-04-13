import { Schema, model } from "mongoose";


const todo = new Schema({
    description: String
});

export default model("todoModel", todo)