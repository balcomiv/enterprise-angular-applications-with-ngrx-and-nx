import { Injectable } from '@angular/core';
import { AuthenticationModel } from '@enterprise-angular-applications-with-ngrx-and-nx/data-models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';

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
