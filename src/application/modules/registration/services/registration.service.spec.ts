import {RegistrationService} from './registration.service';
import {Test} from '@nestjs/testing';

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
    expect(service).toBeDefined();
  });
});
