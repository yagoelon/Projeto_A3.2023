const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

//armazenar os dados enquanto nao tem banco, pagina 4.3.10 da apostila
const lembretes = {}
//requisição get apenas para trazer todos os lembretes ja criados.
app.get('/lembretes/', (req, res) => {
    res.send(lembretes);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
contador = 0;

app.post('/lembretes/', (req, res) => {
    contador++;
    const texto  = req.body.texto;
    const dt  = req.body.dt;
    const concluido = req.body.concluido;
    const cor = req.body.cor;
    const categoria = req.body.categoria;

    lembretes[contador] = {
        contador, texto, dt, concluido, cor, categoria
    }
    res.status(201).send(lembretes[contador]);
});

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000')
});