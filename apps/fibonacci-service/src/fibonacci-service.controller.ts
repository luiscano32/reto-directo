import { Controller, Get } from '@nestjs/common';
import { FibonacciServiceService } from './fibonacci-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class FibonacciServiceController {
  constructor(private readonly fibonacciServiceService: FibonacciServiceService) {}

  @EventPattern({ cmd: 'calculate_fibonacci' })
  calculateFibonacci(@Payload() data: number): number {
    return this.fibonacciServiceService.calculateFibonacci(data);
  }
}
