import { Controller, Get } from '@nestjs/common';
import { PrimalityServiceService } from './primality-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class PrimalityServiceController {
  constructor(private readonly primalityServiceService: PrimalityServiceService) {}

  @EventPattern({ cmd: 'calculate_primality' })
  calculatePrimality(@Payload() data: number): boolean {
    return this.primalityServiceService.isPrime(data);
  }
}
