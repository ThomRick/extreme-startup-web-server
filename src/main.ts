import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './application/application.module';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';
import {Application} from 'express';
import * as express from 'express';
import * as bodyParser from 'body-parser';

class ApplicationStarter {
  public static main(args: any): void {
    const instance: Application = express();
    ApplicationStarter.deployExternalMiddleware(instance);
    const application: INestApplication = NestFactory.create(ApplicationModule, instance);
    ApplicationStarter.start(application);
  }

  private static start(application: INestApplication) {
    application.listen(8080, () => {
      console.log('Extreme Startup Application server is listening at port 8080');
    });
  }

  private static deployExternalMiddleware(instance: Application) {
    instance.use(bodyParser.json());
  }
}
ApplicationStarter.main(process.argv);

