import { Module } from '@nestjs/common';
import { ParityServiceController } from './parity-service.controller';
import { ParityServiceService } from './parity-service.service';

@Module({
  imports: [],
  controllers: [ParityServiceController],
  providers: [ParityServiceService],
})
export class ParityServiceModule {}
