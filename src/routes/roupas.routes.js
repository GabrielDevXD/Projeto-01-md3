const express = require('express');
const router = express.Router();

const controllerRoupas = require('../controllers/roupas.controller');

router.get('/find-roupas', controllerRoupas.findAllRoupasController);
router.get('/find-roupas/:id', controllerRoupas.FindByIdRoupasController);
router.post('/create', controllerRoupas.createroupasController);
router.put('/update/:id', controllerRoupas.updateroupasController);
router.delete('/delete/:id', controllerRoupas.deleteroupasController);

module.exports = router;
