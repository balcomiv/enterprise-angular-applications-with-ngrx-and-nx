import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationModel, User } from '@enterprise-angular/data-models';
import { EventEmitter } from 'events';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubeject$ = new BehaviorSubject<User>(null);
  user$ = this.userSubeject$.asObservable();

  private unsubscribe = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubeject$.next(JSON.parse(user));
    }
  }

  login(authModel: AuthenticationModel): Observable<any> {
    return this.httpClient
      .post<User>('http://localhost:3000/login', authModel)
      .pipe(
        tap(user => {
          this.userSubeject$.next(user);
          localStorage.setItem('user', JSON.stringify(user));
        })
      );
  }

  logout(): void {
    this.userSubeject$.next(null);
    localStorage.removeItem('user');
  }
}
