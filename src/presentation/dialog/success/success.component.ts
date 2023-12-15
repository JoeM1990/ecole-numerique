import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:string, private matDialogRef: MatDialogRef<SuccessComponent>) { }


  ngOnInit(): void {
  }

}
