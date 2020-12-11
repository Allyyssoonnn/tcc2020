var score = require('./score');

//Retorna o resultado do select do score
var dadosquery = async () => {
    try {
        const resultado = await score();

        return resultado;


    } catch (err) {
        console.log('Erro = ' + err);
    }
}

function cars() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('cars').style.display = 'flex';
    document.getElementById('h01').innerText = 'Selecione o carro!';
    document.getElementById('h01').style.color = 'blue'
}

function back1() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('cars').style.display = 'none';
    document.getElementById('h01').innerText = 'TCC drive:Waste of time';
    document.getElementById('h01').style.color = 'blueviolet';
}

function back2() {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('cars').style.display = 'none';
    document.getElementById('h01').innerText = 'TCC drive:Waste of time';
    document.getElementById('h01').style.color = 'blueviolet';
}

module.exports = (dadosquery);