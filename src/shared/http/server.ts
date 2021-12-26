/* Reflect-metada é utilizada em conjunto com o typeorm */
import 'reflect-metadata';

/* Import das bibliotecas */
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from './errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/* Rota para gerenciamento de erros da aplicação
Caso a aplicação retorne algum erro, o middleware abaixo
é responsável por tratar esse erro através da criação
de uma instância da classe AppError */
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('Server iniciado na porta 3333!');
});
