import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { collection } from 'firebase/firestore';
import { Chat } from 'src/models/chats.class';
import { Threads } from 'src/models/threads.class';
import { AuthenticationService } from '../services/authentication.service';
import { ThreadService } from '../services/thread.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss'],
})
export class ThreadsComponent implements OnInit, OnChanges {

 
  channelId: any = '';
  chats: any = [] = [];
  threads: any = [] = [];
  index: any = ([] = []);
  chat = new Chat();


 @Input() thread !: any; 

  constructor(
    private firestore: AngularFirestore,
    public authService: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    public  threadService: ThreadService,
  ) {}


  ngOnInit(): void {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   this.firestore
   .collection('threads', (ref) =>
     ref.where('chatID', '==', this.thread.customIdName)
   )
   .valueChanges({ idField: 'customIdName' })
   .subscribe((changes: any) => {
     this.threads = changes;
   });
  }

  sendMessage() {
    this.firestore.collection('threads').add(
      {
        chatID : this.thread.customIdName,
        message: "hhfd",
      }
    )
  }
}
