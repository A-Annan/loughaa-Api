import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { KeycloakApiModuleModule } from 'src/keycloak-api-module/keycloak-api-module.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [KeycloakApiModuleModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
