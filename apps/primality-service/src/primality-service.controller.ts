import { Controller, Get } from '@nestjs/common';
import { PrimalityServiceService } from './primality-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class PrimalityServiceController {

  constructor(
    private readonly primalityServiceService: PrimalityServiceService
  ) {}

  /**
   * Escucha mensajes para verificar si un número es primo.
   * @param {number} n - El número pasado como parámetro de consulta.
   * @returns {boolean} - Valor que indica si el número es primo.
   */
  @EventPattern({ cmd: 'calculate_primality' })
  isPrime(@Payload() data: number): boolean {
    return this.primalityServiceService.isPrime(data);
  }
}
