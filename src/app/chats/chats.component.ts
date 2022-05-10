import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/models/chats.class';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  chat = new Chat(); // der classe
  channelId:any = "34ZwSspRlHNTgu6OWRwg";
  chats : any  = [] = [];

  constructor(private firestore:AngularFirestore,public authService: AuthenticationService,
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
  }

  clearChannel() {
    this.chat = new Chat();
  }

}
