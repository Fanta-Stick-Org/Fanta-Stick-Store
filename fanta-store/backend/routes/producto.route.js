let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Productos Model
let productSchema = require('../models/Productos');

// CREATE Product
router.route('/create-product').post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Products
router.route('/').get((req, res) => {
  productSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Product
router.route('/edit-product/:idProducto').get((req, res) => {
  productSchema.findById(req.params.idProducto, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Product
router.route('/update-product/:id').put((req, res, next) => {
  productSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Producto Actualizado con exito!')
    }
  })
})

// Delete Producto
router.route('/delete-product/:id').delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
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