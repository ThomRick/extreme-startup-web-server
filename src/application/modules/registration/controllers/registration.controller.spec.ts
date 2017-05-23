import {RegistrationController} from './registration.controller';
import {Test} from '@nestjs/testing';
import {expect} from 'chai';
import * as httpMocks from 'node-mocks-http';
import {EventEmitter} from 'events';
import {SinonSandbox, SinonStub} from 'sinon';
import * as sinon from 'Sinon';
import {RegistrationService} from '../services/registration.service';
import {IPlayer} from 'extreme-startup-core/lib/common/interfaces/player.interface';
import {Player} from 'extreme-startup-core/lib/common/player';
import {HttpQuestionSender} from 'extreme-startup-core/lib/common/http-question.sender';

describe('RegistrationController', () => {
  let sandbox: SinonSandbox;
  let controller: RegistrationController;

  beforeEach(() => {
    Test.createTestingModule({
      controllers: [
        RegistrationController
      ],
      components: [
        { provide: RegistrationService, useValue: { register: () => {} } }
      ]
    });
  });

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  beforeEach(() => {
    controller = Test.get(RegistrationController);
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#getAll()', () => {
    it.skip('should call RegistrationService.getAll()', () => {

    });
  });

  describe('#getByNickname()', () => {
    it('should call RegistrationService.getByNickname()', () => {

    });
  });

  describe('#create()', () => {
    const player: IPlayer = new Player('nickname', new HttpQuestionSender('hostname'));

    let registerStub: SinonStub;
    let request: httpMocks.MockRequest;
    let response: httpMocks.MockResponse;

    beforeEach(() => {
      request = httpMocks.createRequest({
        body: {
          nickname: 'nickname',
          hostname: 'hostname'
        }
      });
      response = httpMocks.createResponse({
        eventEmitter: EventEmitter
      });
    });

    beforeEach(() => {
      registerStub = sandbox.stub(Test.get(RegistrationService), 'register').callsFake(() => player);
    });

    it('should call RegistrationService.register() with the expected parameters', done => {
      response.on('end', () => {
        expect(registerStub.calledOnce).to.be.true;
        done();
      });
      controller.create(request.body, response);
    });

    it('should return the user created', done => {
      response.on('end', () => {
        expect(response._isJSON()).to.be.true;
        expect(JSON.parse(response._getData())).to.be.deep.equal(player);
        done();
      });
      controller.create(request.body, response);
    });
  });
});
