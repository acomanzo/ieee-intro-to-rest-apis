const express = require('express');
const todoRoutes = require('./todoRoutes');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/todo', todoRoutes);

app.get('/', (req, res) => {
    res.send('hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});