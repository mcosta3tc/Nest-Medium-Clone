import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { ExpressRequest } from '../../types/expressRequest';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(request: ExpressRequest, response: Response, next: NextFunction) {
    if (!request.headers.authorization) {
      request.user = null;
      next();
      return;
    }
    const token = request.headers.authorization.split(' ')[1];
    try {
      const decode = verify(token, process.env['JWT_SECRET']);
      request.user = await this.userService.findUserById(decode.id);
      next();
    } catch (e) {
      request.user = null;
      next();
    }
  }
}
