import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciServiceService {
  calculateFibonacci(n): number {
    if (n <= 1) return n;
    return this.calculateFibonacci(n - 1) + this.calculateFibonacci(n - 2);
  }
}
