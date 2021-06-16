
(async () => {
    
    

    
    //EXEMPLO DE CADASTRO DE USUÁRIO
    const select = require('./functions/cadastrar_usuario.js');
    var costumer = {usuario: "Eduardo", senha: "123456", emailusuario: "edu@hotmail.com"}
    const cadastro = await select.CadastrarUsuario(costumer);
    if (cadastro == 0) {
        console.log("Usuário Cadastro com Sucesso!");
    }

    
    /*EXEMPLO: VERIFICAR LOGIN*/
    const verificarlogin = require('./functions/verificarlogin.js');
    var resultado;
    var param = {usuario: "teste", senha: '123456'}

    resultado = await verificarlogin.VerificarLogin(param);
    console.log('Resultado Final: ' + resultado);


    /*Imprime Resultado*/
    var str;
    switch (resultado) {
        case 0:
            str = 'Usuário Logado com Sucesso!';
            break;
        case 1:
            str = 'Usuário Incorreto!';
            break;
        case 2:
            str = 'Senha Incorreta!';
            break;
        case 3:
            str = 'ERROR';
            break;
    }
    console.log(str);
})();