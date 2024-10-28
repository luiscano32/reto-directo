import { Controller, Get } from '@nestjs/common';
import { FibonacciServiceService } from './fibonacci-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class FibonacciServiceController {

  constructor(
    private readonly fibonacciServiceService: FibonacciServiceService
  ) {}

  /**
   * Escucha mensajes para obtener valor de secuencia Fibonacci para número dado.
   * @param {number} n - El número pasado como parámetro de consulta.
   * @returns {number} - Valor correspondiente de secuencia fibonacci.
   */
  @EventPattern({ cmd: 'calculate_fibonacci' })
  calculateFibonacci(@Payload() data: number): number {
    return this.fibonacciServiceService.calculateFibonacci(data);
  }
}
