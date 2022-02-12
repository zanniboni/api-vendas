/* Importando rotas do express */

import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionController from '@modules/users/routes/sessions.routes';
/* Inicializando as rotas */

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionController);

export default routes;
