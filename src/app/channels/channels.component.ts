import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

  channels: any = [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
