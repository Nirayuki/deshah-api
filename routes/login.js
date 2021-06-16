const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM mydb.usuario;',
            (error, resultado, field) => {
                conn.release();
                const response = resultado.map(item => {
                    return {
                        usuario: item.Usuario,
                        senha: item.Senha
                    }
                })
                console.log(response)
              return res.status(200).send(response)
            }
        )
    })
});

module.exports = router;