import {Component} from '@nestjs/common';
import {IPlayer} from 'extreme-startup-core/lib/common/interfaces/player.interface';
import {Session} from 'extreme-startup-core/lib/common/interfaces/session.interface';
import {ExtremeStartupGameSession} from '../models/extreme-startup-game.session';
import {AlreadyStartedSessionException} from '../exceptions/already-started-session.exception';

@Component()
export class GameService {
  private session: Session;
  private isStarted: boolean = false;

  constructor() {
    this.session = new ExtremeStartupGameSession();
  }

  public addPlayer(player: IPlayer): void {
    if (this.isStarted) {
      throw new AlreadyStartedSessionException();
    }
    this.session.addPlayer(player);
  }

  public start(): void {
    this.session.start();
    this.isStarted = true;
  }
}
