import { NestFactory } from '@nestjs/core';
import { FibonacciServiceModule } from './fibonacci-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { envs } from 'config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Main-FibonacciMS');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FibonacciServiceModule, 
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
        queue: 'fibonacci_queue',
        queueOptions: {
          durable: true,
        },
      },
    });

  await app.listen();
  logger.log(`FibonacciMicroservice is running`);
}
bootstrap();
