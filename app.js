import express from 'express';
import bodyParser from 'body-parser';
import db from './data/db';

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get all todos
app.get('/api/v1/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});