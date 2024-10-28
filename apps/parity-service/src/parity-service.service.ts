import { Injectable } from '@nestjs/common';

@Injectable()
export class ParityServiceService {
  
  /**
   * Verifica si un número es par.
   * @param {number} number - Número a verificar.
   * @returns {boolean} - Devuelve `true` si el número es par, `false` en caso contrario.
   */
  isEven(number: number): boolean {
    // uso del operador % (módulo) para dividir el número entre 2
    // si el residuo es 0, el número es par
    return number % 2 === 0;
  }

}
