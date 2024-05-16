import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassHandlerService } from './pass-handler.service';
import { CreatePassHandlerDto } from './dto/create-pass-handler.dto';
import { UpdatePassHandlerDto } from './dto/update-pass-handler.dto';

@Controller('pass-handler')
export class PassHandlerController {
  constructor(private readonly passHandlerService: PassHandlerService) {}

  @Post()
  create(@Body() createPassHandlerDto: CreatePassHandlerDto) {
    return this.passHandlerService.create(createPassHandlerDto);
  }

  @Get()
  findAll() {
    return this.passHandlerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passHandlerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassHandlerDto: UpdatePassHandlerDto) {
    return this.passHandlerService.update(+id, updatePassHandlerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passHandlerService.remove(+id);
  }
}
