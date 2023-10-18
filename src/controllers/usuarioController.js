const usuarioModel = require('../models/usuarioModel');

const getAll = async (_req, res) => {
    const usuarios = await usuarioModel.getAll();
    return res.status(200).json(usuarios);
};

const register = async (req, res) => {
    const registerUsuario = await usuarioModel.register(req.body);
   return res.status(201).json(registerUsuario);
};

// const login = async (req, res) => {
//     const { id } = req.params;

//     await negociacaoModel.deleteNegociacao(id);
//     return res.status(204).json();
// };

// const updateNegociacao = async (req, res) => {
//     const { id } = req.params;

//     await negociacaoModel.updateNegociacao(id, req.body);
//     return res.status(204).json();
// };

module.exports = {
    getAll,
    register
};