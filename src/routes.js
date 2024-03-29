const exppress = require('express');
const routes = exppress.Router();

const ProductControllers = require('./controllers/ProductController');

// tudo muito lindo

routes.get('/products', ProductControllers.index);
routes.get('/products/:id', ProductControllers.show);
routes.post('/products', ProductControllers.store);
routes.put('/products/:id', ProductControllers.update);
routes.delete('/products/:id', ProductControllers.destroy);

module.exports = routes;

