import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as generator from 'generate-password';
import { CreatePassHandlerDto } from './dto/create-pass-handler.dto';
import { UpdatePassHandlerDto } from './dto/update-pass-handler.dto';

@Injectable()
export class PassHandlerService {
  create(createPassHandlerDto: CreatePassHandlerDto) {
    
    const password = generator.generate({
      length: createPassHandlerDto.passwordLength,
      numbers: createPassHandlerDto.containNumbers,
      symbols: createPassHandlerDto.containSymbols,
      lowercase: createPassHandlerDto.containLowercases,
      uppercase: createPassHandlerDto.containUppercases,
    });

    const encryptedPassword = bcrypt.hashSync( password, 10);

    return { password, encryptedPassword };
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
