import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnInit {

  _id;
  data:any = [];

  constructor( public router: Router ) {
    this._id = this.router.url.split('/')[2];
    
  }

  ngOnInit() {
  }

}
