import express from 'express';
import db from "../../data/db";

const app = express.Router();

app.get('/test', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

module.exports = app;