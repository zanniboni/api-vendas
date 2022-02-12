import { Router } from 'express';
import UsersSessionController from '../controllers/SessionsController';
import { celebrate, Joi, Segments } from 'celebrate';
const sessionsRouter = Router();
const sessionController = new UsersSessionController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.create,
);

export default sessionsRouter;
