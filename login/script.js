$(document).ready(function() {

    $('#cep').mask('00000-000');
    
    $('#cadastroForm').on('submit', function(event) {
        event.preventDefault();

        const nome = $('#nome').val();
        const email = $('#email').val();
        const idade = $('#idade').val();
        const cep = $('#cep').val();

        const dados = new DadosFormulario(nome, email, idade, cep);

        $('#dados').html(`
            <p><strong>Nome:</strong> ${dados.nome}</p>
            <p><strong>E-mail:</strong> ${dados.email}</p>
            <p><strong>Idade:</strong> ${dados.idade}</p>
            <p><strong>CEP:</strong> ${dados.cep}</p>
        `).hide().fadeIn(1000);

        saveReportLocal(dados);
    });

    $('#limpar').on('click', function() {
        $('input').val('');
        $('#dados').html('');
    });

    $('#nome').on('invalid', validateNameField);
    $('#email').on('invalid', validateEmailField);
    $('#idade').on('invalid', validateIdadeField);
    $('#cep').on('invalid', validateCepField);
});

class DadosFormulario {
    constructor(nome, email, idade, cep) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.cep = cep;
    }
}

function validateNameField(){
    const nameInput = document.getElementById('nome');
    if (nameInput.validity.valueMissing){
        nameInput.setCustomValidity('O campo é obrigatório');
        return false;
    }
    nameInput.setCustomValidity('');
    return true;
}

function validateEmailField(){
    const emailInput = document.getElementById('email');
    if (emailInput.validity.valueMissing){
        emailInput.setCustomValidity('O campo é obrigatório');
        return false;
    }
    emailInput.setCustomValidity('');
    return true;
}

function validateIdadeField(){
    const idadeInput = document.getElementById('idade');
    if (idadeInput.validity.valueMissing){
        idadeInput.setCustomValidity('O campo é obrigatório');
        return false;
    }
    idadeInput.setCustomValidity('');
    return true;
}

function validateCepField(){
    const cepInput = document.getElementById('cep');
    if (cepInput.validity.valueMissing){
        let error = 'O campo é obrigatório';
        cepInput.setCustomValidity(error);
        return false;
    }
    if (cepInput.validity.patternMismatch){
        let erro = 'Não é um CEP válido';
        cepInput.setCustomValidity(erro);
        return false;
    }
    cepInput.setCustomValidity('');
    return true;
}

function saveReportLocal(report) {
    const reportService = new ReportService();
    reportService.saveLocal(report);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/reports', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 201) {
                alert('Dados salvos no servidor!');
            } else {
                alert('Erro ao salvar dados no servidor.');
            }
        }
    };    
    xhr.send(JSON.stringify(report));
}
