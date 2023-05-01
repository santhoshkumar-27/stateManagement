import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Confirmable } from 'src/app/shared/decorators/confirmable.decorator';
import { AppState } from 'src/app/state/app.state';
import { addPostList, updatePost } from '../state/post.action';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById, getPostList } from '../state/post.selector';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit, OnDestroy {
  invokeSave = false;
  submitted: boolean = false;
  form!: FormGroup;
  id!: number;
  fromStatePostDataHolder!: any;
  store$: any;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
    if (this.route.url.includes('add-post')) {
      this.invokeSave = true;
    } else {
      this.id = this.activatedRoute.snapshot.params['id'];
      // this.store$ = this.store.select(getPostById, { id: this.id }).subscribe((res: any) => {
      //   this.fromStatePostDataHolder = res;
      //   this.patchForm()
      // })
    }
  }
  get f(): any {
    return this.form.controls;
  }
  patchForm() {
    this.form.patchValue({
      firstName: this.fromStatePostDataHolder.firstName,
      lastName: this.fromStatePostDataHolder.lastName
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { return };
    if (this.invokeSave) {
      this.saveDataOnState();
    } else {
      this.updateDataOnState()
    }
  }

  @Confirmable({
    title: 'Save confirmation',
    decription: 'Are you sure you want to add?',
    leftSideButton: 'Cancel',
    rightSideButton: 'Add',
  })
  saveDataOnState() {
    this.store.dispatch(addPostList({ data: this.form.value }))
    this.route.navigate(['post'])
  }

  @Confirmable({
    title: 'Update confirmation',
    decription: 'Are you sure you want to Update?',
    leftSideButton: 'Cancel',
    rightSideButton: 'Update',
  })
  updateDataOnState() {
    this.store.dispatch(updatePost({ data: {...this.form.value, id: this.id} }))
    this.route.navigate(['post'])
  }
  ngOnDestroy(): void {
    this.store$ && this.store$.unsubscribe()
  }
}
