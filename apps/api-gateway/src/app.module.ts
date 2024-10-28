import { Module } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ApiGatewayController } from './api-gateway.controller';

@Module({
  imports: [],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class AppModule {}
