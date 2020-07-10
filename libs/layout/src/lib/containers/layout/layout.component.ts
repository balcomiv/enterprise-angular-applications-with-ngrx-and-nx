import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@enterprise-angular/auth';
import { User } from '@enterprise-angular/data-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'enterprise-angular-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<User>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
