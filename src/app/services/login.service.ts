import { NAJA_API } from './najaapi.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  // tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient) { }

  login(token: string) {
    // console.log('entrou login');
    this.http.post(`${NAJA_API}/users/oauth/google`, token);
  }

}
