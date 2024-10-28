import { Controller, Get, Query } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  async calculate(@Query('n') n: number) {
    const result = await this.apiGatewayService.processNumber(n);
    return result;
  }
}
