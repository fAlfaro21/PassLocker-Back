import { Injectable } from '@nestjs/common';
import { CreatePassHandlerDto } from './dto/create-pass-handler.dto';
import { UpdatePassHandlerDto } from './dto/update-pass-handler.dto';

@Injectable()
export class PassHandlerService {
  create(createPassHandlerDto: CreatePassHandlerDto) {
    return 'This action adds a new passHandler';
  }

  findAll() {
    return `This action returns all passHandler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passHandler`;
  }

  update(id: number, updatePassHandlerDto: UpdatePassHandlerDto) {
    return `This action updates a #${id} passHandler`;
  }

  remove(id: number) {
    return `This action removes a #${id} passHandler`;
  }
}
