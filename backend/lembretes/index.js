const express = require('express');
const app = express();
//armazenar os dados enquanto nao tem banco, pagina 4.3.10 da apostila
const lembretes = {}
//requisição get apenas para trazer todos os lembretes ja criados.
app.get('/lembretes/', (req, res) => {
    res.send(lembretes);
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
lembretes = {};
contador = 0;

app.put('/lembretes/', (req, res) => {
    contador++;
    const { texto } = req.body;
    lembretes[contador] = {
        contador, texto
    }
    res.status(201).send(lembretes[contador]);
});

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000')
});