const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://anologiconTinder:anologiconTinder@todolist-wmz4g.mongodb.net/omnistackTinder?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || 7100);

