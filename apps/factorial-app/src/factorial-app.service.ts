import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorialAppService {

  /**
   * Calcula el factorial de un número.
   * @param {number} n - Número para el cual calcular el factorial.
   * @returns {number} - El factorial del número dado.
   */
  factorial(n: number): number {

    let result = 1;

    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    
    return result;
  }
}
