import { Controller, Get } from '@nestjs/common';
import { SumServiceService } from './sum-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class SumServiceController {
  constructor(private readonly sumServiceService: SumServiceService) {}

  @EventPattern({ cmd: 'calculate_sum' })
  calculateSum(@Payload() data: number): number {
    return this.sumServiceService.sum(data);
  }
}
