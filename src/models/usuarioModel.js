const connection = require('./connection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getAll = async () => {
    const [usuario] = await connection.execute('SELECT * FROM Usuarios');
    return usuario;
};

const register = async (usuario) => {
    const { nome, email, senha } = usuario;
    const hash = await bcrypt.hash(senha, 10)
    const params = [nome, email, hash];
    const query = 'INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)';
    const [registerUsuario] = await connection.query(query, params);
    return { insertId: registerUsuario.insertId,
            nome: registerUsuario.nome,
            email: registerUsuario.email
    };
};


module.exports = {
    getAll,
    register
};