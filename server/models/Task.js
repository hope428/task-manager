const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    completed: Boolean,
    description: String,
    importance: {
        type: Number,
        required: true
    }
})

const Task = model('Task', taskSchema)

module.exports = Task;