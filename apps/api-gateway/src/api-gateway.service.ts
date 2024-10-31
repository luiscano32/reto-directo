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
    /**
     * Inicializa los diferentes clientes de RabbitMQ para los microservicios.
     * Cada microservicio está vinculado a su cola específica en RabbitMQ.
     */
    constructor() {
        
        // Cliente para el servicio de factores
        this.factorsClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
                queue: 'factors_queue',
                queueOptions: { durable: true },
            },
        });
        
        // Cliente para el servicio de cálculo factorial
        this.factorialClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
                queue: 'factorial_queue',
                queueOptions: { durable: true },
            },
        });

        // Cliente para el servicio de cálculo de Fibonacci
        this.fibonacciClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
                queue: 'fibonacci_queue',
                queueOptions: { durable: true },
            },
        });

        // Cliente para el servicio de paridad (par o impar)
        this.parityClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
                queue: 'parity_queue',
                queueOptions: { durable: true },
            },
        });

        // Cliente para el servicio de primalidad (número primo o no)
        this.primalityClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
                queue: 'primality_queue',
                queueOptions: { durable: true },
            },
        });

        // Cliente para el servicio de suma
        this.sumClient = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: [`amqp://${envs.rabbitMq_default_user}:${envs.rabbitMq_default_pass}@${envs.rabbitMq_default_domain}:${envs.rabbitMq_default_port}`],
                queue: 'sum_queue',
                queueOptions: { durable: true },
            },
        });
    }

    /**
     * processNumber: Llama a los microservicios para procesar un número.
     * 
     * @param n - El número a procesar.
     * @returns Un objeto con los resultados de los diferentes cálculos realizados por los microservicios.
     */
    async processNumber(n: number) {
        
        const responses = await Promise.all([
            firstValueFrom(this.factorsClient.send({ cmd: 'calculate_factors' }, n)),
            firstValueFrom(this.factorialClient.send({ cmd: 'calculate_factorial' }, n)),
            firstValueFrom(this.fibonacciClient.send({ cmd: 'calculate_fibonacci' }, n)),
            firstValueFrom(this.parityClient.send({ cmd: 'calculate_parity' }, n)),
            firstValueFrom(this.primalityClient.send({ cmd: 'calculate_primality' }, n)),
            firstValueFrom(this.sumClient.send({ cmd: 'calculate_sum' }, n)),
        ]);
        
        // Desestructuración de las respuestas de los microservicios
        const [
            factors,
            factorial,
            fibonacci,
            isPair,
            isPrime,
            sumN,
        ] = responses;
        
        // Retorna los resultados en un objeto con las diferentes métricas
        return {
            isPair,      // Indica si el número es par
            isPrime,     // Indica si el número es primo
            factorial,   // Factorial del número
            sumN,        // Suma de los números hasta 'n'
            factors,     // Factores del número
            fibonacci,   // Valor de Fibonacci para 'n'
        };
    }

}
