import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationModel, User } from '@enterprise-angular/data-models';
import { EventEmitter } from 'events';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubeject$ = new ReplaySubject<User>(1);
  user$ = this.userSubeject$.asObservable();

  private unsubscribe = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  login(authModel: AuthenticationModel): Observable<any> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authModel)
      .pipe(tap(user => this.userSubeject$.next(user)));
  }
}
