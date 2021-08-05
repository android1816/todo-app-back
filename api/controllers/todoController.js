var Todos = require("../models/todoModel");
var x = 0;
function getTodos(res) {
  Todos.find(function (err, todos) {
    if (err) res.send(err);
    else {
      res.send(todos);
    }
  });
}

module.exports = function (app) {
  // Read List Todos
  app.get("/api/todos", function (req, res) {
    getTodos(res);
  });

  // get by id
  app.get("/api/todos/:id", function (req, res) {
    Todos.findById({ _id: req.params.id }, function (err, todo) {
      if (err) res.send(err);
      else res.send(todo);
    });
  });


  //post 
  app.post("/api/todos", function (req, res) {
      var todo = {
          text: req.body.text,
          isDone: req.body.isDone,
      }
      Todos.create(todo, function (err, todo) {
          if(err) res.send(err);
          else getTodos(res)
      })
  })
  // update

  app.put("/api/todos", function (req, res) {
    if (!req.body.id) {
      return res.send(500);
    } else {
      Todos.update(
        {
          _id: req.body.id,
        },
        {
          text: req.body.text,
          isDone: req.body.isDone,
        },
        function (err, todo) {
          if (err) res.send(err);
          else {
            getTodos(res);
          }
        }
      );
    }
  });

  //delete

  app.delete("/api/todos/:id", function (req, res) {
    Todos.remove(
      {
        _id: req.params.id,
      },
      function (err, todo) {
        if (err) return res.send(err);
        else getTodos(res);
      }
    );
  });
};
