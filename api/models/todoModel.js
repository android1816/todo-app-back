var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    text: String,
    isDone: Boolean
})

var Todos = mongoose.model("Todos", todoSchema)
console.log("Todos 2", Todos)
module.exports = Todos;