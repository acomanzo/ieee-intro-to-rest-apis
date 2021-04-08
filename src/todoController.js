let todoItems = [];

const todo_index = (req, res) => {
    const response = JSON.stringify(todoItems);
    res.send(response);
};

const todo_create = (req, res) => {
    console.log(req.body);
    todoItems.push(req.body);
    res.send(JSON.stringify(todoItems));
};

const todo_update = (req, res) => {
    console.log(req.body);
    const id = Number(req.params.id);
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === id) {
            todoItems[i].todo = req.body.todo;
            res.send(JSON.stringify(todoItems[i]));
        }
    }

    const error = {
        error: "item not found"
    };
    res.status(400).send(JSON.stringify(error));
};

const todo_delete = (req, res) => {
    console.log(req.body);
    const id = Number(req.params.id);
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === id) {
           const deletedTodo = todoItems.splice(i); 
           res.send(JSON.stringify(deletedTodo));
        }
    }
    const error = {
        error: "item not found"
    };
    res.status(400).send(JSON.stringify(error));
};

module.exports = {
    todo_index, 
    todo_create, 
    todo_update, 
    todo_delete
}