/* Definição da classe AppError
- Classe é responsável por interagir com o middleware de erros
definido no server.ts */

class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  /* Constructor = Inicializa a classe */
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
