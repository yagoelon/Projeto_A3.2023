const express = require ('express')

//mysql é o nome de uma variável, pode ser qualquer coisa
//mysql parece mais intuitivo do que mysql2
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'schema1',
    password: 'senha123'
});
const app = express()
app.use(express.json())
//app.get('/lembretes', (req, res) => {
//    connection.query('SELECT * FROM tb_lembretes', (err, results, fields) => {
//        res.json(results)
//
//        //results tem as linhas
//        //fields tem meta dados sobre os resultados, caso estejam disponível
//        console.log(results)
//        console.log(fields)
//        res.send('ok')
//    })
//})

app.get('/observacoes', (req, res) => {
    connection.query('SELECT * FROM tb_observacoes', (err, results, fields) => {
        res.json(results)
    })
})

/*app.post('/lembretes', (req, res) => {
    const id = req.body.id
    const texto = req.body.texto
    const dt = req.body.dt
    const categoria = req.body.categoria
    const concluido = req.body.concluido
    const cor = req.body.cor
    const sql = "INSERT INTO tb_lembretes (id, nome, dt, categoria, concluido) VALUES ("
        + id + ", '" + texto + ", '" + dt + ", '" + categoria + ", '" + concluido + ", '" + cor + ")"
    connection.query(sql, (err, results, fields) => {
        console.log (results)
        console.log(fields)
        res.send('ok')
    })
})*/

app.post('/observacoes', (req, res) => {
            const connection4 = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'schema2',
            password: 'senha123'
            })
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
            

const porta = 3000
app.listen(porta, () => console.log(`Executando. Porta ${porta}`))