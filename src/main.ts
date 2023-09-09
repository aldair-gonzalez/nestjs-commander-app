import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  await CommandFactory.run(AppModule, { logger: new Logger() });
  const envFileName = process.env.ENV_FILE_NAME;
  if (envFileName)
    Logger.log(`Utilizando archivo .env: ${envFileName}`, 'Config');
  else Logger.warn('No se especificó un archivo .env', 'Config');
}

bootstrap();
