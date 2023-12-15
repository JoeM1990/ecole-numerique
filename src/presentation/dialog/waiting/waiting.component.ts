import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.css']
})
export class WaitingComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:string, private matDialogRef: MatDialogRef<ErrorComponent>) { }

  ngOnInit(): void {
  }

}