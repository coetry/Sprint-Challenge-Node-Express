const express = require('express')
const projects = express.Router()
const Projects = require('../data/helpers/projectModel')

projects.post('/', async (req, res, next) => {
  checkProjectBody(req, next)

  const { name, description } = req.body

  try {
    const project = await Projects.insert({ name, description })
    res.status(200).json(project)
  } catch(e) {
    sendError(500, e.message, next)
  }
})

projects.get('/', async (req, res, next) => {
  try {
    const projects = await Projects.get()
    res.status(200).json(projects)
  } catch(e){
    sendError(500, e.message, next)
  }
})

projects.get('/:id', async (req, res, next) => {
  const id = +req.params.id

  try {
    const project = await Projects.get(id)
    res.status(200).json(project)
  } catch(e) {
    sendError(500, e.message, next)
  }

})

projects.put('/:id', async (req, res, next) => {
  checkProjectBody(req, next)
  
  const id = +req.params.id
  const { name, description } = req.body 
  try {
    const project = await Projects.update(id, { name, description })
    res.status(200).json(project)
  } catch(e) {
    sendError(500, e.message, next)
  }
})

projects.delete('/:id', (req, res, next) => {
})

projects.use((err, req, res, next) => {
  res.status(err.code).json({
    error: err.code,
    message: err.message
  })
})

const checkProjectBody = (req, next) => {
  if (!req.body || !req.body.name || !req.body.description) {
    sendError(400, "please provide name and description", next)
  }
}

const sendError = (code, message, next) => {
  next({
    code,
    message
  })
}

module.exports = projects
