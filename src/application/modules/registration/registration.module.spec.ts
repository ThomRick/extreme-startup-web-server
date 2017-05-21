import {NestFactory} from '@nestjs/core';
import {RegistrationModule} from './registration.module';
import * as request from 'supertest';
import {expect} from 'chai';
import {ExpressAdapter} from '@nestjs/core/adapters/express-adapter';
import {Application} from 'express';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';

describe('RegistrationModule', () => {
  let instance: Application;

  before(() => {
    instance = ExpressAdapter.create();
    const application: INestApplication = NestFactory.create(RegistrationModule, instance);
    application.listen(8080, () => console.log('Application listening at port 8080'));
  });

  it('should expose GET /api/registrations endpoint', done => {
    request(instance)
      .get('/api/registrations')
      .end((error, response) => {
        expect(response.status).to.not.be.equal(404);
        done();
      });
  });

  it('should expose POST /api/registrations endpoint', done => {
    request(instance)
      .post('/api/registrations')
      .end((error, response) => {
        expect(response.status).to.not.be.equal(404);
        done();
      });
  })
});
