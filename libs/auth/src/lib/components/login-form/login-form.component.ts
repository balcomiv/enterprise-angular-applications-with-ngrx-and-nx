import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationModel } from '@enterprise-angular/data-models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() submitLogin = new EventEmitter<AuthenticationModel>();

  constructor() {}

  ngOnInit(): void {}

  login(authModel: AuthenticationModel) {
    this.submitLogin.emit(authModel);
  }
}
