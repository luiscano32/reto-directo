import { Injectable } from '@nestjs/common';

@Injectable()
export class PrimalityServiceService {

  /**
   * Verifica si un número dado es primo.
   * @param {number} number - Número a verificar.
   * @returns {boolean} - Devuelve `true` si el número es primo, `false` en caso contrario.
   */
  isPrime(n: number): boolean {

    // excluye valores inferuores a 2
    if (n < 2) return false;

    // se itera desde 2 hasta la raíz cuadrada del número.
    // si se encuentra divisor, el número no es primo.
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    
    return true;
  }
}
