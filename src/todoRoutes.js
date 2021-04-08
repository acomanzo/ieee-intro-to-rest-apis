const express = require('express');
const todoController = require('./todoController');

const router = express.Router();

router.get('/', todoController.todo_index);

router.post('/', todoController.todo_create);

router.patch('/:id', todoController.todo_update);

router.delete('/:id', todoController.todo_delete);

module.exports = router;