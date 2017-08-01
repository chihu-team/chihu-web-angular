import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fork-user',
  templateUrl: './fork-user.component.html',
  styleUrls: ['./fork-user.component.scss']
})
export class ForkUserComponent implements OnInit {

  _id;
  data:any = [];

  constructor( public router: Router ) {
    this._id = this.router.url.split('/')[2];
    
  }

  ngOnInit() {
  }

}
