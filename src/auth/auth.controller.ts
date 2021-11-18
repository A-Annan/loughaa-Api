import { Controller, Post, Body } from '@nestjs/common';
import { Resource, Unprotected } from 'nest-keycloak-connect';
import { Account } from 'src/shared/account.entity';
import { AuthService } from './auth.service';

@Controller('auth')
@Resource('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Unprotected()
  @Post()
  login(@Body() account: Account) {
    return this.authService.login(account);
  }
}
