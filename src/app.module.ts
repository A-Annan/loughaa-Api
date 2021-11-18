/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from './schedule/schedule.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { AssignementsModule } from './assignements/assignements.module';
import { GroupsModule } from './groups/groups.module';
import { LevelsModule } from './levels/levels.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MeetModule } from './meet/meet.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  AuthGuard,
  KeycloakConnectModule,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { KeycloakApiModuleModule } from './keycloak-api-module/keycloak-api-module.module';
import { QuizModule } from './quiz/quiz.module';
import { AttendanceModule } from './attendance/attendance.module';

const keyCloakOptionsProvider = {
  provide: 'keyCloakDataProvider',
  useFactory: (config: ConfigService) => {
    return {
      authServerUrl: config.get('server_url'),
      realm: config.get('realm'),
      clientId: config.get('clientId'),
      secret: config.get('client_secret'),
    };
  },
  inject: [ConfigService],
};
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost/loughaa', {
      connectionFactory: (connection) => {
        connection.plugin(require('mongoose-autopopulate'));
        return connection;
      },
    }),
    ScheduleModule,
    TeachersModule,
    StudentsModule,
    AssignementsModule,
    GroupsModule,
    LevelsModule,
    MeetModule,
    KeycloakConnectModule.registerAsync(keyCloakOptionsProvider),
    AuthModule,
    KeycloakApiModuleModule,
    QuizModule,
    AttendanceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    // This adds a global level resource guard, which is permissive.
    // Only controllers annotated with @Resource and methods with @Scopes
    // are handled by this guard.
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    // New in 1.1.0
    // This adds a global level role guard, which is permissive.
    // Used by `@Roles` decorator with the optional `@AllowAnyRole` decorator for allowing any
    // specified role passed.
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
