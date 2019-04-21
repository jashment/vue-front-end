const express = require('express')
const router = express.Router()

const animal_controller = require('../controllers/animal.controller')

router.get('/test', animal_controller.test)

router.get('/all', animal_controller.animals_all)

router.post('/create', animal_controller.animal_create)

router.get('/:id', animal_controller.animal_details);

router.put('/:id/update', animal_controller.animal_update);

router.delete('/:id/delete', animal_controller.animal_delete);

module.exports = router