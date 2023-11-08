var perfil = ['Aluno', 'Professor', 'Extensao', 'Visitante']
var logAcesso = [];
var nomeAtual = ''
var perfilAtual = ''
var lugar = ''
var sentido = ''
var converted_date = "";


setInterval(function(){
    var date = new Date();
    var format = "YYYY-MMM-DD DDD";
    dateConvert(date,format)
}, 1);

function dateConvert(dateobj,format) {
    var year = dateobj.getFullYear();
    var month= ("0" + (dateobj.getMonth()+1)).slice(-2);
    var date = ("0" + dateobj.getDate()).slice(-2);
    var hours = ("0" + dateobj.getHours()).slice(-2);
    var minutes = ("0" + dateobj.getMinutes()).slice(-2);
    var seconds = ("0" + dateobj.getSeconds()).slice(-2);
    var day = dateobj.getDay();
    var months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    converted_date = "";

    switch(format) {
        case "YYYY-MM-DD":
            converted_date = date + "/" + month + "/" + year;
        break;
        case "YYYY-MMM-DD DDD":
            converted_date = date + "/" + months[parseInt(month)-1] + "/" + year
            + " " + hours + ":" + minutes + ":" + seconds;
        break;
    }
}

function MostrarLogAcesso() {
    const generatedHtml = Object.keys(logAcesso).reduce((accum, currKey) => accum +
    `<div class="tabela">
        <div class="chave">${currKey}</div>
        <div class="name">${logAcesso[currKey].nome}</div>
        <div class="datahora">${logAcesso[currKey].datahora}</div>
        <div class="lugar">${logAcesso[currKey].lugar}</div>
        <div class="sentido">${logAcesso[currKey].sentido}</div>
    </div>`, '');

    document.getElementById('container').innerHTML = generatedHtml;
}


function Acesso(lugarClick, sentidoClick) {
    lugar = lugarClick
    sentido = sentidoClick

    switch (lugar) {
        case 'Ginásio':
            if (document.getElementById('perfil').value == 'Atleta') {
                logAcesso.push({
                    nome: document.getElementById('nome').value,
                    datahora: converted_date,
                    lugar: lugar,
                    sentido: sentido
                })
            } else {
                window.alert('Acesso Negado.')
            }
            break;

        case 'Prédio das Clínicas':
            if (document.getElementById('perfil').value == 'Professor' || document.getElementById('perfil').value == 'Extensão') {
                logAcesso.push({
                    nome: document.getElementById('nome').value,
                    datahora: converted_date,
                    lugar: lugar,
                    sentido: sentido
                })
            } else {
                window.alert('Acesso Negado.')
            }
            break;

        case 'Acesso Principal':
            if (document.getElementById('perfil').value != 'Visitante') {
                logAcesso.push({
                    nome: document.getElementById('nome').value,
                    datahora: converted_date,
                    lugar: lugar,
                    sentido: sentido
                })
            } else {
                window.alert('Acesso Negado.')
            }
            break;

        case 'Acesso Traseiro':
            if (document.getElementById('perfil').value != 'Visitante') {
                logAcesso.push({
                    nome: document.getElementById('nome').value,
                    datahora: converted_date,
                    lugar: lugar,
                    sentido: sentido
                })
            } else {
                window.alert('Acesso Negado.')
            }
            break;
    }
    MostrarLogAcesso()
}

