const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://anologiconTinder:anologiconTinder@todolist-wmz4g.mongodb.net/omnistackTinder?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json())
server.use(routes);

server.listen(7100);

