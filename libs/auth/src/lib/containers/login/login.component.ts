import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '@enterprise-angular/data-models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(authModel: AuthenticationModel) {
    this.authService.login(authModel).subscribe(() => {});
  }
}
