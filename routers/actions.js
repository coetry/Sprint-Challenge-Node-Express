const express = require('express')
const actions = express.Router()
const Actions = require('../data/helpers/actionModel')

actions.post('/', async (req, res, next) => {
  checkActionBody(req, next)

  const { 
    project_id, 
    description, 
    notes 
  } = req.body

  const actionBody = notes 
    ? { project_id, description, notes }
    : { project_id, description, notes: "" }

  try {
    const action = await Actions.insert(actionBody)
    res.status(200).json(action)
  } catch(e) {
    sendError(500, e.message, next)
  }
})

actions.get('/', async (req, res, next) => {
  try {
    const actions = await Actions.get()
    res.status(200).json(actions)
  } catch(e) {
    sendError(500, e.message, next)
  }
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

const checkActionBody = (req, next) => {
  if (!req.body || !req.body.project_id || !req.body.description){
    sendError(400, "please provide project_id and description", next)
  }
}

const sendError = (code, message, next) => {
  next({
    code,
    message
  })
}

module.exports = actions
