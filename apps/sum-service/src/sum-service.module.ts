import { Module } from '@nestjs/common';
import { SumServiceController } from './sum-service.controller';
import { SumServiceService } from './sum-service.service';

@Module({
  imports: [],
  controllers: [SumServiceController],
  providers: [SumServiceService],
})
export class SumServiceModule {}
