import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Added
import { RouterModule } from '@angular/router';
import { AuthModule, authRoutes } from '@enterprise-angular/auth';
import { LayoutModule } from '@enterprise-angular/layout';
import { AppComponent } from './app.component';

//#region Routing
const rootRouteModule = RouterModule.forRoot(
  [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', children: authRoutes }
    // { path: '**', component: PageNotFoundComponent }
  ],
  {
    initialNavigation: 'enabled'
  }
);
//#endregion

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    rootRouteModule,
    AuthModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
