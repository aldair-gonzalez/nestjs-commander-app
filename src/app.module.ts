import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCommand } from './config/command';
import { BasicQuestions } from './config/questions';
import { ConfigModule } from '@nestjs/config';
import { CommandRunnerModule } from 'nest-commander';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.ENV_FILE_NAME}`,
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    CommandRunnerModule,
  ],
  controllers: [AppController],
  providers: [BasicCommand, BasicQuestions, AppService],
})
export class AppModule {}
