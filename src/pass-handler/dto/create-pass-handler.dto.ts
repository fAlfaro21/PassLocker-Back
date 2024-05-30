import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreatePassHandlerDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    serviceName: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    serviceUserName: string;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    passwordLength: number;

    @IsOptional()
    @IsBoolean()
    containNumbers?: boolean;

    @IsOptional()
    @IsBoolean()
    containSymbols?: boolean;

    @IsOptional()
    @IsBoolean()
    containLowercases?: boolean;

    @IsOptional()
    @IsBoolean()
    containUppercases?: boolean;

}
