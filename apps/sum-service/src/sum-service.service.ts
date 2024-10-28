import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {

  /**
   * Calcula la suma de todos los enteros desde 1 hasta n.
   * @param {number} n - Número límite.
   * @returns {number} - La suma de los enteros desde 1 hasta n.
   */
  sum(n: number): number {
    // uso de fórmula: (n * (n + 1)) / 2
    return (n * (n + 1)) / 2;
  }
}
