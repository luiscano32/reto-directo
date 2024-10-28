import { Injectable } from '@nestjs/common';

@Injectable()
export class SumServiceService {
  sum(n: number): number {
    return (n * (n + 1)) / 2;
  }
}
