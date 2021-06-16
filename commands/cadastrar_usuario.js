const db = require("../db");

async function CadastrarUsuario(customer){
    /*
    ---Função para cadastro de usuários---

    Return 0 = Cadastrado com Sucesso.
    Return 1 = Nome de Usuário já existente
    Return 2 = Email já existente
    Return 3 = Error

    Parâmetros necessários
    - usuario
    - senha
    - emailusuario
    */

    const conn = await db.connect();
    var sql;
    var result = 3;

/*
    //verifica se já existe este usuário cadastrado - Return 1
    sql = 'SELECT * FROM usuario WHERE usuario = ?;';
    var result = conn.query(sql, customer.usuario);
    if (result.)
*/



    //Cadastra Usuário - Return 0
    sql = 'INSERT INTO usuario(usuario, senha, data_de_cadastro, email_do_usuario) VALUES (?,MD5(?),?,?);';
    var DataCadastro = new Date();
    const values = [customer.usuario, customer.senha, DataCadastro, customer.emailusuario];
    await conn.query(sql, values, function (error){
        if(error) return console.log(error);
    });
    result = 0;
    return result;
}
module.exports = {CadastrarUsuario}