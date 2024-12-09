const express = require('express')
const {getUser, createUser, updateUser, deleteUser} = require('../controllers/UserController')

const router = express.Router()

router.get('/', getUser)
router.post('/', createUser)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router