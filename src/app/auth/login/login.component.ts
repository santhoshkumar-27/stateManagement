import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { authLoginAction } from '../state/auth.action';
import { getUsernameAndPassword } from '../state/auth.selector';
import { Confirmable } from 'src/app/decorators/confirmable.decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInfor!: FormGroup;
  loginDetails$ = this.store.select(getUsernameAndPassword)
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.userInfor = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  get f() {
    return this.userInfor.controls;
  }
  getControls(controllerName: string): FormControl {
    return (this.userInfor.get(controllerName) as FormControl)
  }
  @Confirmable({
    title: 'Login confirmation',
    decription: 'Are you sure you want to login?',
    leftSideButton: 'Cancel',
    rightSideButton: 'Login',
  })
  onLoginFormSubmit() {
    const payload ={ ...this.userInfor.value}
    console.log(payload);
    this.store.dispatch(authLoginAction({loginCredentials: payload}))
    this.userInfor.reset();
  }
}
