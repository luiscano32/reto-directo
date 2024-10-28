import { Controller } from '@nestjs/common';
import { ParityServiceService } from './parity-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ParityServiceController {
  constructor(private readonly parityServiceService: ParityServiceService) {}

  @EventPattern({ cmd: 'calculate_parity' })
  isEven(@Payload() data: number): boolean {
    return this.parityServiceService.isEven(data);
  }
}
