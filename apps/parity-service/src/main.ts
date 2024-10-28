import { NestFactory } from '@nestjs/core';
import { ParityServiceModule } from './parity-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { envs } from 'config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Main-Parity');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ParityServiceModule, 
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
        queue: 'parity_queue',
        queueOptions: {
          durable: true,
        },
      },
    });

  await app.listen();
  logger.log(`ParityMS is running on port ${envs.rabbitMq_default_port}`);
}
bootstrap();
