const express = require('express')
const projects = express.Router()
const Projects = require('../data/helpers/projectModel')

projects.post('/', async (req, res, next) => {
  if (!req.body || !req.body.name || !req.body.description) {
    next({ 
      code: 400, 
      message: "please provide name and description"
    })
  }

  const { name, description } = req.body

  try {
    const project = await Projects.insert({ name, description })
    res.status(200).json(project)
  } catch(e) {
    next({ code: 500, message: e.message })
  }
})

projects.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.get()
    res.status(200).json(projects)
  } catch(e){
    next({
      code: 500,
      message: e.message
    })
  }
})

projects.get('/:id', async (req, res, next) => {
  const id = +req.params.id

  try {
    const project = await Projects.get(id)
    res.status(200).json(project)
  } catch(e) {
    next({
      code: 500,
      message: e.message
    })
  }

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
