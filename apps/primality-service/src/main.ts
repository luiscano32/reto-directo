import { NestFactory } from '@nestjs/core';
import { PrimalityServiceModule } from './primality-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { envs } from 'config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Main-PrimalityMS');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PrimalityServiceModule, 
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
        queue: 'primality_queue',
        queueOptions: {
          durable: true,
        },
      },
    });

  await app.listen();
  logger.log(`PrimalityMicroservice running`);
}
bootstrap();
