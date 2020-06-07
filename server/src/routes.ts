import express from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

/* routes.get('/', (request, response) => {
    return response.json({ message:'hello word'})
}) */

routes.get('/items', itemsController.index)

// convencionado na comunidade os termos: index, show, create, update, delete

routes.post('/points', pointsController.create )
routes.get('/points', pointsController.index )
routes.get('/points/:id', pointsController.show )

export default routes;

/* poderia abstrair mais exemplos:
Service Pattern
Repositor-Pattern (Data Mapper) */