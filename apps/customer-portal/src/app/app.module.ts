import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  AuthModule,
  authRoutes
} from '@enterprise-angular-applications-with-ngrx-and-nx/auth';
import { LoginComponent } from 'libs/auth/src/lib/containers/login/login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'auth', pathMatch: 'full' },
        { path: 'auth', children: authRoutes }
        // { path: '**', component: PageNotFoundComponent }
      ],
      {
        initialNavigation: 'enabled'
      }
    ),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
