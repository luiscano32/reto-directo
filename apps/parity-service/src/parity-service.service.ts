import { Injectable } from '@nestjs/common';

@Injectable()
export class ParityServiceService {
  
  isEven(number: number): boolean {
    return number % 2 === 0;
  }

}
