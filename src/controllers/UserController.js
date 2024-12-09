const User = require('../models/users')
const {request, response} = require('express')

const getUser = async (req = request, res = response) => {
    try {
        const user = await User.find()
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}

const createUser = async (req = request, res = response) => {
    try {
        const body = req.body
        const user = new User(body)
        await user.save()
        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({message: error})
        
    }
}

const updateUser = async (req = request, res = response) => {
    try {
        const id = req.params.id
        const body = req.body
        const user = await User.findByIdAndUpdate(id, body, {new: true})
        return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({message: error})
    }
}

const deleteUser = async (req = request, res = response) => {
    try {
        const id = req.params.id
        await User.findByIdAndDelete(id)

        return res.status(204).json({
            message: 'Borrado'
        })
        
    } catch (error) {
        return res.status(500).json({message: error})
    }
}

module.exports = ({
    getUser,
    createUser,
    updateUser,
    deleteUser
})