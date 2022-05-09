import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-overlay-component',
  templateUrl: './overlay-component.component.html',
  styleUrls: ['./overlay-component.component.scss']
})
export class OverlayComponentComponent implements OnInit {
  user: any = '';
  name:any = '';
  channels:any = []= [];
  
  constructor( public dialog: MatDialog, 
    public dialogRef: MatDialogRef<OverlayComponentComponent>) { }

  ngOnInit(): void {
  }

  onNoClick():void{
    this.dialogRef.close();
  }

  saveChannel(){
    
  }

}
