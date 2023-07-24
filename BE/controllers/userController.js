"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs')


const getUsers = (req, res) => {
    Models.Users.findAll({}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const getUsersByID = (req, res) => {
    Models.Users.findAll({where: { id: req.params.id }}).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const createUsers = (data, res) => {
    console.log('createIngredients')
    Models.Users.create(data).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const updateUsers = (req, res) => {
    console.log('test')
    Models.Users.update(req.body, {
        where: {
            id:
                req.params.id
        }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}
const deleteUsers = (req, res) => {
    Models.Users.destroy({
        where: { id: req.params.id }
    }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

// Function to login a user
const loginUser = (req, res) => {
    // Find the user with the given email in the User model
    console.log(req.body.username)
    Models.Users.findOne({where: { username: req.body.username }}).then(async function (user) {
        // If the user exists and the password is correct, send the user data as response
        if (user && (await bcrypt.compare(req.body.password, user.password))) {
             res.send({ result: 200, data: user })
        } else {
            // If the user does not exist or the password is incorrect, send an error response
            res.send({ result: 400, data: "Invalid User" });
        }
    }).catch(err => {
        // If there is an error, throw it
        throw err
    })
}

module.exports = {
    getUsers, createUsers, updateUsers, deleteUsers, getUsersByID, loginUser
}