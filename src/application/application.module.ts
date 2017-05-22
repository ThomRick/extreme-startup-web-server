import {Module} from '@nestjs/common';
import {RegistrationModule} from './modules/registration/registration.module';
import {GameModule} from './modules/game/game.module';

@Module({
  modules: [
    RegistrationModule,
    GameModule
  ]
})
export class ApplicationModule {}
