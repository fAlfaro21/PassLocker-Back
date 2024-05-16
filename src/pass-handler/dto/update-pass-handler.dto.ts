import { PartialType } from '@nestjs/mapped-types';
import { CreatePassHandlerDto } from './create-pass-handler.dto';

export class UpdatePassHandlerDto extends PartialType(CreatePassHandlerDto) {}
