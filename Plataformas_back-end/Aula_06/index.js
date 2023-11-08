const express = require('express');
const app = express();

app.get('/ola_servidor', (req, res) => {
  res.json({ message: 'Oi coleguinas, tudo tranquilo com vocês?' });
});

app.get('/que_horas_sao_por_favor', (req, res) => {
  const horaAtual = new Date().toLocaleString();
  res.json({ horaAtual });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
