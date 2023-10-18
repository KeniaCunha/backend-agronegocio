const express = require('express');

const router = express.Router();

const negociacaoController = require('./controllers/negociacaoController');
const negociacaoMiddleware = require('./middlewares/negociacaoMiddleware');
const usuarioMiddleware = require('./middlewares/usuarioMiddleware');
const usuarioController = require('./controllers/usuarioController');

router.get('/usuarios', usuarioController.getAll)
router.post('/usuarios/register', usuarioMiddleware.signupValidation , usuarioController.register)


router.get('/negociacao', negociacaoController.getAll);
router.get('/negociacao/:id', negociacaoController.getById);
router.post('/negociacao', negociacaoMiddleware.validateBody, negociacaoController.createNegociacao);
router.delete('/negociacao/:id', negociacaoController.deleteNegociacao);
router.put('/negociacao/:id', negociacaoMiddleware.validateBody, negociacaoController.updateNegociacao);

module.exports = router;