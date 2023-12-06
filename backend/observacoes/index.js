const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const mysql = require('mysql2')
contador = 0;
const observacoesPorLembreteId = {};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'schema1',
    password: 'senha123'
});

//app.post('/lembretes/:id/observacoes', async (req, res) => {
//    const id_lembrete = req.params.id;
//    const obs = req.body.obs;
//
//    if (!obs) {
//        return res.status(400).send('O campo "obs" é obrigatório');
//    }
//
//    const sql = "INSERT INTO tb_observacoes (id_obs, obs) VALUES (?, ?)";
//    const values = [id_lembrete, obs];
//
//    connection.query(sql, values, (err, results, fields) => {
//        if (err) {
//            console.error(err);
//            return res.status(500).send('Erro interno do servidor');
//        }
//
//        console.log(sql);
//        console.log(results);
//        console.log(fields);
//        res.send('Observação adicionada com sucesso');
//    });
//});

app.post('/lembretes/:id/observacoes', (req, res) => {
    const id_obs = uuidv4();
    const { obs } = req.body;
    //req.params dá acesso à lista de parâmetros da URL
    const observacoesDoLembrete =
        observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({ id: id_obs, obs });
    observacoesPorLembreteId[req.params.id] =
        observacoesDoLembrete;

    const sql = "INSERT INTO tb_observacoes (id_obs, obs) VALUES ("
        + id_obs + ", '" + obs + "')"
    console.log(sql)
    connection.query(sql, (err, results, fields) => {
        console.log(results)
        console.log(fields)
    })
    res.status(201).send(observacoesDoLembrete);
});


//app.get('/lembretes/:id/observacoes', (req, res) => {
//    connection.query('SELECT * FROM tb_observacoes', (err, results, fields) => {
//        console.log(err)
//        console.log(results)
//        console.log(fields)
//        res.send(results);
//    })
//});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
    connection.query('SELECT * FROM tb_observacoes', (err, results, fields) => {
        console.log(err)
        console.log(results)
        console.log(fields)
        res.send(results);
});
});

app.listen(5000, (() => {
    console.log('Observacoes. Porta 5000');
}));