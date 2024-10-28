import { Controller, Get } from '@nestjs/common';
import { FactorialAppService } from './factorial-app.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class FactorialAppController {
  constructor(private readonly factorialAppService: FactorialAppService) {}

  @EventPattern({ cmd: 'calculate_factorial' })
  calculateFactorial(@Payload() data: number): number {
    return this.factorialAppService.factorial(data);
  }
}
