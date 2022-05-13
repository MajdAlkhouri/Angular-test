import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/models/chats.class';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-chats',


  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

public  popoverTitle = 'löschen ? ';

public  confirmClicked:boolean = false;
public cancelClicked:boolean = false;

  chat = new Chat(); // der classe
  channelId:any = "";
  chats : any  = [] = [];
  editMessage ! : string ;
  showAddContainer: boolean=false;
  showthread: boolean=false;

  constructor(  public dialog: MatDialog,
    private firestore:AngularFirestore,public authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,

    ) { }

  ngOnInit(): void {
   // this.firestore.collection('chats')
   // .valueChanges({ idField: 'customIdName' })//wenn etwas ändert
   // .subscribe((changes: any) => { //daten holen
   //   this.chats = changes; // changes in array channels pushen
   // })

    this.activatedRoute.paramMap.subscribe((param) => {
      this.channelId = param.get('id');
      
      this.firestore.collection('chats', ref => ref.where('chatChannelId', '==', this.channelId))
        .valueChanges({ idField: 'customIdName' })
        .subscribe((changes: any) => {
          this.chats = changes;
        })
    })

  }


  sendMessage(){
    let userName = this.authService.currentUser.displayName;
    this.firestore.collection('chats').add({
      message: this.chat.message,
      author: userName,
      chatChannelId: this.channelId,
     
    })
    this.clearChannel();
    this.showthread = false;
  }

  clearChannel() {
    this.chat = new Chat();
  }

  removeChat(chat : any){
    console.log(chat);
    this.firestore.collection('chats').doc(chat['customIdName']).delete();
  }

  editChat(chat : any){
    console.log(this.editMessage);
    this.firestore.collection("chats").doc(chat['customIdName']) // hier um eine feld zu updaten bzw editieren
      .update({ message: this.editMessage })// message in wert von editMessage umwandeln
     
      console.log(this.showAddContainer );
    this.editMessage = '';
  }

  showEditContainer(chat : any){
    console.log(chat.showAddContainer );

    chat.showAddContainer = true;
  }

  showThread(){
    this.showthread = true;
    console.log(this.showthread);

    this.firestore
    .collection('threads', ref => ref.where('chatChannelId', '==', this.channelId))
    .valueChanges({ idField: 'customIdName' })
    .subscribe((threads: any) => {
      
    })
 

  }

}
