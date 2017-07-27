import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  user:any = {};

  constructor() {
    this.user = JSON.parse( localStorage.user );
    console.log(localStorage.user);
  }

  ngOnInit() {
  }

}
