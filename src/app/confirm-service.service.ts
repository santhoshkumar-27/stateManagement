import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModelpopComponent } from './modelpop/modelpop.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmServiceService {

  constructor(public dialog: NgbModal) {}

  public confirm(data: any): Observable<boolean> {
    let dialogRef: NgbModalRef;
    dialogRef = this.dialog.open(ModelpopComponent);
    dialogRef.componentInstance.title =  data.title || 'Confirm';
    dialogRef.componentInstance.decription =  data.decription || 'Are you sure?';
    return dialogRef.closed;
  }
}
