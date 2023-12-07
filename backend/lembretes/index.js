const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
contador = 0;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'schema1',
    password: 'Pabr@123'
});

app.get('/lembretes/', (req, res) => {
    connection.query('SELECT * FROM tb_lembretes', (err, results, fields) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        res.send(results);
    });
});

app.post('/lembretes/', (req, res) => {
    contador++;
    const nome = req.body.texto;
    const dt = req.body.dt;
    const concluido = req.body.concluido === 'on' ? true : false;
    const cor = req.body.cor;
    const categoria = req.body.categoria;

    const sql = `INSERT INTO tb_lembretes (id, nome, dt, categoria, concluido, cor) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [contador, nome, dt, categoria, concluido, cor];

    connection.query(sql, values, (err, results, fields) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erro interno do servidor');
            return;
        }
        res.status(201).send(results);
    });
});

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});