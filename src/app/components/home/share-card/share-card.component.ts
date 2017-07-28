import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share-card',
  templateUrl: './share-card.component.html',
  styleUrls: ['./share-card.component.scss']
})
export class ShareCardComponent implements OnInit {

  @Input() datas:any = [];

  constructor() { }

  ngOnInit() {
  }

}
