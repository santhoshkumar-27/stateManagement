import { Component, OnInit, Optional, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modelpop',
  templateUrl: './modelpop.component.html',
  styleUrls: ['./modelpop.component.scss']
})
export class ModelpopComponent implements OnInit {
  @ViewChild('data') template!: TemplateRef<any>;
  dialogref: any;
  title: string = '';
  decription: string = '';
  constructor(@Optional() private modalService: NgbModal) {
  }

	open() {
		this.dialogref = this.modalService.open(this.template, { ariaLabelledBy: 'modal-basic-title' })
	}


  ngOnInit(): void {
  }

}
