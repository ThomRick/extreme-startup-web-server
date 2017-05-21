import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './application/application.module';
import {INestApplication} from '@nestjs/common/interfaces/nest-application.interface';

class ApplicationStarter {
  public static main(args: any): void {
    const application: INestApplication = NestFactory.create(ApplicationModule);
    application.listen(8080, () => {
      console.log('Extreme Startup Application server is listening at port 8080');
    });
  }
}
ApplicationStarter.main(process.argv);

