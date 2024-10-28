import { Module } from '@nestjs/common';
import { FactorsServiceController } from './factors-service.controller';
import { FactorsServiceService } from './factors-service.service';

@Module({
  imports: [],
  controllers: [FactorsServiceController],
  providers: [FactorsServiceService],
})
export class FactorsServiceModule {}
