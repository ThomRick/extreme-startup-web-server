import {Controller, Get, Post, Res} from '@nestjs/common';

@Controller('/api/registrations')
export class RegistrationController {

  @Get()
  public getAll(@Res() response) {
    response.end();
  }

  @Post()
  public create(@Res() response) {
    response.status(201).end();
  }
}
