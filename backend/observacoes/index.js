const express = require('express');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const mysql = require('mysql2');

const connection2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'schema2',
    password: 'Pabr@123'
});

//const observacoesPorLembreteId = {};

app.post('/lembretes/:id/observacoes', async (req, res) => {
        const id = req.body.id
        const id_obs = req.body.id_obs
        const obs = req.body.obs
        const sql = "INSERT INTO tb_observacoes (id, id_obs, obs) VALUES ("
        + id + ", '" + id_obs + ", '" + obs + ")"
        connection.query(sql, (err, results, fields) => {
        console.log (results)
        console.log(fields)
         res.send('ok')
         })
        })

app.get('/lembretes/:id/observacoes', (req, res) => {
    connection.query('SELECT * FROM tb_observacoes', (err, results, fields) => {
        res.json(results)
    })
})

app.listen(5000, (() => {
    console.log('Observacoes. Porta 5000');
}));