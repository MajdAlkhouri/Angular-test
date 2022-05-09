
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OverlayComponentComponent } from 'src/app/overlay-component/overlay-component.component';
import { AuthenticationService } from 'src/app/services/authentication.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any = []
 

  constructor( public dialog: MatDialog, private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  



}
