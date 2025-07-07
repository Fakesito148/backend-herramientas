const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
    trim: true,
    maxlength: [50, 'Máximo 50 caracteres']
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['disponible', 'prestado', 'mantenimiento', 'inactivo'],
    default: 'disponible'
  },
  availableQuantity: {
    type: Number,
    default: 1,
    min: 0
  },
  totalQuantity: {  
    type: Number,
    default: 1
  },
  borrowedQuantity: {  
    type: Number,
    default: 0
  },
  loans: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan'
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  currentLoan: {  
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Loan',
    default: null
  },
  image: String
}, { timestamps: true });

module.exports = mongoose.model('Tool', toolSchema);