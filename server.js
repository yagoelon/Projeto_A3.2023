const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/planner', (req, res) => {
    const plannerData = req.body;
    // Aqui você pode processar os dados, armazená-los em um banco de dados, etc.
    console.log('Dados do Planner recebidos:', plannerData);
    res.status(200).send('Dados recebidos com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});