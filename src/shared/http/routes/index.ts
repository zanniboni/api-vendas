/* Importando rotas do express */

import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';

/* Inicializando as rotas */

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
