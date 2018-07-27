const express = require('express')
const actions = express.Router()

actions.post('/', (req, res, next) => {
})

actions.get('/', (req, res, next) => {
})

actions.get('/:id', (req, res, next) => {
})

actions.put('/:id', (req, res, next) => {
})

actions.delete('/:id', (req, res, next) => {
})

actions.use((err, req, res, next) => {
  res.status(err.code).json({
    error: err.code,
    message: err.message
  })
})

module.exports = actions
