import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationModel } from '@enterprise-angular/data-models';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private unsubscribe = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  login(authModel: AuthenticationModel): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', authModel);
  }
}
