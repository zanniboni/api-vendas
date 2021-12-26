/* Importando rotas do express */
import { Router } from 'express';

/* Inicializando as rotas */
const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Dev' });
});

export default routes;
