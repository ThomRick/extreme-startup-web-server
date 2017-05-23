import {Component} from '@nestjs/common';
import {GameService} from '../../game/services/game.service';
import {Player} from 'extreme-startup-core/lib/common/player';
import {HttpQuestionSender} from 'extreme-startup-core/lib/common/http-question.sender';
import {IPlayer} from 'extreme-startup-core/lib/common/interfaces/player.interface';

@Component()
export class RegistrationService {
  constructor(
    private gameService: GameService
  ) {}

  public register(playerDescription: { nickname: string; hostname: string }): IPlayer {
    const player: IPlayer = new Player(playerDescription.nickname, new HttpQuestionSender(playerDescription.hostname));
    this.gameService.addPlayer(player);
    return player;
  }
}
