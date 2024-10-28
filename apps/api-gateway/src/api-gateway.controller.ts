import { Controller, Get, Query } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller()
export class ApiGatewayController {

  constructor(
    private readonly apiGatewayService: ApiGatewayService
  ) {}

  /**
   * Ejecuta servicios para procesar número dado.
   * @param {number} n - El número pasado como parámetro de consulta.
   * @returns {Promise<{ isEven: boolean }>} - Objeto que indica si el número es par.
   */
  @Get('/calculate')
  async calculate(@Query('n') n: number) {
    const result = await this.apiGatewayService.processNumber(n);
    return result;
  }
}
