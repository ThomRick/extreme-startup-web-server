import {Body, Controller, Get, Post, Res} from '@nestjs/common';
import {RegistrationService} from '../services/registration.service';

@Controller('/api/registrations')
export class RegistrationController {
  constructor(
    private registrationService: RegistrationService
  ) {}

  @Get()
  public getAll(@Res() response) {
    response.end();
  }

  @Post()
  public create(@Body() player, @Res() response) {
    this.registrationService.register(player);
    response.status(201).end();
  }
}
