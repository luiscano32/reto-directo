import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { envs } from 'config/envs';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ApiGatewayService {
    
    private factorsClient: ClientProxy;
    private factorialClient: ClientProxy;
    private fibonacciClient: ClientProxy;
    private parityClient: ClientProxy;
    private primalityClient: ClientProxy;
    private sumClient: ClientProxy;
    
    constructor() {
        
        this.factorsClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
                queue: 'factors_queue',
                queueOptions: { durable: true },
            },
        });
        
        this.factorialClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
                queue: 'factorial_queue',
                queueOptions: { durable: true },
            },
        });

        this.fibonacciClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
                queue: 'fibonacci_queue',
                queueOptions: { durable: true },
            },
        });

        this.parityClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
                queue: 'parity_queue',
                queueOptions: { durable: true },
            },
        });

        this.primalityClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
                queue: 'primality_queue',
                queueOptions: { durable: true },
            },
        });

        this.sumClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@localhost:${envs.rabbitMq_default_port}`],
                queue: 'sum_queue',
                queueOptions: { durable: true },
            },
        });
    }

    async processNumber(n: number) {
        
        const responses = await Promise.all([
            firstValueFrom(this.factorsClient.send({ cmd: 'calculate_factors' }, n)),
            firstValueFrom(this.factorialClient.send({ cmd: 'calculate_factorial' }, n)),
            firstValueFrom(this.fibonacciClient.send({ cmd: 'calculate_fibonacci' }, n)),
            firstValueFrom(this.parityClient.send({ cmd: 'calculate_parity' }, n)),
            firstValueFrom(this.primalityClient.send({ cmd: 'calculate_primality' }, n)),
            firstValueFrom(this.sumClient.send({ cmd: 'calculate_sum' }, n)),
        ]);
        
        const [
            factors,
            factorial,
            fibonacci,
            isPair,
            isPrime,
            sumN,
        ] = responses;
        
        return {
          isPair,
          isPrime,
          factorial,
          sumN,
          factors,
          fibonacci,
        };
    }

}
