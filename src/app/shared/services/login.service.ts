import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/core/models/login.model';

@Injectable()
export class LoginService {

  constructor() { }

  save(login: LoginModel): string {
    return `Save success ${login.pass} - ${login.user}`;
  }

  get(): LoginModel {
    return { user: 'Daniel', pass: 'Gomez'};
  }
}
