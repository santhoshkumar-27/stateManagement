import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Confirmable } from 'src/app/shared/decorators/confirmable.decorator';
import { AppState } from 'src/app/state/app.state';
import { authSignupAction } from '../state/auth.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userInfor!: FormGroup;

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
    title: 'Signup confirmation',
    decription: 'Are you sure you want to Signup?',
    leftSideButton: 'Cancel',
    rightSideButton: 'Continue',
  })
  onSignupFormSubmit() {
    this.store.dispatch(authSignupAction({...this.userInfor.value}));
    this.userInfor.reset();
  }
}
