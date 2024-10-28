import { NestFactory } from '@nestjs/core';
import { FactorsServiceModule } from './factors-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { envs } from 'config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  const logger = new Logger('Main-FactorsMS');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FactorsServiceModule, 
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
        queue: 'factors_queue',
        queueOptions: {
          durable: true,
        },
      },
    });

  await app.listen();
  logger.log(`FactorsMicroservice running on port ${envs.factorialMicroservicePort}`);
}
bootstrap();
