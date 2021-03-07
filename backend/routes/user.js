const router = require('express').Router()

const {
  create,
  edit,
  read,
  readById,
  remove
} = require('../controllers/userController')

router.get('/', read)
router.get('/:id', readById)
router.post('/', create)
router.put('/', edit)
router.delete('/:id', remove)

module.exports = router
