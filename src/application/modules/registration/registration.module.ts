import {Module} from '@nestjs/common';
import {RegistrationController} from './controllers/registration.controller';
import {RegistrationService} from './services/registration.service';
import {GameModule} from '../game/game.module';

@Module({
  modules: [
    GameModule
  ],
  controllers: [
    RegistrationController
  ],
  components: [
    RegistrationService
  ]
})
export class RegistrationModule {}
