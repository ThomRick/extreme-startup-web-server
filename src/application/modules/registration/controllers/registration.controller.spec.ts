import {RegistrationController} from './registration.controller';
import {Test} from '@nestjs/testing';
import {expect} from 'chai';
import * as httpMocks from 'node-mocks-http';
import {EventEmitter} from 'events';
import {SinonSandbox, SinonStub} from 'sinon';
import * as sinon from "Sinon";
import {RegistrationService} from '../services/registration.service';
import {RegistrationModule} from '../registration.module';

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

  });

  describe('#create()', () => {
    it('should call RegistrationService.register() with the expected parameters', done => {
      const registerStub: SinonStub = sandbox.stub(Test.get(RegistrationService), 'register').callsFake(() => Promise.resolve());
      const request: httpMocks.MockRequest = httpMocks.createRequest({
        body: {
          nickname: 'nickname',
          hostname: 'hostname'
        }
      });
      const response: httpMocks.MockResponse = httpMocks.createResponse({
        eventEmitter: EventEmitter
      }).on('end', () => {
        expect(registerStub.calledOnce).to.be.true;
        done();
      });
      controller.create(request.body, response);
    });
  });
});
