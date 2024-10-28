import { Controller, Get } from '@nestjs/common';
import { FactorsServiceService } from './factors-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class FactorsServiceController {

  constructor(
    private readonly factorsServiceService: FactorsServiceService    
  ) {}

  /**
   * Escucha mensajes para obtener factores de número dado.
   * @param {number} n - El número pasado como parámetro de consulta.
   * @returns {number[]} - Factores de número recibido.
   */
  @EventPattern({ cmd: 'calculate_factors' })
  calculateFactors(@Payload() data: number): number[] {
    return this.factorsServiceService.factors(data);
  }
}
