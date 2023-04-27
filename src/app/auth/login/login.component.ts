import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInfor!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userInfor = this.fb.group({
      userName: new FormControl('', [Validators.required]),
      passWord: new FormControl('', [Validators.required])
    })
  }
  get f() {
    return this.userInfor.controls;
  }
  getControls(controllerName: string): FormControl {
    return (this.userInfor.get(controllerName) as FormControl)
  }
  onLoginFormSubmit() {
    const payload ={ ...this.userInfor.value}
    console.log(payload);
  }
}
