import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Confirmable } from 'src/app/decorators/confirmable.decorator';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  submitted: boolean = false;
  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  get firstname() {
    return this.form.get('firstName')
  }
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

  }
}
