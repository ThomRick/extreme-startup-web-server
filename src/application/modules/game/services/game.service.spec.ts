import {GameService} from './game.service';
import {Test} from '@nestjs/testing';
import {expect} from 'chai';
import {Player} from 'extreme-startup-core/lib/common/player';
import {HttpQuestionSender} from 'extreme-startup-core/lib/common/http-question.sender';
import {SinonSandbox, SinonStub} from 'sinon';
import * as sinon from 'sinon';
import {ExtremeStartupGameSession} from '../models/extreme-startup-game.session';
import {IPlayer} from 'extreme-startup-core/lib/common/interfaces/player.interface';
import {AlreadyStartedSessionException} from "../exceptions/already-started-session.exception";

describe('GameService', () => {
  let sandbox: SinonSandbox;
  let service: GameService;

  beforeEach(() => {
    Test.createTestingModule({
      components: [
        GameService
      ]
    });
  });

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(() => {
    service = Test.get(GameService);
  });

  describe('#addPlayer()', () => {
    it('should call ExtremeStartupGameSession.addPlayer()', () => {
      const addPlayerStub: SinonStub = sandbox.stub(ExtremeStartupGameSession.prototype, 'addPlayer');
      const player: IPlayer = new Player('player1', new HttpQuestionSender('hostname'));
      service.addPlayer(player);
      expect(addPlayerStub.calledWith(player)).to.be.true;
    });

    it('should throw an exception if start() has been called', () => {
      service.start();
      const player: IPlayer = new Player('player1', new HttpQuestionSender('hostname'));
      expect(() => {
        service.addPlayer(player);
      }).to.throw(AlreadyStartedSessionException);
    });
  });

  describe('#getPlayers()', () => {
    it.skip('should call ExtremeStartupGameSession.getPlayers()', () => {

    });
  });

  describe('#getPlayer()', () => {
    it.skip('should call ExtremeStartupGameSession.getPlayer()', () => {

    });
  });

  describe('#start()', () => {
    it('should call ExtremeStartupGameSession.start()', () => {
      const startStub: SinonStub = sandbox.stub(ExtremeStartupGameSession.prototype, 'start');
      service.start();
      expect(startStub.calledOnce).to.be.true;
    });
  });

  describe('#stop()', () => {
    it.skip('should call ExtremeStartupGameSession.stop()', () => {

    });
  });
});
