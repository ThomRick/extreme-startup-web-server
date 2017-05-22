import {Component} from '@nestjs/common';
import {GameService} from '../../game/services/game.service';
import {Player} from 'extreme-startup-core/lib/common/player';
import {HttpQuestionSender} from 'extreme-startup-core/lib/common/http-question.sender';

@Component()
export class RegistrationService {
  constructor(
    private gameService: GameService
  ) {}

  public register(player: { nickname: string; hostname: string }) {
    this.gameService.addPlayer(new Player(player.nickname, new HttpQuestionSender(player.hostname)));
  }
}
