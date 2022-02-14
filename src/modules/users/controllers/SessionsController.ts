import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsService';

export default class UsersSessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createSessionUser = new CreateSessionsService();

    const user = await createSessionUser.execute({ email, password });

    return response.json(user);
  }
}
