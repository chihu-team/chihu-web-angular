import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fork-que',
  templateUrl: './fork-que.component.html',
  styleUrls: ['./fork-que.component.scss']
})
export class ForkQueComponent implements OnInit {

  _id;
  data:any = [];

  constructor( public router: Router ) {
    this._id = this.router.url.split('/')[2];
    
  }

  ngOnInit() {
  }

}
