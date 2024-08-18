const express = require('express')
const routes = express.Router()
const notesController = require('./controllers/notesController')
const priorityController = require('./controllers/priorityController')
const contentController = require('./controllers/contentController')

// /notes
routes.post('/notes', notesController.create)
routes.get('/notes', notesController.read)
routes.delete('/notes/:id', notesController.delete)

// /priority
routes.get('/priorities', priorityController.read)
routes.post('/priorities/:id', priorityController.update)

// content

routes.post('/contents/:id', contentController.update)

module.exports = routes;