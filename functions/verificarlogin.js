/*
Função para verificar usuários para login

Deve-se informar os parâmetros na seguinte ordem:
- login
- senha

A função retorna um valor. Cada valor tem um significado
0 - Usuário e Senha corretos;
1 - Usuário Incorreto;
2 - Senha Incorreta;
3 - ERROR
*/
async function VerificarLogin(param) {
    const db = require("../db.js");
    const conn = await db.connect();
    const param_usuario = param.usuario;
    const param_senha = param.senha;
    const param_usuario_senha = {usuario: param.usuario, senha: param.senha};
    var sql;
    var verificacao = 3;

    /*Usuário Não encontrado*/
    sql = 'SELECT * FROM usuario WHERE usuario = ?';
    var [result_query] = await conn.query(sql, param_usuario);
    if (result_query.length < 1) return 1;

    /*Senha Incorreta*/
    sql = 'SELECT * FROM usuario WHERE usuario = ? AND senha = ' + param_senha;
    var [result_query_senha] = await conn.query(sql, param_usuario);
    if (result_query_senha.length < 1) {
        return 2;
    } else {

        /*Usuário Logado com Sucesso!*/
        return 0;
    }

    /*IMPRIME RESULTADO*/
    console.log('Total de Linhas: ' + result_query.length);
    for (i = 0; i < result_query.length; i++) {
        console.log('Linha: ' + JSON.stringify(result_query[i]));
    }




    return verificacao;
}

module.exports = {VerificarLogin};