import {RegistrationService} from './registration.service';
import {Test} from '@nestjs/testing';
import {expect} from 'chai';
import {SinonSandbox, SinonStub} from 'sinon';
import * as sinon from "Sinon";
import {GameModule} from '../../game/game.module';
import {GameService} from '../../game/services/game.service';
import {Player} from 'extreme-startup-core/lib/common/player';
import {HttpQuestionSender} from 'extreme-startup-core/lib/common/http-question.sender';
import {IPlayer} from 'extreme-startup-core/lib/common/interfaces/player.interface';

describe('RegistrationService', () => {
  let sandbox: SinonSandbox;
  let service: RegistrationService;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(() => {
    Test.createTestingModule({
      modules: [
        GameModule
      ],
      components: [
        RegistrationService
      ]
    });
  });

  beforeEach(() => {
    service = Test.get(RegistrationService);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('getAll()', () => {

  });

  describe('#register()', () => {
    it('should call GameService.addPlayer()', () => {
      const addPlayerStub: SinonStub = sandbox.stub(GameService.prototype, 'addPlayer');
      const nickname: string = 'nickname';
      const hostname: string = 'hostname';
      service.register({ nickname, hostname });
      expect(addPlayerStub.calledWith(new Player(nickname, new HttpQuestionSender(hostname)))).to.be.true;
    });

    it('should return the created Player', () => {
      const nickname: string = 'nickname';
      const hostname: string = 'hostname';
      const player: IPlayer = new Player(nickname, new HttpQuestionSender(hostname));
      sandbox.stub(GameService.prototype, 'addPlayer').callsFake(() => player);
      expect(service.register({ nickname, hostname })).to.be.deep.equal(player);
    });
  });
});
