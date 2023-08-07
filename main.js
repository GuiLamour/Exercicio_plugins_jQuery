$(document).ready(function() {

    $("#telefone").mask("(00) 0000-0000");
    $("#cpf").mask("000.000.000-00");
    $("#cep").mask("00000-000");

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            endereco: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nome: "Por favor, insira o nome completo",
            email: "Por favor, insira um e-mail válido",
            telefone: "Por favor, insira o telefone",
            cpf: "Por favor, insira um CPF",
            endereco: "Por favor, insira o endereço",
            cep: "Por favor, insira o CEP"
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            } 
        }
    })
});
