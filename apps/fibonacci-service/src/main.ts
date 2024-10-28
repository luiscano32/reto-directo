import { NestFactory } from '@nestjs/core';
import { FibonacciServiceModule } from './fibonacci-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { envs } from 'config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  // genera logger para sección de main del microservicio factors
  const logger = new Logger('Main-FibonacciMS');

  /**
   * Configuración de conexión con RabbitMQ.
   * Utiliza las credenciales y parámetros definidos en las variables de entorno
   * - transport: Define el transporte como RMQ (RabbitMQ)
   * - options: Configura la URL de conexión y las opciones de la cola
   */
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
