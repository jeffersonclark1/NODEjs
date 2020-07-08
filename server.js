const express = require('express');
// const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir')

// Iniciando o APP
const app = express();
app.use(express.json());
// app.use(cors()); // Publicar API

// Iniciando Mongo
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);

requireDir('./src/Models');

app.use('/api', require('./src/routes'));

app.listen(3001);