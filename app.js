import express from 'express';
import bodyParser from 'body-parser';

// Set up the express app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/tests', require('./src/test').routes);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});