import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorsServiceService {


  /**
   * Encuentra todos los factores de un número.
   * @param {number} n - El número para el cual encontrar los factores.
   * @returns {number[]} - Un arreglo con los factores del número dado.
   */
  factors(n: number): number[] {

    const factors = [];

    // iteración hasta la raíz cuadrada de n para encontrar factores en pares
    for (let i = 1; i <= Math.sqrt(n); i++) {

      if (n % i === 0) {
        
        // se agrega el divisor i
        factors.push(i);
        
        // si i no es igual a n / i, se agrega también el par
        if (i !== n / i) {
          factors.push(n / i);
        }
      }

    }
    
    // se ordenan los factores de manera ascendente
    return factors.sort((a, b) => a - b);
  }
}
