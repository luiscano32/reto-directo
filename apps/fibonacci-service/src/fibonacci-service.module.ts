import { Module } from '@nestjs/common';
import { FibonacciServiceController } from './fibonacci-service.controller';
import { FibonacciServiceService } from './fibonacci-service.service';

@Module({
  imports: [],
  controllers: [FibonacciServiceController],
  providers: [FibonacciServiceService],
})
export class FibonacciServiceModule {}
