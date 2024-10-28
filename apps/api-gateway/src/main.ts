import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { envs } from 'config/envs';
import { Logger } from '@nestjs/common';

async function bootstrap() {

  // genera logger para sección de main del gateway
  const logger = new Logger('Main-Gateway');

  const app = await NestFactory.create(AppModule);
  
  /**
   * Configuración de conexión con RabbitMQ.
   * Utiliza las credenciales y parámetros definidos en las variables de entorno
   * - transport: Define el transporte como RMQ (RabbitMQ)
   * - options: Configura la URL de conexión y las opciones de la cola
   */
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
      queue: 'api_gateway_queue',
      queueOptions: {
        durable: true,
      },
    },
  });

  // inicialización de todos los microservicios conectados
  await app.startAllMicroservices();
  // inicialización de API Gateway en el puerto definido en las variables de entorno
  await app.listen(envs.apiGatewayPort);

  logger.log(`Gateway is running`);
}
bootstrap();
