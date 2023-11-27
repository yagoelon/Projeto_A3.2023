const express = require('express');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const observacoesPorLembreteId = {};

app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidv4();
    const { texto } = req.body;

    const observacoesDoLembrete =
    observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({ id: idObs, texto });
    observacoesPorLembreteId[req.params.id] =
    observacoesDoLembrete;
    res.status(201).send(observacoesDoLembrete);
});

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});

app.listen(5000, (() => {
    console.log('Observacoes. Porta 5000');
}));

//const { vs : uuidv4 } = require('uuid');

/*app.post('/lembretes/:id/observacoes', (req, res) => {
    const id0bs = uuivd4();
    const { texto } = req.body;

    const observacoesDoLembrete =
    observacoesPorLembreteId[req.params.id] || [];
observacoesDoLembrete.push({ id: idObs, texto });
observacoesPorLembreteId[req.params.id] =
observacoesDoLembrete;
res.status(201).send(observacoesDoLembrete);
})*/