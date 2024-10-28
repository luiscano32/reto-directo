import { Module } from '@nestjs/common';
import { FactorialAppController } from './factorial-app.controller';
import { FactorialAppService } from './factorial-app.service';

@Module({
  imports: [],
  controllers: [FactorialAppController],
  providers: [FactorialAppService],
})
export class FactorialAppModule {}
