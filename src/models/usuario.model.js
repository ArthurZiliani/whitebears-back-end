const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({

    nome_usuario: String,
    idade: Number,
    senha: String,
    discord: String,
    familia: String,

}, {

    timestamps: true

})



const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;