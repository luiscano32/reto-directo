import { Controller, Get } from '@nestjs/common';
import { FactorsServiceService } from './factors-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class FactorsServiceController {
  constructor(private readonly factorsServiceService: FactorsServiceService) {}

  @EventPattern({ cmd: 'calculate_factors' })
  calculateFactors(@Payload() data: number): number[] {
    return this.factorsServiceService.factors(data);
  }
}
