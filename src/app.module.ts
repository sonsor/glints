import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import {ConfigModule} from "@nestjs/config";
import { DatabaseService } from './database/database.service';
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [
      ConfigModule.forRoot({
        load: [configuration],
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useClass: DatabaseService,
      })
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
