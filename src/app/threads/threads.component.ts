import { Component, OnInit } from '@angular/core';
import { Threads } from 'src/models/threads';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {
  thread = new Threads();

  constructor() { }

  ngOnInit(): void {
  }

}
