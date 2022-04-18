const res = require('express/lib/response');
const roupasService = require('../services/roupas.services');

const findAllRoupasController = (req, res) => {
  const roupas = roupasService.findAllRoupasService();
  res.send(roupas);
};

const FindByIdRoupasController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenroupa = roupasService.FindByIdRoupasService(idParam);
  res.send(chosenroupa);
};

const createroupasController = (req, res) => {
  const roupas = req.body;
  const NovaRoupas = roupasService.createroupasService(roupas);
  res.send(NovaRoupas);
};

const updateroupasController = (req, res) => {
  const idParam = Number(req.params.id);
  const roupaEdit = req.body;
  const updateroupas = roupasService.updateroupasService(idParam, roupaEdit);
  res.send(updateroupas);
};

const deleteroupasController = (req, res) => {
  const idParam = req.params.id;
  roupasService.deleteroupasService(idParam);
  res.send({ mensage: 'Roupa deletada com sucesso :)' });
};

module.exports = {
  findAllRoupasController,
  FindByIdRoupasController,
  createroupasController,
  updateroupasController,
  deleteroupasController,
};
