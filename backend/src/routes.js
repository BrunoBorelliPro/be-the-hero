const express = require('express');

const ongsController = require('./controllers/ongsController')
const incidentsController = require('./controllers/incidentController')
const profileCotroller = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController')

const routes = express.Router();


routes.get('/ongs', ongsController.index);
routes.post('/ongs', ongsController.create);

routes.get('/incidents', incidentsController.index)
routes.post('/incidents', incidentsController.create)
routes.delete('/incidents/:id', incidentsController.delete)

routes.get('/profile', profileCotroller.index)

routes.post('/sessions', sessionController.create)

module.exports = routes;