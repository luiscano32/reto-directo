import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorsServiceService {
  factors(n: number): number[] {
    const factors = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) factors.push(i);
    }
    return factors;
  }
}
