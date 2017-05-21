import {RegistrationService} from './registration.service';
import {Test} from '@nestjs/testing';
import {expect} from 'chai';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(() => {
    Test.createTestingModule({
      components: [
        RegistrationService
      ]
    });
  });

  beforeEach(() => {
    service = Test.get(RegistrationService);
  });

  it('should be created', () => {
    expect(service).to.exist;
  });
});
