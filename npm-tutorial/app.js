const loadsh = require('lodash');
const express = require('express');

console.log(loadsh.last([1,2,3,4]));
const app = express();
const PORT = '3000'; 

app.listen(PORT, _ => {
    console.log(`server running at port: ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, you are at home');
})

