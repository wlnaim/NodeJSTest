const router = require('express').Router()

const {
  read
} = require('../controllers/genderController')

router.get('/', read)

module.exports = router
