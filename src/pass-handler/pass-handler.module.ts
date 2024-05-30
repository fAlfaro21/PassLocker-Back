import { Module } from '@nestjs/common';
import { PassHandlerService } from './pass-handler.service';
import { PassHandlerController } from './pass-handler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Password } from './entities/pass-handler.entity';

@Module({
  controllers: [PassHandlerController],
  providers: [PassHandlerService],
  imports: [
    //Para reflejarlo como tabla en la BBDD
    TypeOrmModule.forFeature([ Password ]), //Lleva el nombre de la entidad
  ],
  exports: [
    PassHandlerService,
    TypeOrmModule //en el caso que de quiera trabajar en otro módulo con la entidad Password
  ],
})
export class PassHandlerModule {}
