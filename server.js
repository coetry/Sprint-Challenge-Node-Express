const express = require('express')
const morgan = require('morgan')
const projects = require('./routers/projects')
const actions = require('./routers/actions')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())

app.use('/projects', projects)
app.use('/actions', actions)

app.listen(8080, () => {
  console.log('💰💵💸 : 8080')
})
