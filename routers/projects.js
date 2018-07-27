const express = require('express')
const projects = express.Router()

projects.post('/', (req, res, next) => {
})

projects.get('/', (req, res, next) => {
})

projects.get('/:id', (req, res, next) => {
})

projects.put('/:id', (req, res, next) => {
})

projects.delete('/:id', (req, res, next) => {
})

projects.use((err, req, res, next) => {
  res.status(err.code).json({
    error: err.code,
    message: err.message
  })
})

module.exports = projects
