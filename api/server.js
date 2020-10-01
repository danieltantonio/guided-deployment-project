const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).json({ message: 'It works!' });
});

server.get('/api/test', (req,res) => {
    res.status(200).json({ message: "Routing works" });
});

module.exports = server;