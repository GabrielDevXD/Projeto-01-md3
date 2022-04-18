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

const findAllRoupasService = () => {
  return roupas;
};

const FindByIdRoupasService = (parametroId) => {
  const roupa = roupas.find((roupas) => roupas.id === parametroId);
  return roupa;
};

const createroupasService = (newroupas) => {
  const NewId = roupas.length + 1;
  newroupas.id = NewId;
  roupas.push(newroupas);
  return newroupas;
};

const updateroupasService = (id, roupaEdit) => {
  roupaEdit['id'] = id;
  const roupasIndex = roupas.findIndex((roupas) => roupas.id == id);
  roupas[roupasIndex] = roupaEdit;
  return roupaEdit;
};

const deleteroupasService = (id) => {
  const roupasIndex = roupas.findIndex((roupas) => roupas.id == id);
  return roupas.splice(roupasIndex, 1);
};

module.exports = {
  findAllRoupasService,
  createroupasService,
  FindByIdRoupasService,
  updateroupasService,
  deleteroupasService,
};
