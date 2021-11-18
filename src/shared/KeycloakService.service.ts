import { HttpException, Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { catchError, map, Observable } from 'rxjs';
import { keycloakUserSchema } from './KeycloackUserSchema.entity';

export class Client {
  name: string;
  clientId: string;
  secret: string;
}
type Role = any;

@Injectable()
export class KeycloakApiService {
  server_url: string;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.server_url = this.configService.get('server_url');
    console.log('hi', this.configService.get('server_url'));
  }
  getKeyCloackUsers(
    realm: string,
    accessTokenJWT: string,
  ): Observable<AxiosResponse> {
    return this.httpService.get(
      `${this.server_url}/admin/realms/${realm}/users`,
      {
        headers: {
          Authorization: `Bearer ${accessTokenJWT}`,
        },
      },
    );
  }

  createUser(
    data: keycloakUserSchema,
    realm: string,
    accessTokenJWT: string,
  ): Observable<AxiosResponse> {
    // data.credentials = { ...data.credentials };
    data.access = { ...data.access };
    return this.httpService.post(
      `${this.server_url}/admin/realms/${realm}/users`,
      { ...data },
      {
        headers: {
          Authorization: `${accessTokenJWT}`,
        },
      },
    );
  }

  addRoleToUser(
    keycloakUserId: string,
    roles: Array<Role>,
    realm: string,
    accessTokenJWT,
  ): Observable<AxiosResponse> {
    roles = roles.map((ele: Role) => ({ id: ele.keyCloakId, name: ele.name }));

    return this.httpService.post(
      `${this.server_url}/admin/realms/${realm}/users/${keycloakUserId}/role-mappings/realm`,
      roles,
      {
        headers: {
          Authorization: `${accessTokenJWT}`,
        },
      },
    );
  }
  deleteUserRoles(
    keyCloakUserId: string,
    roles: Array<Role>,
    realm: string,
    accessTokenJWT: string,
  ): Observable<AxiosResponse> {
    roles = roles.map((ele: Role) => ({
      name: ele.name,
      id: ele.keyCloakId,
      description: 'role desc',
      composite: false,
      clientRole: false,
      containerId: realm,
    }));
    return this.httpService.delete(
      `${this.server_url}/admin/realms/${realm}/users/${keyCloakUserId}/role-mappings/realm`,
      {
        headers: {
          Authorization: `${accessTokenJWT}`,
        },
        data: roles,
      },
    );
  }
  createRealmRole(
    name: string,
    realm: string,
    accessTokenJWT: string,
  ): Observable<AxiosResponse> {
    const body = {
      name: name,
      composite: false,
      clientRole: false,
      containerId: realm,
    };
    return this.httpService.post(
      `${this.server_url}/admin/realms/${realm}/roles`,
      body,
      {
        headers: {
          Authorization: `${accessTokenJWT}`,
        },
      },
    );
  }
  deleteRole(
    name: string,
    realm: string,
    accessTokenJWT: string,
  ): Observable<AxiosResponse> {
    console.log(name);
    return this.httpService.delete(
      `${this.server_url}/admin/realms/${realm}/roles/${name}`,
      {
        headers: {
          Authorization: `${accessTokenJWT}`,
        },
      },
    );
  }
  getRealmRole(
    name: string,
    realm: string,
    accessTokenJWT: string,
  ): Observable<AxiosResponse> {
    return this.httpService.get(
      `${this.server_url}/admin/realms/${realm}/roles/${name}`,
      {
        headers: {
          Authorization: `${accessTokenJWT}`,
        },
      },
    );
  }

  getUserToken(username: string, password: string): Observable<AxiosResponse> {
    const params = new URLSearchParams();
    params.append('client_secret', this.configService.get('client_secret'));
    params.append('client_id', this.configService.get('clientId'));
    params.append('grant_type', 'password');
    params.append('username', username);
    params.append('password', password);

    return this.httpService.post(
      `${this.server_url}/realms/${this.configService.get(
        'realm',
      )}/protocol/openid-connect/token`,
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
  }
}
