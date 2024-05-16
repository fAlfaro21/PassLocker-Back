import { Module } from '@nestjs/common';
import { PassHandlerService } from './pass-handler.service';
import { PassHandlerController } from './pass-handler.controller';

@Module({
  controllers: [PassHandlerController],
  providers: [PassHandlerService],
})
export class PassHandlerModule {}
