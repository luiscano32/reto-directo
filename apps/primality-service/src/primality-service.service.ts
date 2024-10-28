import { Injectable } from '@nestjs/common';

@Injectable()
export class PrimalityServiceService {
  isPrime(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}
