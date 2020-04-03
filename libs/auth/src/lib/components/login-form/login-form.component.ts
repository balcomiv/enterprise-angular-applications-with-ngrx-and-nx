import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authenticate } from '@enterprise-angular-applications-with-ngrx-and-nx/data-models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() submitLogin = new EventEmitter<Authenticate>();

  constructor() {}

  ngOnInit(): void {}

  login(authModel: Authenticate) {
    this.submitLogin.emit(authModel);
  }
}
