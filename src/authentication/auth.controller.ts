import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@ApiTags('User authentication')
@Controller('auth')
export class AuthController {
    constructor( private readonly authService: AuthService ){};

    @Post('register')
    @ApiResponse({ status: 201, description: 'User was registered', type: User })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiResponse({ status: 403, description: 'Forbbiden. Token related' })
    createUser(@Body() createUserDto: CreateUserDto) {
      return this.authService.create(createUserDto);
    }

    @Post('login')
    loginUser(@Body() loginUserDto: LoginUserDto) {
      return this.authService.login(loginUserDto);
    }
}


