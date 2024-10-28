import { Controller, Get } from '@nestjs/common';
import { FactorialAppService } from './factorial-app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class FactorialAppController {

  constructor(
    private readonly factorialAppService: FactorialAppService
  ) {}

  /**
   * Escucha mensajes del patrón 'calculate_factorial' para calcular el factorial.
   * @param {number} n - El número recibido como mensaje.
   * @returns {number} - El factorial del número recibido.
   */
  @EventPattern({ cmd: 'calculate_factorial' })
  calculateFactorial(@Payload() data: number): number {
    return this.factorialAppService.factorial(data);
  }
}
