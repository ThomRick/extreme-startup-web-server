import {HttpException} from '@nestjs/core';

export class AlreadyStartedSessionException extends HttpException {
  constructor() {
    super('Already started game session', 400);
  }
}
