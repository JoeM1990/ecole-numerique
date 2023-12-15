import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:string, private matDialogRef: MatDialogRef<ConfirmationComponent>) { }

  ngOnInit(): void {
  }

  onDestroy(){
    this.matDialogRef.close();
  }

  onValidate(){
    this.matDialogRef.close();
  }

}
