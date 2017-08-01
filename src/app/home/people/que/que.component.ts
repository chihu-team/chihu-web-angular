import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-que',
  templateUrl: './que.component.html',
  styleUrls: ['./que.component.scss']
})
export class QueComponent implements OnInit {

  _id;
  data:any = [];

  constructor( public router: Router ) {
    this._id = this.router.url.split('/')[2];
    
  }

  ngOnInit() {
  }

}
