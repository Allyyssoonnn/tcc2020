const http = require("http");
const express = require("express");
const dadosquery = require('./js/home');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const myfile = __dirname + '/home.html';


const app = express();
const dados = dadosquery();

app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/home.html");
    
    JSDOM.fromFile(myfile).then((dom) => {
        console.log(dom.window.document.getElementById("s2").textContent);
    });

});

app.get("/test", function(req, res) {
    res.send("<h1>" + dados + "</h1>");

    dados.then(function(value) {
        console.log(value.rows[0].nome_player);

        return(value.rows[0].nome_player);
    });
    
});

app.get("/stock", function(req, res){
    res.sendFile(__dirname + "/stock.html");
});


http.createServer(app).listen(8080, () => console.log('Servidor rodando na porta 8080'));