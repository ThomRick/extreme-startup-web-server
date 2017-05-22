import {Module} from '@nestjs/common';
import {GameService} from './services/game.service';

@Module({
  components: [
    GameService
  ],
  exports: [
    GameService
  ]
})
export class GameModule {}
