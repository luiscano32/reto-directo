import { NestFactory } from '@nestjs/core';
import { FactorialAppModule } from './factorial-app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { envs } from 'config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Main-FactorialMS');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FactorialAppModule, 
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
        queue: 'factorial_queue',
        queueOptions: {
          durable: true,
        },
      },
    });

  await app.listen();
  logger.log(`FactorialMicroservice is running`);
}

bootstrap();
