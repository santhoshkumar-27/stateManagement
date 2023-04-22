import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Confirmable } from 'src/app/decorators/confirmable.decorator';
import { AppState } from 'src/app/state/app.state';
import { addPostList } from '../state/post.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  submitted: boolean = false;
  form!: FormGroup;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }
  get f(): any {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { return };
    this.saveDataOnState();
  }

   @Confirmable({
    title: 'Save confirmation', 
    decription: 'Are you sure you want to add?',
    leftSideButton: 'Cancel',
    rightSideButton: 'Add',
  })
  saveDataOnState() {
    this.store.dispatch(addPostList({data: this.form.value}))
    this.route.navigate(['post'])
  }
}
