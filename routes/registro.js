const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.post('/', (req, res, next) => {
    const data_de_cadastro = new Date
    console.log(data_de_cadastro);
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO usuario (Usuario, Senha, Data_de_Cadastro, Email_do_Usuario, Configuracoes_idConfiguracoes) VALUES (?,?,?,?,1)',
            [req.body.usuario, req.body.senha, data_de_cadastro, req.body.email],
            (error, resultado, field) => {

                conn.release();

                if (error) {
                    res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    mensagem: 'Registro feito com sucesso',
                    id_produto: resultado.insertId
                })

            }
        )


    })
});

module.exports = router;