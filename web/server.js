const express = require('express');
const app = express();
const PORT = 3000;

// Rota para consultar cidades
app.get('/cities', (req, res) => {
  const cities = ['Cianorte', 'Campo Mourão', 'Maringá', 'Araruna'];
  res.json(cities);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
