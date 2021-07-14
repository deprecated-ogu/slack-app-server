import { Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { MiddlewareBuilder } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareBuilder): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
