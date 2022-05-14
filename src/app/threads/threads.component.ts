import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/models/chats.class';
import { Threads } from 'src/models/threads.class';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {
  thread = new Threads();
  message!: string;
  chat = new Chat(); 
  channelId:any = "";
  chats : any  = [] = [];
  threads : any  = [] = [];
  currentThread='';
  index : any  = [] = [];
  


  constructor( private firestore:AngularFirestore,public authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {

     this.activatedRoute.paramMap.subscribe((param) => {
      this.channelId = param.get('id');
      
      this.firestore.collection('chats', ref => ref.where('chatChannelId', '==', this.channelId))
        .valueChanges({ idField: 'customIdName' })
        .subscribe((changes: any) => {
          this.chats = changes;
        })
    })

  }

  showThreads(index: string){
    this.currentThread = index;
  //  .add(this.channel.toJson())// in json umwandeln
    //.then((result: any) => {
    
   // })
    console.log(this.chat);
    let userName = this.authService.currentUser.displayName;
    this.firestore.collection('threads')
    .add({
      message: this.chat.message,
      author: userName,
 
     
    })
  }

  sendtMessage(){

  }

}
