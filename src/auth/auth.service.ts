import { Injectable } from '@nestjs/common';
import { Account } from 'src/shared/account.entity';
import { KeycloakApiService } from 'src/shared/KeycloakService.service';

@Injectable()
export class AuthService {
  constructor(private KeycloackApiService: KeycloakApiService) {}
  async login(account: Account) {
    const a = await this.KeycloackApiService.getUserToken(
      account.username,
      account.password,
    ).toPromise();
    return a.data;
  }
}
