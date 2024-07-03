const express = require("express");
const dotenv = require("dotenv");
dotenv.config()

const app = express()
const port = process.env.PORT || 3002

app.get('/', (req, res) => {
    return res.send('Hello');
})

app.listen(port, () =>{
    console.log('Sever is running in port: ', + port)
})
