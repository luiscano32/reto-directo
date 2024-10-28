import { Controller, Get } from '@nestjs/common';
import { SumServiceService } from './sum-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class SumServiceController {

  constructor(
    private readonly sumServiceService: SumServiceService
  ) {}

  /**
   * Escucha mensajes para calcular la suma de todos los enteros desde 1 hasta n.
   * @param {number} n - El número pasado como parámetro de consulta.
   * @returns {number} - La suma de los enteros desde 1 hasta n.
   */
  @EventPattern({ cmd: 'calculate_sum' })
  calculateSum(@Payload() data: number): number {
    return this.sumServiceService.sum(data);
  }
}
