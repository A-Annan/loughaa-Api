export class Access {
  manageGroupMembership: boolean;
  view: boolean;
  mapRoles: boolean;
  impersonate: boolean;
  manage: boolean;

  constructor() {
    this.manageGroupMembership = true;
    this.view = true;
    this.mapRoles = true;
    this.impersonate = true;
    this.manage = true;
  }
}

export class Credentials {
  type: string;
  value: string;
  temporary: boolean;

  constructor(passwordValue: string) {
    this.type = 'password';
    this.value = passwordValue;
    this.temporary = true;
  }
}
export class keycloakUserSchema {
  username: string;
  enabled: boolean;
  totp: boolean;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
  email: string;
  credentials: Credentials[];
  notBefore: number;
  access: Access;

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) {
    this.username = username;
    this.enabled = true;
    this.totp = false;
    this.emailVerified = true;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.notBefore = 0;
    this.credentials = new Array<Credentials>();
    const credential = new Credentials(password);
    this.credentials.push({ ...credential });
    this.access = new Access();
  }
}
