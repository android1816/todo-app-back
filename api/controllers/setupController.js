var Todos = require("../models/todoModel");

module.exports = function(app){
    app.get('/api/setupTodos', function(req,res){
        var seedTodos = [
            {
                text: "Hoc Node.js",
                isDone: false
            },
            {
                text: "Hoc React.js",
                isDone: false
            },
            {
                text: "Build App",
                isDone: false
            },
        ];
        
        Todos.create(seedTodos, function(err, result) {
            if(err) console.log("errrrrr", err);
            else res.send(result);
        });
    })
}