const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'schema1',
    password: 'senha123'
});
//armazenar os dados enquanto nao tem banco, pagina 4.3.10 da apostila
const lembretes = {}
//requisição get apenas para trazer todos os lembretes ja criados.
app.get('/lembretes/', (req, res) => {
    connection.query('SELECT * FROM tb_lembretes', (err, results, fields) => {
        console.log(err)
        console.log(results)
        console.log(fields)
        res.send(results);
    })
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
contador = 0;

app.post('/lembretes/', (req, res) => {
    contador++;
    const texto = req.body.texto;
    const dt = req.body.dt;
    const concluido = req.body.concluido === 'on' ? true : false;
    const cor = req.body.cor;
    const categoria = req.body.categoria;

    const sql = "INSERT INTO tb_lembretes (id, nome, dt, categoria, concluido, cor) VALUES ("
        + contador + ", '" + texto + "', '" + dt + "', '" + categoria + "', " + concluido + ", '" + cor + "')"
    console.log(sql)
    connection.query(sql, (err, results, fields) => {
        console.log(results)
        console.log(fields)
    })
    res.status(201).send(lembretes[contador]);

});

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000')
});