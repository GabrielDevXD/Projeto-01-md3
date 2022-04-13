import express from 'express';
const port = 3000;
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(cors());

//arrays/objetos //
const roupas = [
  {
    id: 1,
    nome: 'Blusa',
    descricao: 'Blusa Lançamento da Nike .',
    foto: '/img/Blusanike.jpg',
    preco: 30,
  },
  {
    id: 2,
    nome: 'Calça',
    descricao: 'Calça preta em lançamento.',
    foto: '/img/Calça.jpg',
    preco: 50.0,
  },
  {
    id: 3,
    nome: 'Bone',
    descricao: 'Bone lançamento da nike.',
    foto: '/img/bone.jpg',
    preco: 18.0,
  },
];

app.get('/', function (req, res) {
  res.send('');
});

app.get('/roupas/find-roupas', (req, res) => {
  res.send(roupas);
});

//get by id//
app.get('/roupas/find-roupas/:id', (req, res) => {
  const idParam = Number(req.params.id);
  const chosenroupa = roupas.find((roupas) => roupas.id === idParam);
  res.send(chosenroupa);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
