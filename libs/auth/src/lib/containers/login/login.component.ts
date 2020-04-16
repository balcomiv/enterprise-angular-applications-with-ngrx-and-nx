import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AuthenticationModel } from '@enterprise-angular-applications-with-ngrx-and-nx/data-models';
import { takeUntil } from 'rxjs/operators';

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
