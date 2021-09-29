import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagModule } from './tag/tag.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DBConfigurationService } from './database/DBConfiguration.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TagModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      useClass: DBConfigurationService,
      inject: [DBConfigurationService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DBConfigurationService],
})
export class AppModule {}
