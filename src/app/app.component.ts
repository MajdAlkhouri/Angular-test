import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { OverlayComponentComponent } from './overlay-component/overlay-component.component';
import { AuthenticationService } from './services/authentication.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 title(title: any) {
   throw new Error('Method not implemented.');
 }

 constructor(public authService: AuthenticationService, private router: Router,public dialog: MatDialog,
 
  ){

 }

 logout(){
   this.authService.logout().subscribe(() =>{
     this.router.navigate(['']);
   });
 }


 openDialog(){
  const dialogRef = this.dialog.open(OverlayComponentComponent);

  dialogRef.afterClosed().subscribe((channelName: any) => {
    console.log('The dialog was closed', channelName);
    if (channelName && channelName.length > 0) {
     

   
 

      }
    });
  }
}
