let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Usuarios Model
let usuariosSchema = require('../models/Usuarios');

// CREATE Usuario
router.route('/create-usuarios').post((req, res, next) => {
  usuariosSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Usuarios
router.route('/').get((req, res) => {
  usuariosSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Usuario
router.route('/edit-usuarios/:id').get((req, res) => {
  usuariosSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Usuario
router.route('/update-usuarios/:id').put((req, res, next) => {
  usuariosSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Usuario Actualizado con exito!')
    }
  })
})

// Delete Usuario
router.route('/delete-usuarios/:id').delete((req, res, next) => {
  usuariosSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;