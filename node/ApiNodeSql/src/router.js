import express from 'express'

import ProductController from './Controllers/ProductController'

const routes = express.Router();

routes.get('/GetAll', ProductController.Get)

routes.get('/GetById', ProductController.GetById)

routes.post('/Post', ProductController.Post)

routes.put('/Put', ProductController.Put)

routes.delete('/Delete', ProductController.Delete)