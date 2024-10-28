import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciServiceService {

  /**
   * Calcula el valor de la secuencia de Fibonacci para un número dado.
   * @param {number} n - La posición en la secuencia de Fibonacci.
   * @returns {number} - El valor correspondiente en la secuencia de Fibonacci.
   */
  calculateFibonacci(n): number {

    // si n es 0 o 1, se devuelve n directamente
    if (n <= 1) return n;

    // variables para almacenar los dos valores anteriores en la secuencia
    let a = 0;
    let b = 1

    // iteración desde 2 hasta n, actualizando los valores
    for (let i = 2; i <= n; i++) {
      
      // se calcula el siguiente valor en la secuencia y se actualizan valores
      const temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }
}
