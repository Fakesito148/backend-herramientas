const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loan.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Middleware de autenticación para todas las rutas
router.use(authMiddleware.protect);

// Ruta para crear préstamo
router.post('/', 
  authMiddleware.restrictTo('user', 'admin'),
  loanController.createLoan
);

// Ruta para obtener préstamos del usuario
router.get('/',
  loanController.getUserLoans
);

// Ruta para préstamos vencidos
router.get('/overdue',
  loanController.getOverdueLoans
);

// Ruta para obtener un préstamo específico
router.get('/:id',
  loanController.getLoan
);

// Ruta para devolver herramienta
router.patch('/:id/return',
  loanController.returnTool
);

// Ruta para eliminar préstamo (solo admin)
router.delete('/:id',
  authMiddleware.restrictTo('admin'),
  loanController.deleteLoan
);

module.exports = router;