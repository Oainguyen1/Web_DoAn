const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    return res.send('Hello');
});

console.log('process.env.MONGO_DB', process.env.MONGO_DB);

mongoose
    .connect(
        `mongodb+srv://oainguyen:${process.env.MONGO_DB}@cluster0.zduqar8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    )
    .then(() => {
        console.log('Connect DB success!');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(port, () => {
    console.log('Sever is running in port: ', +port);
});
