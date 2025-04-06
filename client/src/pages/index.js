const express = require('express')
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

const port = 5000;

app.listen(port, () => { 
    console.log('Server is running on port: $(port)');
})
