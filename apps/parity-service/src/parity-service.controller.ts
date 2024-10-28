import { Controller } from '@nestjs/common';
import { ParityServiceService } from './parity-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ParityServiceController {

  constructor(
    private readonly parityServiceService: ParityServiceService
  ) {}

  /**
   * Escucha mensajes para verificar si un número es par.
   * @param {number} n - El número pasado como parámetro de consulta.
   * @returns {boolean} - Valor que indica si el número es par.
   */
  @EventPattern({ cmd: 'calculate_parity' })
  isEven(@Payload() data: number): boolean {
    return this.parityServiceService.isEven(data);
  }
}
