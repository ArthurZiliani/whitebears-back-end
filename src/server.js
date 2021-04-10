/* eslint-disable no-unused-vars */
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://rhels:031198@cluster0-shard-00-00.mugza.mongodb.net:27017/cadastro-usuario-familia?authSource=admin&replicaSet=atlas-5cwkp6-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('MongoDB CONECTADO com sucesso!')
    }
});


app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);



app.listen(port, function () {
    console.log(`Server runing on port ${port}`)


})