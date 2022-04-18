const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const router = require('./src/routes/roupas.routes');

app.use(express.json());
app.use(cors());
app.use('/roupas', router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
