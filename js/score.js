var mysql = require('mysql2');

var select = 'SELECT * FROM score.tab_score order by score DESC';

function score() {
    return new Promise((resolve, reject) => {

        var con = mysql.createConnection({
            host: "localhost",
            port: "3307",
            user: "root",
            password: ""
        });

        con.connect(function(err) {
            if (err) throw err;
            console.log('Conectado na base de dados!');
        });

        const result = {};
        con.query(select, (err, rows, fields) => {

            if (err) {
                reject(err);
            } else {
                result.rows = rows;
                result.length = rows.length;
                result.fields = fields;
                resolve(result);

                //console.log(result.rows[0].nome_player);

                console.log('Resultado encontrado');
            }

            console.log('Finalizado');
        });
    
    });
}

module.exports = (score);