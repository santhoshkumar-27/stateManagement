import { Component, OnInit, Optional, TemplateRef, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modelpop',
  templateUrl: './modelpop.component.html',
  styleUrls: ['./modelpop.component.scss']
})
export class ModelpopComponent implements OnInit {
  title: string = '';
  decription: string = '';
  rightSideButton: string = '';
  leftSideButton: string = '';
  constructor(private modalService: NgbActiveModal ) {
  }


  ngOnInit(): void {
   
  }
  close(condition: boolean) {
    this.modalService.close(condition)
  }
}
