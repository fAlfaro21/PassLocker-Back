import { IsEmail, IsIn, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { SqlInMemory } from "typeorm/driver/SqlInMemory";

export class CreateUserDto{

    @ApiProperty({
        example: 'emailsample@gmail.com',
        description: 'User email address',
        format: 'string',
        uniqueItems: true
    })
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty({
        example: 'Abc123',
        description: 'User password',
        format: 'string',
        minLength: 6,
        maxLength: 50
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @ApiProperty({
        example: 'Pedro del Hierro',
        description: 'User fullname',
        format: 'string',
        minLength: 1,
    })
    @IsString()
    @MinLength(1)
    fullName: string;

    @ApiProperty({
        example: 'individual',
        description: 'Type of user',
        format: 'string',
        default: 'individual'
    })
    @IsIn(['individual','professional','pyme','organization'])
    userType: string;

}