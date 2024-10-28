import { Module } from '@nestjs/common';
import { PrimalityServiceController } from './primality-service.controller';
import { PrimalityServiceService } from './primality-service.service';

@Module({
  imports: [],
  controllers: [PrimalityServiceController],
  providers: [PrimalityServiceService],
})
export class PrimalityServiceModule {}
